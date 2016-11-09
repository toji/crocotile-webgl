/*
Copyright (c) 2016, Brandon Jones.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import Program from "./util/program";

const crocotileUnlitVS = `
  uniform mat4 projectionMat;
  uniform mat4 modelViewMat;
  attribute vec3 position;
  attribute vec2 texCoord;
  varying vec2 vTexCoord;

  void main() {
    vTexCoord = texCoord;
    gl_Position = projectionMat * modelViewMat * vec4( position, 1.0 );
  }
`;

const crocotileUnlitFS = `
  precision mediump float;
  uniform sampler2D diffuse;
  varying vec2 vTexCoord;

  void main() {
    vec4 color = texture2D(diffuse, vTexCoord);
    if (color.a < 0.1) {
      discard;
    }
    gl_FragColor = color;
  }
`;

function loadTexture(gl, src) {
  let texture = gl.createTexture();

  let img = new Image();
  img.addEventListener('load', function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  });
  img.src = src;

  return texture;
}

/**
 * CrocotileModel
 *
 * @module CrocotileModel
 */

class CrocotileModel {
  constructor(gl, json) {
    this.gl = gl;
    this.texture = loadTexture(gl, json.texture);

    // Load the mesh
    let vertices = [];
    let indices = [];

    for (let object of json.object) {
      let p = object.position;

      for (let i = 0; i < object.faces.length; ++i) {
        let face = object.faces[i];
        let uvs = object.uvs[i];
        for (let j = 0; j < face.length; ++j) {
          let v = object.vertices[face[j]];
          vertices.push(v.x + p.x, v.y + p.y, v.z + p.z);
          vertices.push(uvs[j].x, (uvs[j].y * -1) + 1.0);
        }
      }
    }

    this.vertexCount = vertices.length / 5;
    this.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  }

  draw(program) {
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.vertexAttribPointer(program.attrib.position, 3, gl.FLOAT, false, 20, 0);
    gl.vertexAttribPointer(program.attrib.texCoord, 2, gl.FLOAT, false, 20, 12);

    gl.drawArrays(gl.TRIANGLES, 0, this.vertexCount);
  }
}

/**
 * CrocotileScene
 *
 * @module CrocotileScene
 */

class CrocotileScene {
  constructor(gl, config) {
    this.gl = gl;

    this.config = config;
    this.models = [];

    this.program = new Program(gl, crocotileUnlitVS, crocotileUnlitFS);
    this.program.bindAttribLocation({
      position: 0,
      texCoord: 1
    });
    this.program.link();
  }

  draw(projection, modelView) {
    var gl = this.gl;
    var program = this.program;

    program.use();

    gl.uniformMatrix4fv(program.uniform.projectionMat, false, projection);
    gl.uniformMatrix4fv(program.uniform.modelViewMat, false, modelView);

    gl.enableVertexAttribArray(program.attrib.position);
    gl.enableVertexAttribArray(program.attrib.texCoord);

    gl.activeTexture(gl.TEXTURE0);
    gl.uniform1i(program.uniform.diffuse, 0);

    for (let model of this.models) {
      model.draw(program);
    }
  }
}

/**
 * CrocotileLoader
 *
 * @module CrocotileLoader
 */
export class CrocotileLoader {
  constructor(gl) {
    this.gl = gl;
  }

  load(url) {
    let loader = this;

    return fetch(url).then(function(response) {
      return response.json().then(function(json) {
        let scene = new CrocotileScene(gl, json.config);

        for (let model of json.model) {
          scene.models.push(new CrocotileModel(gl, model));
        }

        return scene;
      });
    });
  }
}
