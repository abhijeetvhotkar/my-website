webpackJsonp([0],{"+708":function(t,e,a){"use strict";var i={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;a("JAHf"),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,a,i,n,s,r,d,o,c,l,m,p,u,h){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:d,distance:c,color:s,opacity:o,width:r},move:{enable:!0,speed:l,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:m,mode:p},onclick:{enable:u,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},staticRenderFns:[]},s=a("VU/8")(i,n,!1,null,null,null);e.a=s.exports},"1Aie":function(t,e){},"4+hh":function(t,e){},"6MDG":function(t,e){},AnE8:function(t,e){},Co7y:function(t,e,a){t.exports=a.p+"static/img/gym.28e1a4b.png"},Dmnq:function(t,e,a){t.exports=a.p+"static/img/drone.4e9c3d6.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-toolbar",{staticClass:"md-default md-toolbar-offset",attrs:{id:"nav-header","md-elevation":"1"}},[e("h3",{staticClass:"md-title",staticStyle:{flex:"1"}},[this._v("Abhijeet Vhotkar")])])},staticRenderFns:[]};var s=a("VU/8")({name:"Navbar",data:function(){return{}}},n,!1,function(t){a("npNd")},"data-v-1488d28e",null).exports,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("vue-particles",{attrs:{color:"#8b7d6b",particleOpacity:.7,particlesNumber:100,shapeType:"circle",particleSize:5,linesColor:"#eedfcc",linesWidth:2,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"portfolio",staticClass:"md-layout md-gutter md-alignment-center"},[i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",{attrs:{"md-with-hover":""}},[i("md-card-media",[i("img",{attrs:{src:a("dJQF"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Maptu")]),t._v(" "),i("div",{staticClass:"md-subhead",attrs:{align:"justify"}},[t._v("Data Visualization Project developed in IRC using Python, vueJS and crossbarIO")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-accent md-raised",attrs:{href:"https://maptu.irc.umbc.edu/",target:"_blank"}},[t._v("Learn More")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              MapTu software is being developed at the Imaging Research Center at UMBC. The now common practice of digital geographic mapping allows us to introduce new practices for representing information that might better address our needs today. Specifically, we are exploring the potential of visualizing information and ideas as virtual objects in virtual 3D space.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("cfAe"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Tire tracks in snow")]),t._v(" "),i("div",{staticClass:"md-subhead",attrs:{align:"justify"}},[t._v("An Unreal Engine 4 Project")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-primary md-raised",attrs:{href:"https://github.com/abhijeetvhotkar/gfgProject",target:"_blank"}},[t._v("Github")]),t._v(" "),i("md-button",{staticClass:"md-accent md-raised",attrs:{href:"http://abhijeetvhotkarprojects.blogspot.com/2017/12/tire-tracks-in-snow-graphics-class.html",target:"_blank"}},[t._v("Learn More")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              A project which is built in Unreal Engine 4 to implement a simple technique to deform snow when a vehicle's tire starts rolling on a snow terrain. The technique is simple and can be implemented in Unreal Engine 4 using the Physics Asset Material Editor in Unreal and making heavy use of blueprints for functionality with Render Target.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("YdV+"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Object Tracking using Valve’s Lighthouse")]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v("Positional tracking algorithm developed using C, FreeRTOS, TS3633, and Wi-Fi")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-primary md-raised",attrs:{href:"https://github.com/abhijeetvhotkar/driver_esp32",target:"_blank"}},[t._v("Github")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              Achieved the tracking of an object with the TS3633 CM1 module and ESP32. The system is built to use WiFi for the transfer of packets containing tracking data over the User Datagram Protocol.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("UcdQ"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Pattern Detection using CNN")]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v("Project built to perform convolution and detect patterns using Verilog")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-primary md-raised",attrs:{href:"https://github.com/abhijeetvhotkar/CNN_Pattern_Detection",target:"_blank"}},[t._v("Github")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              Convolution is a key kernel in Convolutional Neural Networks (CNN). It is also a powerful tool for object and pattern detection. In this project, we are going to detect a specific pattern/object from a pool of objects and patterns. We are provided with a pattern and an image where you need to detect that pattern and determine how many times the pattern is being matched. Therefore, we will supply our fpga with two input images and fpga will render an output of how many times a match is found.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("Q0mk"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Mips CPU adopting CDC 6600")]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v("Project built on JAVA")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-primary md-raised",attrs:{href:"https://github.com/abhijeetvhotkar/CDC-6600-scoreboard",target:"_blank"}},[t._v("Github")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              Experience the design issues of advanced computer architectures through the design of an analyzer for a simplified MIPS CPU using high level programming languages. The considered MIPS CPU adopts the CDC 6600 scoreboard scheme to dynamically schedule instruction execution and employ caches in order to expedite memory access.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("Dmnq"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("Wi-Fi hotspot finder with AR")]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v("Drone searching for Wi-Fi hotspot across a specific area")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-accent md-raised",attrs:{href:"https://drive.google.com/file/d/1xmaq3t685WieXB6H8TRS51sYaGqt-hs1/view?usp=sharing",target:"_blank"}},[t._v("Learn More")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              We use a drone which identifies access points in a certain area. The data captured would then be plotted on a digital/google map to show the proximities of Wi-Fi network spots in that area. Project uses a quadcopter drone which is provided by John Hopkins University Applied Science Physics Lab. The drone uses a Raspberry Pi 3 processor that works on many Linux versions, which is also used as a Wi-Fi sniffing device. Basic programming required for the purpose is in C and Python. Q Ground Control is used as the flight controller. The best flight mode should be identified depending on the application requirements., Manual/Waypoint/Autonomous. The captured signals are transferred to a computing device where we plot them on a digital map to create a Wi-Fi and AR heat map. It shows all the Wi-Fi devices with variable signal strengths highlighted in different colors. Identifying access points and integration of them to AR map within a specific area is the main goal of the project.\n            ")])],1)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"},[i("div",{staticClass:"card-expansion"},[i("md-card",[i("md-card-media",[i("img",{attrs:{src:a("Co7y"),alt:"People"}})]),t._v(" "),i("md-card-header",[i("div",{staticClass:"md-title"},[t._v("World Fitness")]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v("A web app developed using LAMP stack")])]),t._v(" "),i("md-card-expand",[i("md-card-actions",{attrs:{"md-alignment":"space-between"}},[i("div",[i("md-button",{staticClass:"md-primary md-raised",attrs:{href:"https://github.com/abhijeetvhotkar/world_fitness",target:"_blank"}},[t._v("Github")])],1),t._v(" "),i("md-card-expand-trigger",[i("md-button",{staticClass:"md-icon-button"},[i("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),i("md-card-expand-content",[i("md-card-content",{attrs:{align:"justify"}},[t._v("\n              Membership management application to track gym members application status.\n            ")])],1)],1)],1)],1)])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("My Resume")]),this._v(" "),e("md-button",{staticClass:"md-dense md-raised md-primary",attrs:{href:"https://drive.google.com/file/d/1cY4BavxjDWy3pTIW4bhCs6ticM1aJRGh/view?usp=sharing",target:"_blank"}},[this._v("Click here")])],1)},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout md-gutter md-alignment-center"},[t._m(0),t._v(" "),a("div",{staticClass:"md-layout-item md-alignment-center"},[a("h2",[t._v("FIND ME HERE")]),t._v(" "),a("a",{attrs:{href:"http://linkedin.com/in/abhijeetvhotkar",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://github.com/abhijeetvhotkar",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://www.facebook.com/abhi903",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"https://twitter.com/abhijeetvhotkar",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter-square"],size:"4x"}})],1),t._v(" "),a("a",{attrs:{href:"mailto:abhijeetvhotkar@gmail.com",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"envelope-square",size:"4x"}})],1)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md-layout-item md-alignment-center"},[e("h2",[this._v("LOCATION")]),this._v(" "),e("a",{attrs:{href:"https://www.google.com/maps/place/4714+Aldgate+Green,+Arbutus,+MD+21227/@39.2624107,-76.7003911,17z/data=!3m1!4b1!4m5!3m4!1s0x89c81c51fa9a549b:0x6da08c420b14f0fd!8m2!3d39.262406!4d-76.698202",target:"_blank"}},[e("p",[this._v("Baltimore, Maryland & Ready to Relocate")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md-layout-item md-alignment-center"},[e("h2",[this._v("REACH ME @")]),this._v(" "),e("p",[this._v("+1 (443) 953-9169")])])}]};var l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md-layout md-gutter md-alignment-center"},[e("h4",[this._v("Made with "),e("span",[e("font-awesome-icon",{attrs:{icon:["fab","gratipay"]}})],1),this._v(" and VueJS")])])},staticRenderFns:[]};var m={name:"App",components:{Particles:a("VU/8")({name:"Particles",data:function(){return{}}},r,!1,function(t){a("1Aie")},"data-v-86f5525a",null).exports,Navbar:s,Portfolio:a("VU/8")({name:"Portfolio",data:function(){return{}}},d,!1,function(t){a("zU5S")},"data-v-01aeb5e0",null).exports,Resume:a("VU/8")({name:"Resume",data:function(){return{}}},o,!1,function(t){a("aXf8")},"data-v-513ad529",null).exports,appFooter:a("VU/8")({name:"appFooter",data:function(){return{}}},c,!1,function(t){a("6MDG")},"data-v-67f0a265",null).exports,CopyrightFooter:a("VU/8")({name:"appFooter",data:function(){return{}}},l,!1,function(t){a("pFxI")},"data-v-57ba5427",null).exports}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("particles"),t._v(" "),a("h1",{attrs:{id:"portfolio"}},[t._v("PORTFOLIO")]),t._v(" "),a("portfolio"),t._v(" "),a("hr"),t._v(" "),a("resume"),t._v(" "),a("hr"),t._v(" "),a("app-footer"),t._v(" "),a("copyright-footer")],1)},staticRenderFns:[]};var u=a("VU/8")(m,p,!1,function(t){a("WENc")},"data-v-3c43c8c6",null).exports,h=a("Lgyv"),v=a.n(h),f=(a("4+hh"),a("AnE8"),a("C/JF")),g=a("DfMW"),_=a("fhbW"),b=a("U0v6"),y=a("mM94"),C=a("Ubyc"),w=a.n(C);i.default.use(w.a),i.default.use(y.a),i.default.use(v.a),f.library.add(g.d,g.b,g.a,g.e,g.c,_.a),i.default.component("font-awesome-icon",b.FontAwesomeIcon),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:u},template:"<App/>"})},Q0mk:function(t,e,a){t.exports=a.p+"static/img/pipeline.a39af28.png"},UcdQ:function(t,e,a){t.exports=a.p+"static/img/cnn.636e995.png"},WENc:function(t,e){},"YdV+":function(t,e,a){t.exports=a.p+"static/img/VR.2560fb9.png"},aXf8:function(t,e){},cfAe:function(t,e,a){t.exports=a.p+"static/img/gfg.cd655ca.png"},dJQF:function(t,e,a){t.exports=a.p+"static/img/maptu.6997963.png"},npNd:function(t,e){},pFxI:function(t,e){},zU5S:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.986ac7dacdb4a80c5174.js.map