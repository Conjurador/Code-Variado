function load(){
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Pendulus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAA2VMAAAAsr");
	this.shape.setTransform(-1.2,143.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlyFzQibiZABjaQgBjYCbibQCViVDSgEIALgBQDaAACZCaQCbCbgBDYQABDaibCZQiZCbjagBQjZABiZibg");
	this.shape_1.setTransform(0,338.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-1,105.2,392.3);


// stage content:
(lib.Pendulus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pendulus
	this.instance = new lib.Pendulus_1();
	this.instance.setTransform(270,138.1,0.448,0.448,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:195.4,scaleX:0.45,scaleY:0.45,rotation:42.4,x:210.9,y:202.9},0).wait(1).to({rotation:37.7,x:216.4,y:207.5},0).wait(1).to({rotation:33.2,x:222,y:211.5},0).wait(1).to({rotation:28.8,x:227.8,y:215},0).wait(1).to({rotation:24.5,x:233.6,y:217.9},0).wait(1).to({rotation:20.4,x:239.5,y:220.3},0).wait(1).to({rotation:16.3,x:245.3,y:222.2},0).wait(1).to({rotation:12.4,x:251.1,y:223.7},0).wait(1).to({rotation:8.6,x:256.8,y:224.8},0).wait(1).to({rotation:5,x:262.4,y:225.5},0).wait(1).to({rotation:1.4,x:267.9,y:225.8},0).wait(1).to({rotation:-2.1,x:273.1,y:225.7},0).wait(1).to({rotation:-5.4,x:278.3,y:225.4},0).wait(1).to({rotation:-8.7,x:283.2,y:224.8},0).wait(1).to({rotation:-11.8,x:287.9,y:223.9},0).wait(1).to({rotation:-14.8,x:292.3,y:222.9},0).wait(1).to({rotation:-17.7,x:296.6,y:221.7},0).wait(1).to({rotation:-20.5,x:300.6,y:220.3},0).wait(1).to({rotation:-23.1,x:304.4,y:218.8},0).wait(1).to({rotation:-25.6,x:307.9,y:217.2},0).wait(1).to({rotation:-28,x:311.2,y:215.5},0).wait(1).to({rotation:-30.3,x:314.2,y:213.8},0).wait(1).to({rotation:-32.5,x:317.1,y:212.1},0).wait(1).to({rotation:-34.5,x:319.6,y:210.4},0).wait(1).to({rotation:-36.4,x:322,y:208.7},0).wait(1).to({rotation:-38.1,x:324.1,y:207.1},0).wait(1).to({rotation:-39.7,x:326,y:205.5},0).wait(1).to({rotation:-41.2,x:327.7,y:204.1},0).wait(1).to({rotation:-42.5,x:329.2,y:202.7},0).wait(1).to({rotation:-43.7,x:330.5,y:201.5},0).wait(1).to({rotation:-44.7,x:331.6,y:200.5},0).wait(1).to({rotation:-45.5,x:332.5,y:199.6},0).wait(1).to({rotation:-46.1,x:333.2,y:198.9},0).wait(1).to({rotation:-46.6,x:333.7,y:198.3},0).wait(1).to({rotation:-46.9,x:334,y:198},0).wait(1).to({rotation:-47,x:334.1,y:197.9},0).wait(1).to({rotation:-46.9,x:334,y:198},0).wait(1).to({rotation:-46.6,x:333.6,y:198.4},0).wait(1).to({rotation:-46,x:333.1,y:199},0).wait(1).to({rotation:-45.3,x:332.3,y:199.8},0).wait(1).to({rotation:-44.4,x:331.3,y:200.8},0).wait(1).to({rotation:-43.3,x:330.1,y:201.9},0).wait(1).to({rotation:-42,x:328.7,y:203.3},0).wait(1).to({rotation:-40.6,x:327,y:204.7},0).wait(1).to({rotation:-39,x:325.1,y:206.3},0).wait(1).to({rotation:-37.2,x:323,y:207.9},0).wait(1).to({rotation:-35.3,x:320.7,y:209.6},0).wait(1).to({rotation:-33.3,x:318.1,y:211.4},0).wait(1).to({rotation:-31.1,x:315.3,y:213.2},0).wait(1).to({rotation:-28.8,x:312.2,y:215},0).wait(1).to({rotation:-26.3,x:308.9,y:216.7},0).wait(1).to({rotation:-23.7,x:305.3,y:218.4},0).wait(1).to({rotation:-21,x:301.4,y:220},0).wait(1).to({rotation:-18.2,x:297.4,y:221.4},0).wait(1).to({rotation:-15.2,x:293,y:222.7},0).wait(1).to({rotation:-12.2,x:288.4,y:223.8},0).wait(1).to({rotation:-9,x:283.6,y:224.7},0).wait(1).to({rotation:-5.7,x:278.6,y:225.4},0).wait(1).to({rotation:-2.2,x:273.4,y:225.7},0).wait(1).to({rotation:1.3,x:268,y:225.8},0).wait(1).to({rotation:4.9,x:262.4,y:225.5},0).wait(1).to({rotation:8.7,x:256.7,y:224.8},0).wait(1).to({rotation:12.6,x:250.9,y:223.7},0).wait(1).to({rotation:16.6,x:245,y:222.2},0).wait(1).to({rotation:20.7,x:239,y:220.2},0).wait(1).to({rotation:24.9,x:233.1,y:217.7},0).wait(1).to({rotation:29.2,x:227.2,y:214.6},0).wait(1).to({rotation:33.7,x:221.4,y:211.1},0).wait(1).to({rotation:38.3,x:215.7,y:206.9},0).wait(1).to({rotation:43,x:210.2,y:202.2},0).wait(1).to({rotation:48,x:204.8,y:196.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.1,320.6,161,153.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
console.log('funfou');
}
var lib, images, createjs, ss;

var canvas, stage, exportRoot;
function init() {
	//load();
	canvas = document.getElementById("canvas");
	exportRoot = new lib.Pendulus();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

window.addEventListener("load", load, false);
