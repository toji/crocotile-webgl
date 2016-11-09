/* Copyright (c) 2016, Brandon Jones.

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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CrocotileLoader = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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
	
	var _program = __webpack_require__(1);
	
	var _program2 = _interopRequireDefault(_program);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var crocotileUnlitVS = "\n  uniform mat4 projectionMat;\n  uniform mat4 modelViewMat;\n  attribute vec3 position;\n  attribute vec2 texCoord;\n  varying vec2 vTexCoord;\n\n  void main() {\n    vTexCoord = texCoord;\n    gl_Position = projectionMat * modelViewMat * vec4( position, 1.0 );\n  }\n";
	
	var crocotileUnlitFS = "\n  precision mediump float;\n  uniform sampler2D diffuse;\n  varying vec2 vTexCoord;\n\n  void main() {\n    vec4 color = texture2D(diffuse, vTexCoord);\n    if (color.a < 0.1) {\n      discard;\n    }\n    gl_FragColor = color;\n  }\n";
	
	function loadTexture(gl, src) {
	  var texture = gl.createTexture();
	
	  var img = new Image();
	  img.addEventListener('load', function () {
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
	
	var CrocotileModel = function () {
	  function CrocotileModel(gl, json) {
	    _classCallCheck(this, CrocotileModel);
	
	    this.gl = gl;
	    this.texture = loadTexture(gl, json.texture);
	
	    // Load the mesh
	    var vertices = [];
	    var indices = [];
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = json.object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var object = _step.value;
	
	        var p = object.position;
	
	        for (var i = 0; i < object.faces.length; ++i) {
	          var face = object.faces[i];
	          var uvs = object.uvs[i];
	          for (var j = 0; j < face.length; ++j) {
	            var v = object.vertices[face[j]];
	            vertices.push(v.x + p.x, v.y + p.y, v.z + p.z);
	            vertices.push(uvs[j].x, uvs[j].y * -1 + 1.0);
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    this.vertexCount = vertices.length / 5;
	    this.vertexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	  }
	
	  _createClass(CrocotileModel, [{
	    key: "draw",
	    value: function draw(program) {
	      gl.bindTexture(gl.TEXTURE_2D, this.texture);
	
	      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
	      gl.vertexAttribPointer(program.attrib.position, 3, gl.FLOAT, false, 20, 0);
	      gl.vertexAttribPointer(program.attrib.texCoord, 2, gl.FLOAT, false, 20, 12);
	
	      gl.drawArrays(gl.TRIANGLES, 0, this.vertexCount);
	    }
	  }]);
	
	  return CrocotileModel;
	}();
	
	/**
	 * CrocotileScene
	 *
	 * @module CrocotileScene
	 */
	
	var CrocotileScene = function () {
	  function CrocotileScene(gl, config) {
	    _classCallCheck(this, CrocotileScene);
	
	    this.gl = gl;
	
	    this.config = config;
	    this.models = [];
	
	    this.program = new _program2.default(gl, crocotileUnlitVS, crocotileUnlitFS);
	    this.program.bindAttribLocation({
	      position: 0,
	      texCoord: 1
	    });
	    this.program.link();
	  }
	
	  _createClass(CrocotileScene, [{
	    key: "draw",
	    value: function draw(projection, modelView) {
	      var gl = this.gl;
	      var program = this.program;
	
	      program.use();
	
	      gl.uniformMatrix4fv(program.uniform.projectionMat, false, projection);
	      gl.uniformMatrix4fv(program.uniform.modelViewMat, false, modelView);
	
	      gl.enableVertexAttribArray(program.attrib.position);
	      gl.enableVertexAttribArray(program.attrib.texCoord);
	
	      gl.activeTexture(gl.TEXTURE0);
	      gl.uniform1i(program.uniform.diffuse, 0);
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = this.models[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var model = _step2.value;
	
	          model.draw(program);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }]);
	
	  return CrocotileScene;
	}();
	
	/**
	 * CrocotileLoader
	 *
	 * @module CrocotileLoader
	 */
	
	
	var CrocotileLoader = exports.CrocotileLoader = function () {
	  function CrocotileLoader(gl) {
	    _classCallCheck(this, CrocotileLoader);
	
	    this.gl = gl;
	  }
	
	  _createClass(CrocotileLoader, [{
	    key: "load",
	    value: function load(url) {
	      var loader = this;
	
	      return fetch(url).then(function (response) {
	        return response.json().then(function (json) {
	          var scene = new CrocotileScene(gl, json.config);
	
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;
	
	          try {
	            for (var _iterator3 = json.model[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var model = _step3.value;
	
	              scene.models.push(new CrocotileModel(gl, model));
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	
	          return scene;
	        });
	      });
	    }
	  }]);

	  return CrocotileLoader;
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	/**
	 * Program
	 * Utility class to make loading shader programs easier. Does all the error
	 * checking you typically want, automatically queries uniform and attribute
	 * locations, and attempts to take advantage of some browser's ability to link
	 * asynchronously by not querying any information from the program until it's
	 * first use.
	 * @module Program
	 */
	
	var Program = function () {
	  function Program(gl, vertexSource, fragmentSource) {
	    _classCallCheck(this, Program);
	
	    this.gl = gl;
	    this.program = gl.createProgram();
	    this.attrib = null;
	    this.uniform = null;
	
	    this._firstUse = true;
	    this._vertexShader = null;
	    this._fragmentShader = null;
	
	    if (vertexSource) this.attachShaderSource(vertexSource, gl.VERTEX_SHADER);
	
	    if (fragmentSource) this.attachShaderSource(fragmentSource, gl.FRAGMENT_SHADER);
	  }
	
	  _createClass(Program, [{
	    key: "attachShaderSource",
	    value: function attachShaderSource(source, type) {
	      var gl = this.gl;
	      var shader = void 0;
	
	      switch (type) {
	        case gl.VERTEX_SHADER:
	          this._vertexShader = gl.createShader(type);
	          shader = this._vertexShader;
	          break;
	        case gl.FRAGMENT_SHADER:
	          this._fragmentShader = gl.createShader(type);
	          shader = this._fragmentShader;
	          break;
	        default:
	          console.Error("Invalid Shader Type:", type);
	          return;
	      }
	
	      gl.attachShader(this.program, shader);
	      gl.shaderSource(shader, source);
	      gl.compileShader(shader);
	    }
	  }, {
	    key: "attachShaderSourceFromXHR",
	    value: function attachShaderSourceFromXHR(url, type) {
	      var self = this;
	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.addEventListener("load", function (ev) {
	          if (xhr.status == 200) {
	            self.attachShaderSource(xhr.response, type);
	            resolve();
	          } else {
	            reject(xhr.statusText);
	          }
	        }, false);
	        xhr.open("GET", url, true);
	        xhr.send(null);
	      });
	    }
	  }, {
	    key: "attachShaderSourceFromTag",
	    value: function attachShaderSourceFromTag(tagId, type) {
	      var shaderTag = document.getElementById(tagId);
	      if (!shaderTag) {
	        console.error("Shader source tag not found:", tagId);
	        return;
	      }
	
	      if (!type) {
	        if (shaderTag.type == "x-shader/x-vertex") {
	          type = this.gl.VERTEX_SHADER;
	        } else if (shaderTag.type == "x-shader/x-fragment") {
	          type = this.gl.FRAGMENT_SHADER;
	        } else {
	          console.error("Invalid Shader Type:", shaderTag.type);
	          return;
	        }
	      }
	
	      var src = "";
	      var k = shaderTag.firstChild;
	      while (k) {
	        if (k.nodeType == 3) {
	          src += k.textContent;
	        }
	        k = k.nextSibling;
	      }
	      this.attachShaderSource(src, type);
	    }
	  }, {
	    key: "bindAttribLocation",
	    value: function bindAttribLocation(attribLocationMap) {
	      var gl = this.gl;
	
	      if (attribLocationMap) {
	        this.attrib = {};
	        for (var attribName in attribLocationMap) {
	          gl.bindAttribLocation(this.program, attribLocationMap[attribName], attribName);
	          this.attrib[attribName] = attribLocationMap[attribName];
	        }
	      }
	    }
	  }, {
	    key: "transformFeedbackVaryings",
	    value: function transformFeedbackVaryings(varyings, type) {
	      this.gl.transformFeedbackVaryings(this.program, varyings, type);
	    }
	  }, {
	    key: "link",
	    value: function link() {
	      this.gl.linkProgram(this.program);
	    }
	  }, {
	    key: "use",
	    value: function use() {
	      var gl = this.gl;
	
	      // If this is the first time the program has been used do all the error checking and
	      // attrib/uniform querying needed.
	      if (this._firstUse) {
	        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
	          if (this._vertexShader && !gl.getShaderParameter(this._vertexShader, gl.COMPILE_STATUS)) {
	            console.error("Vertex shader compile error:", gl.getShaderInfoLog(this._vertexShader));
	          } else if (this._fragmentShader && !gl.getShaderParameter(this._fragmentShader, gl.COMPILE_STATUS)) {
	            console.error("Fragment shader compile error:", gl.getShaderInfoLog(this._fragmentShader));
	          } else {
	            console.error("Program link error:", gl.getProgramInfoLog(this.program));
	          }
	          gl.deleteProgram(this.program);
	          this.program = null;
	        } else {
	          if (!this.attrib) {
	            this.attrib = {};
	            var attribCount = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
	            for (var i = 0; i < attribCount; i++) {
	              var attribInfo = gl.getActiveAttrib(this.program, i);
	              this.attrib[attribInfo.name] = gl.getAttribLocation(this.program, attribInfo.name);
	            }
	          }
	
	          this.uniform = {};
	          var uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
	          var uniformName = "";
	          for (var _i = 0; _i < uniformCount; _i++) {
	            var uniformInfo = gl.getActiveUniform(this.program, _i);
	            uniformName = uniformInfo.name.replace("[0]", "");
	            this.uniform[uniformName] = gl.getUniformLocation(this.program, uniformName);
	          }
	        }
	        gl.deleteShader(this._vertexShader);
	        gl.deleteShader(this._fragmentShader);
	        this._firstUse = false;
	      }
	
	      gl.useProgram(this.program);
	    }
	  }]);
	
	  return Program;
	}();
	
	exports.default = Program;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=crocotile.debug.js.map