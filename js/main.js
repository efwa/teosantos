define("text", ["module"], function(e) {
    "use strict";
    var t, i, n = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        o = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        a = "undefined" != typeof location && location.href,
        s = a && location.protocol && location.protocol.replace(/\:/, ""),
        u = a && location.hostname,
        c = a && (location.port || void 0),
        h = [],
        l = e.config && e.config() || {};
    return t = {
        version: "2.0.1",
        strip: function(e) {
            if (e) {
                e = e.replace(r, "");
                var t = e.match(o);
                t && (e = t[1])
            } else e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: l.createXhr || function() {
            var e, t, i;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (t = 0; 3 > t; t += 1) {
                    i = n[t];
                    try {
                        e = new ActiveXObject(i)
                    } catch (r) {}
                    if (e) {
                        n = [i];
                        break
                    }
                }
            return e
        },
        parseName: function(e) {
            var t = !1,
                i = e.indexOf("."),
                n = e.substring(0, i),
                r = e.substring(i + 1, e.length);
            return i = r.indexOf("!"), -1 !== i && (t = r.substring(i + 1, r.length), t = "strip" === t, r = r.substring(0, i)), {
                moduleName: n,
                ext: r,
                strip: t
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, i, n, r) {
            var o, a, s, u = t.xdRegExp.exec(e);
            return u ? (o = u[2], a = u[3], a = a.split(":"), s = a[1], a = a[0], !(o && o !== i || a && a.toLowerCase() !== n.toLowerCase() || (s || a) && s !== r)) : !0
        },
        finishLoad: function(e, i, n, r) {
            n = i ? t.strip(n) : n, l.isBuild && (h[e] = n), r(n)
        },
        load: function(e, i, n, r) {
            if (r.isBuild && !r.inlineText) return void n();
            l.isBuild = r.isBuild;
            var o = t.parseName(e),
                h = o.moduleName + "." + o.ext,
                m = i.toUrl(h),
                d = l.useXhr || t.useXhr;
            !a || d(m, s, u, c) ? t.get(m, function(i) {
                t.finishLoad(e, o.strip, i, n)
            }, function(e) {
                n.error && n.error(e)
            }) : i([h], function(e) {
                t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, n)
            })
        },
        write: function(e, i, n, r) {
            if (h.hasOwnProperty(i)) {
                var o = t.jsEscape(h[i]);
                n.asModule(e + "!" + i, "define(function () { return '" + o + "';});\n")
            }
        },
        writeFile: function(e, i, n, r, o) {
            var a = t.parseName(i),
                s = a.moduleName + "." + a.ext,
                u = n.toUrl(a.moduleName + "." + a.ext) + ".js";
            t.load(s, n, function(i) {
                var n = function(e) {
                    return r(u, e)
                };
                n.asModule = function(e, t) {
                    return r.asModule(e, u, t)
                }, t.write(e, s, n, o)
            }, o)
        }
    }, "undefined" != typeof process && process.versions && process.versions.node ? (i = require.nodeRequire("fs"), t.get = function(e, t) {
        var n = i.readFileSync(e, "utf8");
        0 === n.indexOf("\ufeff") && (n = n.substring(1)), t(n)
    }) : t.createXhr() ? t.get = function(e, i, n) {
        var r = t.createXhr();
        r.open("GET", e, !0), l.onXhr && l.onXhr(r, e), r.onreadystatechange = function(t) {
            var o, a;
            4 === r.readyState && (o = r.status, o > 399 && 600 > o ? (a = new Error(e + " HTTP status: " + o), a.xhr = r, n(a)) : i(r.responseText))
        }, r.send(null)
    } : "undefined" != typeof Packages && (t.get = function(e, t) {
        var i, n, r = "utf-8",
            o = new java.io.File(e),
            a = java.lang.System.getProperty("line.separator"),
            s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), r)),
            u = "";
        try {
            for (i = new java.lang.StringBuffer, n = s.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), i.append(n); null !== (n = s.readLine());) i.append(a), i.append(n);
            u = String(i.toString())
        } finally {
            s.close()
        }
        t(u)
    }), t
}), define("text!kaleidoscope/template.html", [], function() {
    return '<div id="kaleidoscope_container">\n <canvas id="kaleidoscopeCanvas"></canvas>\n</div>\n\n <script id="vs" type="x-shader/x-vertex">\n   attribute vec3 position;\n    void main() {\n     gl_Position = vec4( position, 1.0 );\n    }\n </script>\n\n <script id="fs" type="x-shader/x-fragment">\n   uniform sampler2D uSampler;\n\n   uniform float time;\n   uniform float baseRotation1;\n    uniform float rotationSpeed1;\n   uniform float baseRotation2;\n    uniform float rotationSpeed2;\n\n   uniform float sliceAngle;\n   uniform float mirrorSlices;\n   uniform vec2 zoom;\n    uniform vec2 resolution;\n    uniform vec2 aspect;\n    uniform vec2 center;\n    uniform vec2 mouseOffset;\n\n   uniform bool pinch;\n\n   void main( void ) {\n\n     vec2 position = -aspect.xy + 2.0 * gl_FragCoord.xy / resolution.xy * aspect.xy;\n     float radius = length(position);\n\n      float angle = atan(position.y,position.x)+baseRotation1;\n      float slice = mod((angle+time*rotationSpeed1), (sliceAngle*2.0));\n     if (mirrorSlices * slice>sliceAngle)\n      {\n       slice = (2.0*sliceAngle-slice);\n     }\n\n     if(pinch)\n     {\n       float rot2 = baseRotation2 + time*rotationSpeed2;\n       rot2 = atan(position.y,position.x)+baseRotation2 + time*rotationSpeed2;\n\n       gl_FragColor = texture2D(uSampler, ( center + length( center ) * vec2( cos(rot2), sin(rot2)) +  mouseOffset +  vec2( cos(slice), sin(slice)) * radius) * zoom );\n\n      } else {\n        float rot2 = baseRotation2 + time*rotationSpeed2;\n       vec2 rot = vec2(sin(rot2),cos(rot2));\n       vec2 pos = vec2( cos(slice), sin(slice)) * radius + center ;\n        gl_FragColor = texture2D(uSampler, (vec2(pos.x * rot.y + pos.y * rot.x,pos.y * rot.y - pos.x * rot.x)) * zoom  +  mouseOffset, -1.0);\n     }\n\n   }\n\n    </script>\n'
}), define("kaleidoscope/_libs/kaleidoscope", [], function() {
    var e = {};
    return function() {
        var t = function(e, t, i) {
                this.deferredLoadEventName = i, this.init(e, t)
            },
            i = t.prototype;
        i.baseRotation1 = 0, i.baseRotation2 = 0, i.rotationSpeed1 = .001, i.rotationSpeed2 = -.001, i.rotationCenterX = .5, i.rotationCenterY = .5, i.updateSettings = function(e) {
            for (name in e) value = final_value = e[name], "zoom" === name ? final_value = value / 100 : "baseRotation1" === name ? final_value = value / 180 * Math.PI : "rotationSpeed1" === name ? final_value = value / 1e4 : "baseRotation2" === name ? final_value = value / 180 * Math.PI : "rotationSpeed2" === name ? final_value = value / 1e4 : "rotationCenterX" === name ? final_value = value / 100 : "rotationCenterY" === name ? final_value = value / 100 : final_value = value, this[name] = final_value;
            this.rotation1 = 0, this.rotation2 = 0
        }, i.image_url = "", i.image_load_queue = [], i.has_dimensions = !1, i.loadImage = function(e) {
            var t = this;
            (void 0 != e && "" != e && e != t.image_url || void 0 == this.currentImage) && (i.image_url = e, Cargo.Event.trigger("show_loading_anim"), this.currentImage = new Image, this.currentImage.crossOrigin = "", cleanImage = Persona.Collection.Images.getCleanImageUrl(e), this.image_load_queue.push({
                url: cleanImage,
                width: this.image_width,
                height: this.image_height
            }), this.currentImage.onload = function() {
                Cargo.Event.trigger("hide_loading_anim");
                var e = t.image_load_queue.pop();
                e.url.split("?")[0] == cleanImage.split("?")[0] && 0 != t.currentImage.width && (e.width && e.height ? t.has_dimensions = !0 : t.has_dimensions = !1, t.updateTexture(), Cargo.Event.trigger(t.deferredLoadEventName))
            }, t.currentImage.src = cleanImage)
        }, i.updateTexture = function() {
            var e = this.gl_ctx;
            if (this.kTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, this.kTexture), this.textureRatio = 1, !this.isPowerOfTwo(this.currentImage.width) || !this.isPowerOfTwo(this.currentImage.height)) {
                var t = document.createElement("canvas");
                t.width = this.nextHighestPowerOfTwo(this.currentImage.width), t.height = this.nextHighestPowerOfTwo(this.currentImage.height);
                var i = t.getContext("2d");
                i.drawImage(this.currentImage, 0, 0, this.currentImage.width, this.currentImage.height, 0, 0, t.width, t.height), this.textureRatio = this.currentImage.height / this.currentImage.width, this.currentImage = t
            }
            this.has_dimensions && (this.textureRatio = this.image_height / this.image_width), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this.currentImage), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, this.mirrorSlices ? e.LINEAR_MIPMAP_NEAREST : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, this.mirrorImageX ? e.MIRRORED_REPEAT : e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, this.mirrorImageY ? e.MIRRORED_REPEAT : e.REPEAT), e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null), this.stop(), this.render()
        }, i.isPowerOfTwo = function(e) {
            return 0 == (e & e - 1)
        }, i.nextHighestPowerOfTwo = function(e) {
            --e;
            for (var t = 1; 32 > t; t <<= 1) e |= e >> t;
            return e + 1
        }, i.setImage = function(e) {
            this.currentImage = e;
            var t = this;
            this.currentImage.onload = function() {
                t.updateTexture()
            }, this.currentImage.complete && this.updateTexture()
        }, i.setSliceCount = function(e) {
            this.slices = 2 * e | 0, this.slices < 4 && (this.slices = 4)
        }, i.setZoom = function(e) {
            this.zoom = e, this.zoom <= 1e-6 && (this.zoom = 1e-6), this.zoom > 10 && (this.zoom = 10)
        }, i.setImageMirroring = function(e, t) {
            this.mirrorImageX = e, this.mirrorImageY = t;
            var i = this.gl_ctx;
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, this.mirrorImageX ? i.MIRRORED_REPEAT : i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, this.mirrorImageY ? i.MIRRORED_REPEAT : i.REPEAT)
        }, i.setMirrorSlices = function(e) {
            this.mirrorSlices = e;
            var t = this.gl_ctx;
            t.bindTexture(t.TEXTURE_2D, this.kTexture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, e ? t.LINEAR_MIPMAP_NEAREST : t.LINEAR), t.bindTexture(t.TEXTURE_2D, null)
        }, i.stop = function() {
            this.renderRequestID && ((window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame)(this.renderRequestID), this.renderRequestID = null)
        }, i.isActive = function() {
            return null != this.renderRequestID
        }, i.start = function() {
            null == this.renderRequestID && this.render()
        }, i.init = function(e, t) {
            this.parameters = {
                start_time: (new Date).getTime(),
                time: 0,
                screenWidth: 0,
                screenHeight: 0,
                resolution: 1
            }, this.vertex_shader = document.getElementById("vs").textContent, this.fragment_shader = document.getElementById("fs").textContent, this.canvas = document.getElementById(e), this.canvas.width = this.parentWidth = this.canvas.parentNode.offsetWidth + 2, this.canvas.height = this.parentHeight = this.canvas.parentNode.offsetHeight + 2;
            try {
                var i = this.gl_ctx = this.canvas.getContext("experimental-webgl")
            } catch (n) {}
            if (!i) throw alert("WebGL not supported"), "cannot create webgl context";
            this.buffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.buffer), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), i.STATIC_DRAW), this.currentProgram = this.createProgram(this.vertex_shader, this.fragment_shader), this.fringePadding = .6, this.canvasMousePos = {
                x: 0,
                y: 0
            }, this.canvasMousePrev = {
                x: -1,
                y: -1
            }, this.size = 0, this.sliceWidth = 0, this.renderRequestID = null, this.alphaAvg = [], this.alphaSum = 0, this.betaAvg = [], this.betaSum = 0, this.gammaAvg = [], this.gammaSum = 0;
            var r = this;
            window.addEventListener("mousemove", function(e) {
                if (r.hasMouseInteraction) {
                    var t = (r.canvas.getBoundingClientRect(), r.zoom / 5),
                        i = e.clientX,
                        n = e.clientY,
                        o = .35 * t + (1 - t);
                    r.canvasMousePos.x = o * i * o, r.canvasMousePos.y = o * n * o
                }
            }, !1), window.addEventListener("touchmove", function(e) {
                if (r.hasMouseInteraction) {
                    var t = r.canvas.getBoundingClientRect();
                    r.canvasMousePos.x = e.targetTouches[0].pageX - t.left, r.canvasMousePos.y = e.targetTouches[0].pageY - t.top
                }
            }, !1), this.updateSettings(t), t.image && this.loadImage(t.image)
        }, i.createProgram = function(e, t) {
            var i = this.gl_ctx,
                n = i.createProgram(),
                r = this.createShader(e, i.VERTEX_SHADER),
                o = this.createShader("#ifdef GL_ES\nprecision highp float;\n#endif\n\n" + t, i.FRAGMENT_SHADER);
            return null == r || null == o ? null : (i.attachShader(n, r), i.attachShader(n, o), i.deleteShader(r), i.deleteShader(o), i.linkProgram(n), i.getProgramParameter(n, i.LINK_STATUS) ? n : (alert("ERROR:\nVALIDATE_STATUS: " + i.getProgramParameter(n, i.VALIDATE_STATUS) + "\nERROR: " + i.getError() + "\n\n- Vertex Shader -\n" + e + "\n\n- Fragment Shader -\n" + t), null))
        }, i.createShader = function(e, t) {
            var i = this.gl_ctx,
                n = i.createShader(t);
            return i.shaderSource(n, e), i.compileShader(n), i.getShaderParameter(n, i.COMPILE_STATUS) ? n : (alert((t == i.VERTEX_SHADER ? "VERTEX" : "FRAGMENT") + " SHADER:\n" + i.getShaderInfoLog(n)), null)
        }, i.getCurrentSettings = function() {
            return {
                slices: this.slices / 2,
                baseRotation1: this.baseRotation1,
                baseRotation2: this.baseRotation2,
                rotationSpeed1: this.rotationSpeed1,
                rotationSpeed2: this.rotationSpeed2,
                rotationCenterX: this.rotationCenterX,
                rotationCenterY: this.rotationCenterY,
                zoom: this.zoom,
                mirrorSlices: this.mirrorSlices,
                mirrorImageX: this.mirrorImageX,
                mirrorImageY: this.mirrorImageY,
                pinch: this.pinch,
                hasMouseInteraction: this.hasMouseInteraction,
                hasMotionInteraction: this.hasMotionInteraction,
                image_width: this.image_width,
                image_height: this.image_height
            }
        }, i.toString = function() {
            return "KaleidoscopeWebGL"
        }, i.update = function() {
            return (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame)(i.render.bind(this))
        }, i.render = function() {
            var e = this;
            if (!this.currentImage) return void(this.renderRequestID = this.update());
            if (this.currentProgram) {
                var t = this.currentProgram,
                    i = this.gl_ctx,
                    n = this.parameters,
                    r = this.canvas,
                    o = document.getElementById("backdrop"),
                    a = o.offsetWidth,
                    s = o.offsetHeight,
                    u = window.devicePixelRatio; - 1 == e.canvasMousePrev.x ? (e.canvasMousePrev.x = e.canvasMousePos.x, e.canvasMousePrev.y = e.canvasMousePos.y) : (e.canvasMousePrev.x = .2 * e.canvasMousePos.x + .8 * e.canvasMousePrev.x, e.canvasMousePrev.y = .2 * e.canvasMousePos.y + .8 * e.canvasMousePrev.y), (n.screenWidth != a || n.screenHeight != s || n.resolution != u) && (n.screenWidth = a, n.screenHeight = s, n.resolution = u, n.screenWidth = r.width = a, n.screenHeight = r.height = s, n.aspectX = a / s, n.aspectY = 1, i.viewport(0, 0, a, s)), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.useProgram(t), n.time = (new Date).getTime() - n.start_time, i.uniform1f(i.getUniformLocation(t, "time"), n.time / 1e3), i.uniform1f(i.getUniformLocation(t, "sliceAngle"), 2 * Math.PI / this.slices), i.uniform1f(i.getUniformLocation(t, "baseRotation1"), this.baseRotation1 + this.rotation1), i.uniform1f(i.getUniformLocation(t, "rotationSpeed1"), 50 * this.rotationSpeed1), i.uniform1f(i.getUniformLocation(t, "baseRotation2"), this.baseRotation2 + this.rotation2), i.uniform1f(i.getUniformLocation(t, "rotationSpeed2"), 50 * this.rotationSpeed2), i.uniform2f(i.getUniformLocation(t, "zoom"), 1.5 / this.zoom * this.textureRatio, 1.5 / this.zoom), i.uniform1f(i.getUniformLocation(t, "mirrorSlices"), this.mirrorSlices ? 1 : 0), i.uniform2f(i.getUniformLocation(t, "center"), this.rotationCenterX, this.rotationCenterY), i.uniform2f(i.getUniformLocation(t, "mouseOffset"), .005 * this.canvasMousePrev.x, .005 * this.canvasMousePrev.y), i.uniform2f(i.getUniformLocation(t, "resolution"), n.screenWidth, n.screenHeight), i.uniform2f(i.getUniformLocation(t, "aspect"), n.aspectX, n.aspectY), i.uniform1f(i.getUniformLocation(t, "pinch"), this.pinch), i.bindTexture(i.TEXTURE_2D, this.kTexture), i.uniform1i(i.getUniformLocation(t, "uSampler"), 0), i.bindBuffer(i.ARRAY_BUFFER, this.buffer), i.vertexAttribPointer(this.vertex_position, 2, i.FLOAT, !1, 0, 0), i.enableVertexAttribArray(this.vertex_position), i.drawArrays(i.TRIANGLES, 0, 6), i.disableVertexAttribArray(this.vertex_position), this.renderRequestID = this.update()
            }
        }, i.destroy = function() {
            this.image_load_queue = [], this.gl_ctx = null, this.currentProgram = null, this.parameters = null, this.canvas = null, this.parameters = null, this.vertex_shader = null, this.fragment_shader = null
        }, e.KaleidoscopeWebGL = t
    }(), e
}), define("css", [], function() {
    if ("undefined" == typeof window) return {
        load: function(e, t, i) {
            i()
        }
    };
    var e = document.getElementsByTagName("head")[0],
        t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0,
        i = !1,
        n = !0;
    t[1] || t[7] ? i = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] || t[8] ? n = !1 : t[4] && (i = parseInt(t[4]) < 18);
    var r, o, a, s = {},
        u = function() {
            r = document.createElement("style"), e.appendChild(r), o = r.styleSheet || r.sheet
        },
        c = 0,
        h = [],
        l = function(e) {
            c++, 32 == c && (u(), c = 0), o.addImport(e), r.onload = function() {
                m()
            }
        },
        m = function() {
            a();
            var e = h.shift();
            return e ? (a = e[1], void l(e[0])) : void(a = null)
        },
        d = function(e, t) {
            if (o && o.addImport || u(), o && o.addImport) a ? h.push([e, t]) : (l(e), a = t);
            else {
                r.textContent = '@import "' + e + '";';
                var i = setInterval(function() {
                    try {
                        r.sheet.cssRules, clearInterval(i), t()
                    } catch (e) {}
                }, 10)
            }
        },
        f = function(t, i) {
            var r = document.createElement("link");
            if (r.type = "text/css", r.rel = "stylesheet", n) r.onload = function() {
                r.onload = function() {}, setTimeout(i, 7)
            };
            else var o = setInterval(function() {
                for (var e = 0; e < document.styleSheets.length; e++) {
                    var t = document.styleSheets[e];
                    if (t.href == r.href) return clearInterval(o), i()
                }
            }, 10);
            r.href = t, e.appendChild(r)
        };
    return s.normalize = function(e, t) {
        return ".css" == e.substr(e.length - 4, 4) && (e = e.substr(0, e.length - 4)), t(e)
    }, s.load = function(e, t, n) {
        (i ? d : f)(t.toUrl(e + ".css"), n)
    }, s
}), define("kaleidoscope/main", ["text!kaleidoscope/template.html", "kaleidoscope/_libs/kaleidoscope", "css!/_jsapps/backdrop/kaleidoscope/style.css"], function(e, t) {
    var i = Backbone.View.extend({
        deferredLoadEventName: "kaleidoscope-load-complete",
        defaults: {
            slices: 18,
            zoom: 217,
            baseRotation1: 61,
            rotationSpeed1: -8,
            baseRotation2: -148,
            rotationSpeed2: -8,
            rotationCenterX: 21,
            rotationCenterY: 66,
            mirrorSlices: !0,
            pinch: !1,
            hasMouseInteraction: !0,
            image: "//payload.persona.co/assets/backdrop/venus_1000.jpg",
            mirrorImageX: !0,
            mirrorImageY: !0,
            hasMotionInteraction: !0
        },
        data: {
            dimensions: {
                left: 0,
                top: 0,
                width: 800,
                height: 600
            }
        },
        obj: {},
        initialize: function() {
            _.defaults(this.model.attributes, this.defaults), this.listenTo(this.model, "reset", this.Init), this.listenTo(this.model, "change", this.Update), this.remove = _.wrap(this.remove, function(e) {
                var t = Array.prototype.splice.call(arguments, 0, 1);
                this.obj.stop(), this.obj = null, $("#kaleidoscopeCanvas").remove(), e.apply(this, t), this.trigger("removed", this.model)
            })
        },
        Pause: function() {
            this.obj.stop()
        },
        Resume: function() {
            this.obj.start()
        },
        updateWindow: function() {},
        render: function() {
            return this.$el.html(e), this
        },
        Init: function() {
            Cargo.Event.trigger("show_loading_anim"), this.model.set("image", Persona.Collection.Images.GetImageUrlOrDefaultFromName(this.model.get("image"), this.defaults.image)), this.obj = new t.KaleidoscopeWebGL("kaleidoscopeCanvas", this.model.toJSON(), this.deferredLoadEventName)
        },
        Update: function() {},
        destroy: function() {}
    });
    return i
}), Persona.Data.require_loaded = !0;