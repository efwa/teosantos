
/*
* KaleidoscopeWebGL
*
* Copyright (c) 2014 Mario Klingemann
*
*/

// namespace:
var qlib = {};

(function() {

  var KaleidoscopeWebGL = function( canvasID, settings, deferredLoadEventName ) {

    console.log("kickoff");

    this.deferredLoadEventName = deferredLoadEventName;
    this.init(canvasID, settings );

  }


  var p = KaleidoscopeWebGL.prototype;


  p.getDefaultSettingsObject = function()
  {

    console.log("settings");

    return {
      slices: 24,
      baseRotation1: 0,
      baseRotation2: 45,
      rotationSpeed1: 0,
      rotationSpeed2: -0,
      rotationCenterX: 1,
      rotationCenterY: 1,
      zoom: 100,
      mirrorSlices: true,
      mirrorImageX: true,
      mirrorImageY: true,
      pinch: false,
      hasMouseInteraction: true,
      hasMotionInteraction: true,
      image: '/images/mirror.jpg'
    }
  }



  // public properties:

  // all angle values are in radians
  p.baseRotation1 = 0;
  p.baseRotation2 = 0;

  // speed is radians per frame
  p.rotationSpeed1 = 0.001;
  p.rotationSpeed2 = -0.001;

  // rotation center is a factor based on the slice size
  // typical values are in the range 0...1, where
  // 0.5/0.5 marks the center of the tile
  // 0.5/1 is at the tip of the tile
  // the rotaton center can also be located outside the tile
  // in that case just use values outside the 0...1 range

  p.rotationCenterX = 0.5;
  p.rotationCenterY = 0.5;



  // public methods:

  p.updateSettings = function( settingsObject )
  {
    for(name in settingsObject){

      value = final_value = settingsObject[name];

      if(name === "zoom"){
        final_value = value / 100;
      } else if(name === "baseRotation1"){
        final_value = value / 180 * Math.PI;
      } else if(name === "rotationSpeed1"){
        final_value = value / 10000;
      } else if(name === "baseRotation2"){
        final_value = value / 180 * Math.PI;
      } else if(name === "rotationSpeed2"){
        final_value = value / 10000;
      } else if(name === "rotationCenterX"){
        final_value = value / 100;
      } else if(name === "rotationCenterY"){
        final_value = value / 100;
      } else {
        final_value = value;
      }

      this[name] = final_value;

    }

    this.rotation1 = 0;
    this.rotation2 = 0;


  }

  p.image_url = "";

  p.image_load_queue = [];

  p.has_dimensions = false;

  p.loadImage = function(src)
  {
    var scope = this;



    if ( (src == undefined || src=="" || src==scope.image_url) && this.currentImage !=undefined){
      return;
    }

    p.image_url = src;
    //Cargo.Event.trigger("show_loading_anim");


    this.currentImage = new Image();
    this.currentImage.crossOrigin = '';

    cleanImage = src;
    this.image_load_queue.push({url:cleanImage, width: 3264, height: 2448});


    this.currentImage.onload = function(){

      //Cargo.Event.trigger("hide_loading_anim");

      var last_image = scope.image_load_queue.pop();

      if(last_image.url.split("?")[0] != cleanImage.split("?")[0]) {

        return;
      } else if (scope.currentImage.width == 0){
        return
      } else {


        if ( last_image.width && last_image.height ){
          scope.has_dimensions = true;
        } else {
          scope.has_dimensions = false;
        }
        scope.updateTexture();
      }


      //Cargo.Event.trigger(scope.deferredLoadEventName);

    };

    scope.currentImage.src = cleanImage;


  }


  p.updateTexture = function() {
    var gl = this.gl_ctx;
    this.kTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.kTexture);
    this.textureRatio = 1;

    if (!this.isPowerOfTwo(this.currentImage.width) || !this.isPowerOfTwo(this.currentImage.height))
    {
        // Scale up the texture to the next highest power of two dimensions.
        var canvas = document.createElement("canvas");
        canvas.width = this.nextHighestPowerOfTwo(this.currentImage.width);
        canvas.height = this.nextHighestPowerOfTwo(this.currentImage.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.currentImage, 0, 0, this.currentImage.width, this.currentImage.height,0,0,canvas.width,canvas.height);
    this.textureRatio =  this.currentImage.height / this.currentImage.width;
        this.currentImage = canvas;
    }
      if ( this.has_dimensions ){
    this.textureRatio = this.image_height/ this.image_width;
      }

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.currentImage);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.mirrorSlices ? gl.LINEAR_MIPMAP_NEAREST : gl.LINEAR );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.mirrorImageX ? gl.MIRRORED_REPEAT : gl.REPEAT );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.mirrorImageY ? gl.MIRRORED_REPEAT : gl.REPEAT );

    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
    this.stop();
    this.render();

  }

  p.isPowerOfTwo = function(x) {
    return (x & (x - 1)) == 0;
  }

  p.nextHighestPowerOfTwo = function(x) {
    --x;
    for (var i = 1; i < 32; i <<= 1) {
      x = x | x >> i;
    }
    return x + 1;
  }

  p.setImage = function( image )
  {
    this.currentImage = image;
    var scope = this;
    this.currentImage.onload = function(){
       scope.updateTexture()
     };
    if ( this.currentImage.complete ) this.updateTexture();
  }

  p.setSliceCount = function( count )
  {
    this.slices = (count * 2) | 0;
    if ( this.slices < 4 ) this.slices = 4;
  }

  // be careful with very large zooms since the bigger
  // the zoom factor, the bigger the required temporary
  // tile map needs to be, which might affect performance
  p.setZoom = function( factor )
  {
    this.zoom = factor;
    if ( this.zoom <= 0.000001 ) this.zoom = 0.000001;
    if ( this.zoom > 10 ) this.zoom = 10;
  }

  p.setImageMirroring = function( horizontal, vertical )
  {
    this.mirrorImageX = horizontal;
    this.mirrorImageY = vertical;
    var gl = this.gl_ctx;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.mirrorImageX ? gl.MIRRORED_REPEAT : gl.REPEAT );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.mirrorImageY ? gl.MIRRORED_REPEAT : gl.REPEAT );

  }

  p.setMirrorSlices  = function( useMirror )
  {
    this.mirrorSlices = useMirror;
    var gl = this.gl_ctx;
    gl.bindTexture(gl.TEXTURE_2D, this.kTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, useMirror ? gl.LINEAR_MIPMAP_NEAREST : gl.LINEAR );
    gl.bindTexture(gl.TEXTURE_2D, null);
  }

  p.stop = function()
  {
    if ( this.renderRequestID )
    {
      (window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
         window.webkitCancelAnimationFrame || window.oCancelAnimationFrame)( this.renderRequestID );
       this.renderRequestID = null;
    }
  }

  p.isActive = function()
  {
    return this.renderRequestID != null;
  }

  p.start = function()
  {
    if ( this.renderRequestID == null )
    {
      this.render();
    }
  }

  p.init = function( canvasID, settings )
  {

    this.parameters = { start_time: new Date().getTime(), time: 0, screenWidth: 0, screenHeight: 0, resolution: 1 };

    this.vertex_shader = document.getElementById( 'vs' ).textContent;
    this.fragment_shader = document.getElementById( 'fs' ).textContent;

    settings = this.getDefaultSettingsObject()


    this.canvas = document.getElementById(canvasID);
      this.canvas.width = this.parentWidth = this.canvas.parentNode.offsetWidth+2;
    this.canvas.height = this.parentHeight = this.canvas.parentNode.offsetHeight+2;


    // Initialise WebGL

    try {

      var gl = this.gl_ctx = this.canvas.getContext( 'experimental-webgl' );
      console.log("try");
    } catch( error ) { }

    if ( !gl ) {

      alert("WebGL not supported");
      throw "cannot create webgl context";

    }

    // Create Vertex buffer (2 triangles)

    this.buffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.buffer );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( [ - 1.0, - 1.0, 1.0, - 1.0, - 1.0, 1.0, 1.0, - 1.0, 1.0, 1.0, - 1.0, 1.0 ] ), gl.STATIC_DRAW );

    // Create Program

    this.currentProgram = this.createProgram( this.vertex_shader, this.fragment_shader );


    // this value is to fix a render glitch in FF and should not be changed
    this.fringePadding = 0.6;

    this.canvasMousePos = {x:0,y:0};
    this.canvasMousePrev = {x:-1,y:-1};
    this.size = 0;
    this.sliceWidth = 0;


    this.renderRequestID = null;

    this.alphaAvg = [];
    this.alphaSum = 0;
    this.betaAvg = [];
    this.betaSum = 0;
    this.gammaAvg = [];
    this.gammaSum = 0;

    var scope = this;
    window.addEventListener('mousemove', function(evt) {
      if (scope.hasMouseInteraction )
      {

        var rect = scope.canvas.getBoundingClientRect();
        var zoompct = (scope.zoom/5);
        var posX = (evt.clientX);
        var posY = (evt.clientY);
        var zoomlerp = zoompct*.35 + (1-zoompct);

        scope.canvasMousePos.x = (zoomlerp*posX)*zoomlerp ;
        scope.canvasMousePos.y = (zoomlerp*posY)*zoomlerp ;

      }
    }, false);

    window.addEventListener('touchmove', function(evt) {
      if (scope.hasMouseInteraction )
      {
        var rect = scope.canvas.getBoundingClientRect();
        scope.canvasMousePos.x = evt.targetTouches[0].pageX - rect.left;
        scope.canvasMousePos.y = evt.targetTouches[0].pageY - rect.top;
      }
    }, false);

    /*
    window.addEventListener("deviceorientation", function(evt){
      if (scope.hasMotionInteraction )
      {
        scope.alphaSum += event.gamma;
        scope.alphaAvg.push(event.gamma);
        if ( scope.alphaAvg.length > 5 ) scope.alphaSum -= scope.alphaAvg.shift();

        scope.betaSum += event.beta;
        scope.betaAvg.push(event.beta);
        if ( scope.betaAvg.length > 5 ) scope.betaSum -= scope.betaAvg.shift();

        scope.gammaSum += event.alpha;
        scope.gammaAvg.push(event.alpha);
        if ( scope.gammaAvg.length > 16 ) scope.gammaSum -= scope.gammaAvg.shift();

         if ( scope.lastAlpha ) scope.rotation1 -= (scope.lastAlpha - scope.alphaSum /  scope.alphaAvg.length)* 0.02;
         scope.lastAlpha = scope.alphaSum /  scope.alphaAvg.length;
         if ( scope.lastBeta ) scope.rotation2 += (scope.lastBeta - scope.betaSum  /  scope.betaAvg.length)*0.01;
         scope.lastBeta =  scope.betaSum /  scope.betaAvg.length;
          if ( scope.lastGamma ) scope.zoom = 0.9 * scope.zoom + 0.1 * ( scope.zoom * (1.0 - (scope.lastGamma - scope.gammaSum  /  scope.gammaAvg.length)*0.1));
         scope.lastGamma =  scope.gammaSum /  scope.gammaAvg.length;

      }
    }, true);
    */

    this.updateSettings( settings );

    if ( settings.image ) this.loadImage( settings.image );
  }

  p.createProgram =  function( vertex, fragment ) {

    var gl = this.gl_ctx;
    var program = gl.createProgram();

    var vs = this.createShader( vertex, gl.VERTEX_SHADER );
    var fs = this.createShader( '#ifdef GL_ES\nprecision highp float;\n#endif\n\n' + fragment, gl.FRAGMENT_SHADER );

    if ( vs == null || fs == null ) return null;

    gl.attachShader( program, vs );
    gl.attachShader( program, fs );

    gl.deleteShader( vs );
    gl.deleteShader( fs );

    gl.linkProgram( program );

    if ( !gl.getProgramParameter( program, gl.LINK_STATUS ) ) {

      alert( "ERROR:\n" +
      "VALIDATE_STATUS: " + gl.getProgramParameter( program, gl.VALIDATE_STATUS ) + "\n" +
      "ERROR: " + gl.getError() + "\n\n" +
      "- Vertex Shader -\n" + vertex + "\n\n" +
      "- Fragment Shader -\n" + fragment );

      return null;

    }

    return program;

  }

  p.createShader = function( src, type ) {

    var gl = this.gl_ctx;
    var shader = gl.createShader( type );

    gl.shaderSource( shader, src );
    gl.compileShader( shader );

    if ( !gl.getShaderParameter( shader, gl.COMPILE_STATUS ) ) {

      alert( ( type == gl.VERTEX_SHADER ? "VERTEX" : "FRAGMENT" ) + " SHADER:\n" + gl.getShaderInfoLog( shader ) );
      return null;

    }

    return shader;

  }


  p.getCurrentSettings = function()
  {
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

  }


  p.toString = function()
  {
    return "KaleidoscopeWebGL";
  }

  // private methods:

  p.update = function()
  {
    return (window.requestAnimationFrame || window.mozRequestAnimationFrame ||
           window.webkitRequestAnimationFrame || window.oRequestAnimationFrame)(p.render.bind(this));
  }

  p.render = function()
  {
    var scope = this;
    if ( !this.currentImage )
    {
      this.renderRequestID = this.update();
      return;
    }

    if ( !this.currentProgram ) return;

    var currentProgram = this.currentProgram;
    var gl = this.gl_ctx;
    var parameters = this.parameters;
    var canvas = this.canvas;

    // increase size a bit to compensate for overlap
    var plugin = document.getElementById('backdrop');
    var plugW = plugin.offsetWidth;
    var plugH = plugin.offsetHeight;
    var resolution = window.devicePixelRatio;


    // if mouse movement has not yet been inited
    if ( scope.canvasMousePrev.x == -1 ){
      scope.canvasMousePrev.x = scope.canvasMousePos.x;
      scope.canvasMousePrev.y = scope.canvasMousePos.y;
    } else {
      scope.canvasMousePrev.x = scope.canvasMousePos.x * .20 +  scope.canvasMousePrev.x * .80 ;
      scope.canvasMousePrev.y = scope.canvasMousePos.y * .20 +  scope.canvasMousePrev.y * .80 ;
    }

    if ( parameters.screenWidth != plugW || parameters.screenHeight != plugH || parameters.resolution != resolution )
    {
      parameters.screenWidth = plugW;
      parameters.screenHeight = plugH;
      parameters.resolution = resolution;

      parameters.screenWidth = canvas.width = plugW;
      parameters.screenHeight = canvas.height = plugH;

      parameters.aspectX = plugW/plugH ;
      parameters.aspectY = 1.0 ;

      gl.viewport( 0, 0, plugW, plugH );
    }

    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

    gl.useProgram( currentProgram );

    parameters.time = new Date().getTime() - parameters.start_time;
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'time' ), parameters.time / 1000 );
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'sliceAngle' ), (Math.PI*2.0) / this.slices );
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'baseRotation1' ), this.baseRotation1 + this.rotation1);
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'rotationSpeed1' ), this.rotationSpeed1 * 50.0 );
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'baseRotation2' ), this.baseRotation2 + this.rotation2 );
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'rotationSpeed2' ), this.rotationSpeed2 * 50.0 );
    gl.uniform2f( gl.getUniformLocation( currentProgram, 'zoom' ), 1.5 / this.zoom * this.textureRatio, 1.5 / this.zoom );
    gl.uniform1f( gl.getUniformLocation( currentProgram, 'mirrorSlices' ), this.mirrorSlices ? 1.0 : 0.0);

    gl.uniform2f( gl.getUniformLocation( currentProgram, 'center' ), this.rotationCenterX , this.rotationCenterY );
    gl.uniform2f( gl.getUniformLocation( currentProgram, 'mouseOffset' ),this.canvasMousePrev.x * 0.005, this.canvasMousePrev.y* 0.005);

    gl.uniform2f( gl.getUniformLocation( currentProgram, 'resolution' ), parameters.screenWidth, parameters.screenHeight );
    gl.uniform2f( gl.getUniformLocation( currentProgram, 'aspect' ), parameters.aspectX, parameters.aspectY );

    gl.uniform1f( gl.getUniformLocation( currentProgram, 'pinch' ), this.pinch );

    gl.bindTexture(gl.TEXTURE_2D, this.kTexture);
    gl.uniform1i(gl.getUniformLocation(currentProgram, "uSampler"), 0);


    gl.bindBuffer( gl.ARRAY_BUFFER, this.buffer );
    gl.vertexAttribPointer( this.vertex_position, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( this.vertex_position );
    gl.drawArrays( gl.TRIANGLES, 0, 6 );
    gl.disableVertexAttribArray( this.vertex_position );


    this.renderRequestID = this.update();

  }

  // set to correct size from inside main.js

  p.setCanvasSize = function(width, height){
    var gl = this.gl_ctx;
    var parameters = this.parameters;
    var canvas = this.canvas;

    canvas.width = width;
    canvas.height = height;

    parameters.screenWidth = width;
    parameters.screenHeight = height;

    parameters.aspectX = width/height;
    parameters.aspectY = 1.0;

    gl.viewport( 0, 0, width, height );

  }



  p.destroy = function() {
    this.image_load_queue = [];
    this.gl_ctx = null;
    this.currentProgram = null;
    this.parameters = null;
    this.canvas = null;
    this.parameters = null;
    this.vertex_shader = null;
    this.fragment_shader = null;
  }

  qlib["KaleidoscopeWebGL"] = KaleidoscopeWebGL;
}());




