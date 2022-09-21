// Teosantos 2016-5-13


function frameThrottle(original) {
    let pending = false;
    function wrap() {
        pending = false;
        original();
    }

    function proxy() {

        if (!pending) {
            pending = true;
            requestAnimationFrame(wrap);
        }
    }

    return proxy();
}

var teosantos = {

  Init: function(){

    // -----------------------------------------------------------------------------------------------------------
    // Menu navigation interaction
    // -----------------------------------------------------------------------------------------------------------


    // Toggle function to change the display of an element.
    function toggle(theClass, displayState){
        var elements = document.getElementsByClassName(theClass)

        for (var i = 0; i < elements.length; i++){
            elements[i].style.display = displayState;
        }
    }


    // Go through all the .nav-items, when clicked change the section the coorisponding section. 
    [].forEach.call(document.querySelectorAll('.nav-item'), function(el) {
      
      // Get the section from the data attribute
      var section = el.getAttribute('data-section')


      // When a nav-item is clicked. 
      el.addEventListener('click', function(e) {
          
          e.stopPropagation();
          e.preventDefault();

          console.log("navclicked");
          // Go ahead remove the selected state from all nav-items
          removeSelected();

          // Bit of code to remove wildcard class from body
          // http://stackoverflow.com/a/10835425
          var prefix = "section";
          var classes = document.getElementsByTagName('body')[0].className.split(" ").filter(function(c) {
              return c.lastIndexOf(prefix, 0) !== 0;
          });
          document.getElementsByTagName('body')[0].className = classes.join(" ").trim();
        
          
          // Set the val from the clicked nav-items's data-section 
          document.getElementsByTagName('body')[0].classList.add(section);
          
             
          var navItems = document.querySelectorAll('.nav-item');

          // Now go through all the nav=items again and set the selected state. 
          for (var i = 0, len = navItems.length; i < len; i++) {
              if (navItems[i].getAttribute('data-section') == section) {
                
                  navItems[i].classList.add("selected");
        
              }
          }   
                
      }, false)
    })


    // Small lil function to remove selected from all nav-items, clean sweep. 
    function removeSelected(){
      var navItems = document.querySelectorAll('.nav-item');

      for (var i = 0, len = navItems.length; i < len; i++) {
          navItems[i].classList.remove('selected');
      }    
    }
  
  } //Init

}

teosantos.Init();


// var observer = new IntersectionObserver(function(entries) {
//   console.log("hellow")
//   // no intersection with screen
//   if(entries[0].intersectionRatio === 0)
//     document.querySelector("#prime-nav").classList.add("nav-container-sticky");
//   // fully intersects with screen
//   else if(entries[0].intersectionRatio === 1)
//     document.querySelector("#prime-nav").classList.remove("nav-container-sticky");
// }, { threshold: [0,1] });

// observer.observe(document.querySelector("#nav-container-top"));


var observer = new IntersectionObserver(function(entries) {
  // no intersection with screen
  console.log(entries)
  if(entries[0].intersectionRatio === 0)
    document.querySelector("#home").classList.add("page-scrolled");
  // fully intersects with screen
  else if(entries[0].intersectionRatio === 1)
    document.querySelector("#home").classList.remove("page-scrolled");
}, { threshold: [0,1] });

observer.observe(document.querySelector("#nav-container-top"));




// -----------------------------------------------------------------------------------------------------------
// Background Logo Animation 
// -----------------------------------------------------------------------------------------------------------

THREE.ImageUtils.crossOrigin = '';

var enviromap = {

  // defaults
  settings : {
    alpha: "1",
    flip: false,
    geometry: "/js/geometry.json",
    mouse_interaction: true,
    mouse_speed: 100,
    overlay_type: "screen_color",
    reflection_type: "refraction",
    refract_interaction: true,
    refract_motion: "speed",
    refraction_ratio: 50,
    rgb: "rgb(255,255,255)",
    rot_speed_x: 20,
    rot_speed_y: -20,
    rot_speed_z: 1.5,
    rot_x: 0,
    rot_y: 0,
    rot_z: 0,
    zoom: 100
  },

  //general data
  data: {

    counter: 0,
    is_ie: false,

    dimensions: {
      left: 0,
      top: 0,
      width: 500,
      height: 500,
      aspect: 1,
      inverse_aspect: 1
    },

    image_dimensions: {
      width: 512,
      height: 512,
      aspect: 1,
      inverse_aspect: 1
    },
    mouse: {
      prev: {
        x: 0,
        y: 0,
        vector_length: 0
      },

      current: {
        x: 0,
        y: 0,
        vector_length: 0
      },

      smoothed_vector_array: [0,0,0,0,0],

      inited: false
    },
    drawloop_inited: false,
    inited: false,
    init_start: false,
    image_loaded: false,
    object_loaded: false,

  },

  // data for final render scene
  three_data: {

    renderer: new THREE.WebGLRenderer(),
    scene: new THREE.Scene(),
    parent_object: new THREE.Group(),

    camera: new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, .01, 1000 ),
    manager: new THREE.LoadingManager(),

    imageCube: null,


    // set in setupScene and update
    max_refraction_ratio: 0.5,

    // setup in Init, used to load obj/images
    obj_loader: null,

    // given material & obj in loadObj
    render_object: null,

  },

  makeMaterial: function(){

    if (this.data.inited == false){
      return
    }

    if ( this.settings.reflection_type == "reflection"){

            this.three_data.imageCube.mapping = THREE.CubeReflectionMapping;


    } else {

            this.three_data.imageCube.mapping = THREE.CubeRefractionMapping;
            this.three_data.imageCube.repeat.y = 1;

    }

    this.three_data.imageCube.needsUpdate = true;

    // cube map

    this.three_data.render_object.material.envMap = this.three_data.imageCube;

    this.three_data.render_object.material.needsUpdate = true;


  },

  setUpScene: function(){

    var _this = this;
    // update window to get proper config
    this.updateWindow();
    this.data.init_start = true;
    // set max refraction ratio
    this.three_data.max_refraction_ratio = 1-(this.settings.refraction_ratio/100);

    // add the THREE renderer view to the window and update window afterward

    this.three_data.renderer.setClearColor( 0xffffff );


    this.three_data.renderer.domElement.id = "three_canvas";

    this.three_data.renderer.domElement.style.visibility = "hidden";
    if ( window.screen.width > 600){
      this.three_data.renderer.setPixelRatio( window.devicePixelRatio );
    }

    this.updateWindow();
    this.three_data.renderer.sortObjects = false;
    document.getElementById('three_canvas_holder').appendChild( this.three_data.renderer.domElement );


    // Now set up final render scene
    this.three_data.camera.position.z = 0;


    this.data.inited = true;
    this.makeMaterial();

    // add stuff to scene
    this.three_data.parent_object.position.z = 0;
    this.three_data.parent_object.add( this.three_data.render_object);
    this.three_data.scene.add(this.three_data.parent_object );


    // this render object should be using quad as rendermap

    this.updateWindow();
    this.draw();



    frameThrottle(function(){
      _this.three_data.renderer.domElement.style.visibility = "visible";
      document.getElementById("three_canvas_holder").style.backgroundImage = "none";
      _this.data.drawloop_inited = true;
    });



    // Jiggle the handle for Safari
    window.dispatchEvent(new Event('resize'));


  },

  destroy: function(){

    window.cancelAnimationFrame(this.drawFrameID);

    this.data.inited= false;
    this.data.init_start= false;
    this.data.image_loaded= false;
    this.data.object_loaded= false;

    window.removeEventListener('mousemove', this.mouseCallback, false);
    window.removeEventListener('touchmove', this.mouseCallback, false);

    this.three_data.scene = null;
    this.cube_data.scene = null;
    this.data = null;
    this.three_data = null;
    this.cube_data = null;

  },

  getOverlayType: function(){
    var overlayType = this.settings.overlay_type;
    var composite = THREE.MixOperation;

    if (overlayType == "normal_color"){

      composite = THREE.MixOperation;

    } else if ( overlayType == "multiply_color"){

      composite = THREE.MultiplyOperation;

    } else if ( overlayType == "screen_color"){

      composite = THREE.AddOperation;
    }

    return composite;
  },


  loadObj: function(){
    var _this = this;

    var path = "";
    var geomURL = this.settings.geometry;
    var geomText = this.settings.geometry_json;

    this.three_data.obj_loader.load( geomURL , onObjLoad)

    function onObjLoad(object) {

      object.traverse( function ( child ) {

        if ( child.geometry!== undefined ) {


          // if there's a previously-created render object, we dispose of it
          if ( _this.three_data.render_object ){

            _this.three_data.parent_object.remove(_this.three_data.render_object);

          }

          _this.three_data.render_object = new THREE.Mesh(
            child.geometry,
            new THREE.MeshPhongMaterial({
              color: new THREE.Color( 0x000000 ),
              emissive: new THREE.Color( 0xffffff ),

              side: THREE.FrontSide,
              refractionRatio: _this.three_data.max_refraction_ratio,
              envMap: _this.three_data.imageCube
            })
          );

          _this.three_data.render_object.scale.x = 10;
          _this.three_data.render_object.scale.y = 10;
          _this.three_data.render_object.scale.z = 10;

          _this.three_data.parent_object.add(_this.three_data.render_object);

          _this.data.object_loaded = true;

          if ( _this.data.image_loaded ){
            _this.setUpScene();
          }

        }

      } );

    };
  },


  updateWindow: function(){

    var plugWidth, plugHeight, plugLeft, plugTop;


    var plugin = document.getElementById('holder_measurement');

    if ( plugin !== null) {

      plugWidth = plugin.offsetWidth;
      plugHeight = plugin.offsetHeight;
      plugLeft = plugin.offsetLeft;
      plugTop = plugin.offsetTop;

    } else {
      return;
    }

    plugHeight = plugHeight;


    this.data.dimensions = {
      left: 0,
      top: 0,
      width: plugWidth,
      height: plugHeight,
      aspect: plugWidth/plugHeight,
      inverse_aspect: plugHeight/plugWidth
    }



    // set renderer size
    this.three_data.renderer.setSize( plugWidth, plugHeight );

    this.three_data.camera.aspect = this.data.dimensions.aspect;

    this.three_data.camera.fov = 90;

      this.three_data.camera.updateProjectionMatrix();


  },

  draw: function(){

    function debounce(func, timeout = 1){
      
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    var _this = this;
    var draw_counter = 0;

    var mouseSpeed = this.settings.mouse_speed*.1;

      this.drawFrameID = frameThrottle(function(){

        _this.data.counter++;

        if ( _this.data.counter > -1 ){
          draw_counter = _this.data.counter;
        }

      _this.updateMouseMovement();

      // Shift camera very slightly to match mouse movement
      // shift a little even if mouse movement is at minimum
      _this.three_data.camera.position.x =  _this.data.mouse.prev.x *(mouseSpeed)*.2;
      _this.three_data.camera.position.y =  -_this.data.mouse.prev.y * ( mouseSpeed) *.2;
//      _this.three_data.camera.position.z = 20;

      // rotate parent to match mouse movement
      _this.three_data.parent_object.rotation.x = _this.data.mouse.prev.y*-.08*mouseSpeed;
      _this.three_data.parent_object.rotation.y = _this.data.mouse.prev.x*-.08*mouseSpeed;


      // Add rotation to object afterward
      _this.three_data.render_object.rotation.x = _this.settings.rot_speed_x*0.000289*draw_counter + _this.settings.rot_x * 0.01745;
      _this.three_data.render_object.rotation.y = _this.settings.rot_speed_y*0.000289*draw_counter + _this.settings.rot_y * 0.01745;
      _this.three_data.render_object.rotation.z = _this.settings.rot_speed_z*0.000289*draw_counter + _this.settings.rot_z * 0.01745;



      if ( _this.settings.reflection_type == "refraction" ){
        if ( _this.settings.refract_interaction ){
          _this.three_data.render_object.material.refractionRatio = 1- ((1-_this.three_data.max_refraction_ratio) * _this.data.mouse.smoothed_vector);
        } else {
          _this.three_data.render_object.material.refractionRatio = 1- (1-_this.three_data.max_refraction_ratio) ;
        }

      }


      _this.draw();
    });


    this.three_data.renderer.render( this.three_data.scene, this.three_data.camera );


  },

  updateMouseInput: function(e){


    var refract_motion = this.settings.refract_motion;
    var reflection_type = this.settings.reflection_type;

    var mouseOriginX = 0;
    var mouseOriginY = 0;

    if ( refract_motion == "speed"  && reflection_type =="refraction" ){
      mouseOriginX = this.data.mouse.prev.x;
      mouseOriginY = this.data.mouse.prev.y;
    }

    var mouseX;
    var mouseY;

    if (this.data.is_mobile == true){
      mouseX = e.layerX;
      mouseY = e.layerY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    mouseX = (mouseX/this.data.dimensions.width)*2 + -1;
    mouseY = (mouseY/this.data.dimensions.height)*2 + -1;
    vector_length = Math.sqrt( Math.pow(mouseX-mouseOriginX, 2) + Math.pow(mouseY-mouseOriginY, 2) );



    this.data.mouse.current.x = mouseX;
    this.data.mouse.current.y = mouseY;

    if ( refract_motion == "gather" ){

      this.data.mouse.current.vector_length = Math.max(Math.min(Math.sqrt( vector_length )*2 -1 , 1),0)

    } else if ( refract_motion == "disperse" ) {

      this.data.mouse.current.vector_length = 1- Math.max(Math.min(Math.sqrt( vector_length )*2 -1 , 1),0)

    } else if (refract_motion == "speed"){

      if ( vector_length*1.2 > this.data.mouse.prev.vector_length){
        this.data.mouse.prev.vector_length = Math.min(vector_length*1.2, 1);
      }

    }

  },

  updateMouseMovement: function(){

    // if no interaction, we reset & return
    if ( this.settings.mouse_interaction == false || this.data.drawloop_inited == false) {

      this.data.mouse = {
        prev: {
          x: 0,
          y: 0,
          vector_length: 0
        },

        current: {
          x: 0,
          y: 0,
          vector_length: 0
        },

        smoothed_vector: 0,
        smoothed_vector_array: [0,0,0,0,0],

        inited: false
      }

      return
    }

    var smoothVector = 0;


    // if mouse movement hasn't been inited yet
    if ( this.data.mouse.inited == false) {
      this.data.mouse.prev = this.data.mouse.current;
      this.data.mouse.inited = true;
    } else {

      var prevMouse = {
        x: this.data.mouse.prev.x * .9 + this.data.mouse.current.x * .1,
        y: this.data.mouse.prev.y * .9 + this.data.mouse.current.y * .1,
      }

      if ( this.settings.refract_motion == "speed" ){

        this.data.mouse.smoothed_vector_array.unshift(this.data.mouse.prev.vector_length);

        for (var i = 0; i < this.data.mouse.smoothed_vector_array.length ; i++ ) {

          smoothVector+=this.data.mouse.smoothed_vector_array[i];

        }

        // smooth five frames
        if (this.data.mouse.smoothed_vector_array.length > 5){
          this.data.mouse.smoothed_vector_array = this.data.mouse.smoothed_vector_array.splice(0, 5);
        }

        this.data.mouse.smoothed_vector = (smoothVector/5);

        // ramp down continuously
        prevMouse.vector_length = this.data.mouse.prev.vector_length * .95;


      } else {

        prevMouse.vector_length = this.data.mouse.current.vector_length * 0.05 + this.data.mouse.prev.vector_length * 0.95;
        this.data.mouse.smoothed_vector = prevMouse.vector_length;
      }

      this.data.mouse.prev = prevMouse;


    }

  },

  // update & callbacks

  UpdateAll: function(){

    this.updateWindow();

  },


  makeCallBack: function(){

    this.updateCallback = this.UpdateAll.bind(this);
    this.mouseCallback = this.updateMouseInput.bind(this);

  },

  checkForIE: function(){
      var ua = window.navigator.userAgent;

      // apparently chrome doesn't work either
        var chrome = ua.indexOf('Chrome');
        if (chrome > 0) {
          return true;
      }


      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
          // IE 10 or older => return version number
          return true
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return true
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
         // IE 12 => return version number
         return true
      }
  },

  Init: function(){
    var _this = this;

    this.makeCallBack();

    this.data.inited = false;
    this.data.init_start = false;
    this.data.image_loaded = false;
    this.data.object_loaded = false;


      var loader = new THREE.CubeTextureLoader();
      loader.setCrossOrigin( 'anonymous' );

      var image_assets = [];

    var maxCubemapSize = this.three_data.renderer.context.getParameter( this.three_data.renderer.context.MAX_CUBE_MAP_TEXTURE_SIZE );

    if ( maxCubemapSize <= 512 ){
      image_assets = [
        "/images/white_512.jpg",
        "/images/white_512.jpg",
        "/images/white_512.jpg",
        "/images/white_512.jpg",
        "/images/white_512.jpg",
        "/images/saint_512.png"
      ]
    } else if ( maxCubemapSize <= 1024 ) {
      image_assets = [
        "/images/1024_white.png",
        "/images/1024_white.png",
        "/images/1024_white.png",
        "/images/1024_white.png",
        "/images/1024_white.png",
        "/images/saint.png"
      ]
    } else if ( maxCubemapSize > 1024) {
      image_assets = [
        "/images/white_2048.png",
        "/images/white_2048.png",
        "/images/white_2048.png",
        "/images/white_2048.png",
        "/images/white_2048.png",
        "/images/saint_2048.png"
      ]
    }


      var textureCube = loader.load(image_assets, function(){

      _this.data.image_loaded = true;

        textureCube.format = THREE.RGBFormat;
      _this.three_data.imageCube = textureCube;

      if ( _this.data.object_loaded ){
        _this.setUpScene();
      }

    });


    window.addEventListener("resize", this.updateCallback);

    if ( /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){
      this.data.is_mobile = true;
      window.addEventListener("touchmove", this.mouseCallback);
    } else {
      window.addEventListener("mousemove", this.mouseCallback);
    }

    // start the loading process below

    this.three_data.obj_loader =  new THREE.OBJLoader( this.three_data.manager );

    this.loadObj();

  }

}

enviromap.Init();
