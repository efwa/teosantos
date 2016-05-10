THREE.ImageUtils.crossOrigin="";var enviromap={settings:{alpha:"1",flip:!1,geometry:"/js/geometry.json",mouse_interaction:!0,mouse_speed:100,overlay_type:"screen_color",reflection_type:"refraction",refract_interaction:!0,refract_motion:"speed",refraction_ratio:50,rgb:"rgb(255,255,255)",rot_speed_x:20,rot_speed_y:-20,rot_speed_z:1.5,rot_x:0,rot_y:0,rot_z:0,zoom:100},data:{counter:0,is_ie:!1,dimensions:{left:0,top:0,width:500,height:500,aspect:1,inverse_aspect:1},image_dimensions:{width:512,height:512,aspect:1,inverse_aspect:1},mouse:{prev:{x:0,y:0,vector_length:0},current:{x:0,y:0,vector_length:0},smoothed_vector_array:[0,0,0,0,0],inited:!1},drawloop_inited:!1,inited:!1,init_start:!1,image_loaded:!1,object_loaded:!1},three_data:{renderer:new THREE.WebGLRenderer,scene:new THREE.Scene,parent_object:new THREE.Group,camera:new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,.01,1e3),manager:new THREE.LoadingManager,imageCube:null,max_refraction_ratio:.5,obj_loader:null,render_object:null},makeMaterial:function(){0!=this.data.inited&&("reflection"==this.settings.reflection_type?this.three_data.imageCube.mapping=THREE.CubeReflectionMapping:(this.three_data.imageCube.mapping=THREE.CubeRefractionMapping,this.three_data.imageCube.repeat.y=1),this.three_data.imageCube.needsUpdate=!0,this.three_data.render_object.material.envMap=this.three_data.imageCube,this.three_data.render_object.material.needsUpdate=!0)},setUpScene:function(){var e=this;this.updateWindow(),this.data.init_start=!0,this.three_data.max_refraction_ratio=1-this.settings.refraction_ratio/100,this.three_data.renderer.setClearColor(16777215),this.three_data.renderer.domElement.id="three_canvas",this.three_data.renderer.domElement.style.visibility="hidden",window.screen.width>600&&this.three_data.renderer.setPixelRatio(window.devicePixelRatio),this.updateWindow(),this.three_data.renderer.sortObjects=!1,document.getElementById("three_canvas_holder").appendChild(this.three_data.renderer.domElement),this.three_data.camera.position.z=0,this.data.inited=!0,this.makeMaterial(),this.three_data.parent_object.position.z=0,this.three_data.parent_object.add(this.three_data.render_object),this.three_data.scene.add(this.three_data.parent_object),this.updateWindow(),this.draw(),window.requestAnimationFrame(function(){e.three_data.renderer.domElement.style.visibility="visible",document.getElementById("three_canvas_holder").style.backgroundImage="none",e.data.drawloop_inited=!0}),window.dispatchEvent(new Event("resize"))},destroy:function(){window.cancelAnimationFrame(this.drawFrameID),this.data.inited=!1,this.data.init_start=!1,this.data.image_loaded=!1,this.data.object_loaded=!1,window.removeEventListener("mousemove",this.mouseCallback,!1),window.removeEventListener("touchmove",this.mouseCallback,!1),this.three_data.scene=null,this.cube_data.scene=null,this.data=null,this.three_data=null,this.cube_data=null},getOverlayType:function(){var e=this.settings.overlay_type,t=THREE.MixOperation;return"normal_color"==e?t=THREE.MixOperation:"multiply_color"==e?t=THREE.MultiplyOperation:"screen_color"==e&&(t=THREE.AddOperation),t},loadObj:function(){function e(e){e.traverse(function(e){void 0!==e.geometry&&(t.three_data.render_object&&t.three_data.parent_object.remove(t.three_data.render_object),t.three_data.render_object=new THREE.Mesh(e.geometry,new THREE.MeshPhongMaterial({color:new THREE.Color(0),emissive:new THREE.Color(16777215),side:THREE.FrontSide,refractionRatio:t.three_data.max_refraction_ratio,envMap:t.three_data.imageCube})),t.three_data.render_object.scale.x=10,t.three_data.render_object.scale.y=10,t.three_data.render_object.scale.z=10,t.three_data.parent_object.add(t.three_data.render_object),t.data.object_loaded=!0,t.data.image_loaded&&t.setUpScene())})}var t=this,a=this.settings.geometry;this.settings.geometry_json;this.three_data.obj_loader.load(a,e)},updateWindow:function(){var e,t,a,r,i=document.getElementById("holder_measurement");null!==i&&(e=i.offsetWidth,t=i.offsetHeight,a=i.offsetLeft,r=i.offsetTop,t=t,this.data.dimensions={left:0,top:0,width:e,height:t,aspect:e/t,inverse_aspect:t/e},this.three_data.renderer.setSize(e,t),this.three_data.camera.aspect=this.data.dimensions.aspect,this.three_data.camera.fov=90,this.three_data.camera.updateProjectionMatrix())},draw:function(){var e=this,t=0,a=.1*this.settings.mouse_speed;this.drawFrameID=window.requestAnimationFrame(function(){e.data.counter++,e.data.counter>-1&&(t=e.data.counter),e.updateMouseMovement(),e.three_data.camera.position.x=e.data.mouse.prev.x*a*.2,e.three_data.camera.position.y=-e.data.mouse.prev.y*a*.2,e.three_data.parent_object.rotation.x=e.data.mouse.prev.y*-.08*a,e.three_data.parent_object.rotation.y=e.data.mouse.prev.x*-.08*a,e.three_data.render_object.rotation.x=289e-6*e.settings.rot_speed_x*t+.01745*e.settings.rot_x,e.three_data.render_object.rotation.y=289e-6*e.settings.rot_speed_y*t+.01745*e.settings.rot_y,e.three_data.render_object.rotation.z=289e-6*e.settings.rot_speed_z*t+.01745*e.settings.rot_z,"refraction"==e.settings.reflection_type&&(e.settings.refract_interaction?e.three_data.render_object.material.refractionRatio=1-(1-e.three_data.max_refraction_ratio)*e.data.mouse.smoothed_vector:e.three_data.render_object.material.refractionRatio=1-(1-e.three_data.max_refraction_ratio)),e.draw()}),this.three_data.renderer.render(this.three_data.scene,this.three_data.camera)},updateMouseInput:function(e){var t=this.settings.refract_motion,a=this.settings.reflection_type,r=0,i=0;"speed"==t&&"refraction"==a&&(r=this.data.mouse.prev.x,i=this.data.mouse.prev.y);var o,n;1==this.data.is_mobile?(o=e.layerX,n=e.layerY):(o=e.clientX,n=e.clientY),o=o/this.data.dimensions.width*2+-1,n=n/this.data.dimensions.height*2+-1,vector_length=Math.sqrt(Math.pow(o-r,2)+Math.pow(n-i,2)),this.data.mouse.current.x=o,this.data.mouse.current.y=n,"gather"==t?this.data.mouse.current.vector_length=Math.max(Math.min(2*Math.sqrt(vector_length)-1,1),0):"disperse"==t?this.data.mouse.current.vector_length=1-Math.max(Math.min(2*Math.sqrt(vector_length)-1,1),0):"speed"==t&&1.2*vector_length>this.data.mouse.prev.vector_length&&(this.data.mouse.prev.vector_length=Math.min(1.2*vector_length,1))},updateMouseMovement:function(){if(0==this.settings.mouse_interaction||0==this.data.drawloop_inited)return void(this.data.mouse={prev:{x:0,y:0,vector_length:0},current:{x:0,y:0,vector_length:0},smoothed_vector:0,smoothed_vector_array:[0,0,0,0,0],inited:!1});var e=0;if(0==this.data.mouse.inited)this.data.mouse.prev=this.data.mouse.current,this.data.mouse.inited=!0;else{var t={x:.9*this.data.mouse.prev.x+.1*this.data.mouse.current.x,y:.9*this.data.mouse.prev.y+.1*this.data.mouse.current.y};if("speed"==this.settings.refract_motion){this.data.mouse.smoothed_vector_array.unshift(this.data.mouse.prev.vector_length);for(var a=0;a<this.data.mouse.smoothed_vector_array.length;a++)e+=this.data.mouse.smoothed_vector_array[a];this.data.mouse.smoothed_vector_array.length>5&&(this.data.mouse.smoothed_vector_array=this.data.mouse.smoothed_vector_array.splice(0,5)),this.data.mouse.smoothed_vector=e/5,t.vector_length=.95*this.data.mouse.prev.vector_length}else t.vector_length=.05*this.data.mouse.current.vector_length+.95*this.data.mouse.prev.vector_length,this.data.mouse.smoothed_vector=t.vector_length;this.data.mouse.prev=t}},UpdateAll:function(){this.updateWindow()},makeCallBack:function(){this.updateCallback=this.UpdateAll.bind(this),this.mouseCallback=this.updateMouseInput.bind(this)},checkForIE:function(){var e=window.navigator.userAgent,t=e.indexOf("Chrome");if(t>0)return!0;var a=e.indexOf("MSIE ");if(a>0)return!0;var r=e.indexOf("Trident/");if(r>0){e.indexOf("rv:");return!0}var i=e.indexOf("Edge/");return i>0?!0:void 0},Init:function(){var e=this;this.makeCallBack(),this.data.inited=!1,this.data.init_start=!1,this.data.image_loaded=!1,this.data.object_loaded=!1;var t=new THREE.CubeTextureLoader;t.setCrossOrigin("anonymous");var a=[],r=this.three_data.renderer.context.getParameter(this.three_data.renderer.context.MAX_CUBE_MAP_TEXTURE_SIZE);512>=r?a=["/images/white_512.jpg","/images/white_512.jpg","/images/white_512.jpg","/images/white_512.jpg","/images/white_512.jpg","/images/saint_512.png"]:1024>=r?a=["/images/1024_white.png","/images/1024_white.png","/images/1024_white.png","/images/1024_white.png","/images/1024_white.png","/images/saint.png"]:r>1024&&(a=["/images/white_2048.png","/images/white_2048.png","/images/white_2048.png","/images/white_2048.png","/images/white_2048.png","/images/saint_2048.png"]);var i=t.load(a,function(){e.data.image_loaded=!0,i.format=THREE.RGBFormat,e.three_data.imageCube=i,e.data.object_loaded&&e.setUpScene()});window.addEventListener("resize",this.updateCallback),/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?(this.data.is_mobile=!0,window.addEventListener("touchmove",this.mouseCallback)):window.addEventListener("mousemove",this.mouseCallback),this.three_data.obj_loader=new THREE.OBJLoader(this.three_data.manager),this.loadObj()}};enviromap.Init();