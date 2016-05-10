/*
* KaleidoscopeWebGL
*
* Copyright (c) 2014 Mario Klingemann
* 
*/

// namespace:
window["qlib"] = window.qlib || {};

(function() {

	var KaleidoscopeWebGL = function( canvasID, imageSrc, settings ) {
		
    console.log("hello kalei!");

    imageSrc = "/images/venus_1000.jpg"

		this.init(canvasID, imageSrc, settings );
	}

	
	KaleidoscopeWebGL.getDefaultSettingsObject = function()
	{
		return {
      slices: 24,
      baseRotation1: 0,
      baseRotation2: 45,
      rotationSpeed1: 0,
      rotationSpeed2: -0,
      rotationCenterX: 0.5,
      rotationCenterY: 0.5,
			zoom: 100,
			mirrorSlices: true,
			mirrorImageX: true,
			mirrorImageY: true,
			hasMouseInteraction: true,
			hasMotionInteraction: true
		}
	}
	
	var p = KaleidoscopeWebGL.prototype;

	
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
	
	p.loadImage = function( src )
	{
		if ( !this.currentImage )
		{
			this.currentImage = new Image();
			var scope = this;
			this.currentImage.onload = function(){ scope.updateTexture() };
			this.currentImage.crossOrigin = '';
		}
		
		if( Object.prototype.toString.call( src ) === '[object Array]' ) 
		{
			this.currentImage.src = src[(Math.random() * src.length)|0];
		} else {
			this.currentImage.src = src;
		}
	}	
	
	
	p.updateTexture = function() {
	  var gl = this.gl_ctx;
	  this.kTexture = gl.createTexture();
	  gl.bindTexture(gl.TEXTURE_2D, this.kTexture);
	  this.textureRatio = 1;
	  if (!this.isPowerOfTwo(this.currentImage.width) || !this.isPowerOfTwo(this.currentImage.height)) 
	  {
        console.log("// Scale up the texture to the next highest power of two dimensions.");
        // Scale up the texture to the next highest power of two dimensions.
        var canvas = document.createElement("canvas");
        canvas.width = this.nextHighestPowerOfTwo(this.currentImage.width);
        canvas.height = this.nextHighestPowerOfTwo(this.currentImage.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.currentImage, 0, 0, this.currentImage.width, this.currentImage.height,0,0,canvas.width,canvas.height);
		this.textureRatio =  this.currentImage.height / this.currentImage.width;
        this.currentImage = canvas;
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
    console.log("setImage");
		this.currentImage = image; 
		var scope = this;
		this.currentImage.onload = function(){ scope.updateTexture() };
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
	
	p.init = function( canvasID, imageSrc, settings )
	{
		
		this.parameters = { start_time: new Date().getTime(), time: 0, screenWidth: 0, screenHeight: 0 };
	
		this.vertex_shader = document.getElementById( 'vs' ).textContent;
		this.fragment_shader = document.getElementById( 'fs' ).textContent;

		
		this.canvas = document.getElementById(canvasID); 
	    this.canvas.width = this.parentWidth = this.canvas.parentNode.offsetWidth;
		this.canvas.height = this.parentHeight = this.canvas.parentNode.offsetHeight;
		
		
		// Initialise WebGL

		try {
      
      console.log("experimental-webgl");
			var gl = this.gl_ctx = this.canvas.getContext( 'experimental-webgl' );

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
		console.log('vertex_shader: ' +this.vertex_shader);
		
		// this value is to fix a render glitch in FF and should not be changed
		this.fringePadding = 0.6;
		
		this.canvasMousePos = {x:0,y:0};
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
		this.canvas.addEventListener('mousemove', function(evt) {
			if (scope.hasMouseInteraction ) 
			{
				var rect = scope.canvas.getBoundingClientRect();
				scope.canvasMousePos.x = evt.clientX - rect.left;
				scope.canvasMousePos.y = evt.clientY - rect.top;
			}
		}, false);
		
		this.canvas.addEventListener('touchmove', function(evt) {
			if (scope.hasMouseInteraction ) 
			{
				var rect = scope.canvas.getBoundingClientRect();
				scope.canvasMousePos.x = evt.targetTouches[0].pageX - rect.left;
				scope.canvasMousePos.y = evt.targetTouches[0].pageY - rect.top;
			}
		}, false);
		
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
		
		if ( !settings ) settings = this.getDefaultSettingsObject;

		this.updateSettings( settings );
		
		if ( imageSrc ) this.loadImage( imageSrc );
	}
	
	p.createProgram =  function( vertex, fragment ) {
      
    console.log("createProgram");
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
			hasMouseInteraction: this.hasMouseInteraction,
			hasMotionInteraction: this.hasMotionInteraction
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
		
		if ( parameters.screenWidth != canvas.parentNode.offsetWidth || parameters.screenHeight != canvas.parentNode.offsetHeight )
		{
			parameters.screenWidth = canvas.width = canvas.parentNode.offsetWidth;
			parameters.screenHeight = canvas.height = canvas.parentNode.offsetHeight;
			
			parameters.aspectX = canvas.width/canvas.height ;
			parameters.aspectY = 1.0 ;

			gl.viewport( 0, 0, canvas.width, canvas.height );
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
		gl.uniform2f( gl.getUniformLocation( currentProgram, 'mouseOffset' ),this.canvasMousePos.x * 0.005, this.canvasMousePos.y* 0.005);
		
		gl.uniform2f( gl.getUniformLocation( currentProgram, 'resolution' ), parameters.screenWidth, parameters.screenHeight );
		gl.uniform2f( gl.getUniformLocation( currentProgram, 'aspect' ), parameters.aspectX, parameters.aspectY );

		gl.bindTexture(gl.TEXTURE_2D, this.kTexture);
		gl.uniform1i(gl.getUniformLocation(currentProgram, "uSampler"), 0);
		
		
		gl.bindBuffer( gl.ARRAY_BUFFER, this.buffer );
		gl.vertexAttribPointer( this.vertex_position, 2, gl.FLOAT, false, 0, 0 );
		gl.enableVertexAttribArray( this.vertex_position );
		gl.drawArrays( gl.TRIANGLES, 0, 6 );
		gl.disableVertexAttribArray( this.vertex_position );
		

		this.renderRequestID = this.update();
		
	}
	
	qlib["KaleidoscopeWebGL"] = KaleidoscopeWebGL;
}());