(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"bwc_atlas_", frames: [[0,0,1972,1971]]},
		{name:"bwc_atlas_2", frames: [[0,0,981,905],[0,907,946,843],[948,907,393,690],[1847,0,79,113],[983,0,862,747],[0,1752,1684,199],[1343,749,256,256]]}
];


// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["bwc_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pentagram = function() {
	this.initialize(ss["bwc_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbole_2_Calque_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-18.7,-18.7,0.2735,0.2735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole_2_Calque_1, null, null);


(lib.Symbole_1_Calque_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_14();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole_1_Calque_1, null, null);


(lib.Interpoler10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Pentagram();
	this.instance.parent = this;
	this.instance.setTransform(-62.25,-84.35,0.8024,0.7306,0,25.614,0.0131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-84.3,286.29999999999995,168.7);


(lib.Interpoler9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-421,-49.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421,-49.8,842,99.5);


(lib.book150621svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// book_150621_svg
	this.instance = new lib.CachedTexturedBitmap_13();
	this.instance.parent = this;
	this.instance.setTransform(389.65,497.2,0.6476,0.6476);

	this.instance_1 = new lib.CachedTexturedBitmap_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.55,32.6,0.6476,0.6476);

	this.instance_2 = new lib.CachedTexturedBitmap_11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,25.05,0.6476,0.6476);

	this.instance_3 = new lib.CachedTexturedBitmap_10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.2,0,0.6476,0.6476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0,635.3,586.1);


(lib.Séquence_1_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Interpoler9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(514.2,756.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:513.45,y:662.7,alpha:0.7891},9).wait(7));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Pentagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pentagram
	this.instance = new lib.Interpoler10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(519.95,350.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:517.15,y:268.1,alpha:1},9).wait(7));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Book
	this.instance = new lib.book150621svg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(541.35,387.6,0.758,0.7721,0,0,0,359.7,297.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},40).to({y:301.55},9).wait(7));

}).prototype = p = new cjs.MovieClip();


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1_obj_
	this.Calque_1 = new lib.Symbole_2_Calque_1();
	this.Calque_1.name = "Calque_1";
	this.Calque_1.parent = this;
	this.Calque_1.setTransform(251,250.8,1,1,0,0,0,251,250.8);
	this.Calque_1.depth = 0;
	this.Calque_1.isAttachedToCamera = 0
	this.Calque_1.isAttachedToMask = 0
	this.Calque_1.layerDepth = 0
	this.Calque_1.layerIndex = 0
	this.Calque_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Calque_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole2, new cjs.Rectangle(-18.7,-18.7,539.5,539.2), null);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1_obj_
	this.Calque_1 = new lib.Symbole_1_Calque_1();
	this.Calque_1.name = "Calque_1";
	this.Calque_1.parent = this;
	this.Calque_1.setTransform(215.5,186.8,1,1,0,0,0,215.5,186.8);
	this.Calque_1.depth = 0;
	this.Calque_1.isAttachedToCamera = 0
	this.Calque_1.isAttachedToMask = 0
	this.Calque_1.layerDepth = 0
	this.Calque_1.layerIndex = 0
	this.Calque_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Calque_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(0,0,431,373.5), null);


(lib.Séquence_1_White = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// White
	this.instance = new lib.Symbole1();
	this.instance.parent = this;
	this.instance.setTransform(501.8,349.5,1,1,0,0,0,215.5,186.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(34).to({y:263.45},9).wait(7));

}).prototype = p = new cjs.MovieClip();


(lib.Séquence_1_Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Circle
	this.instance = new lib.Symbole2();
	this.instance.parent = this;
	this.instance.setTransform(517.7,345.65,0.0042,0.0042,0,0,0,239.2,239.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regX:238.3,regY:239.1,scaleX:1.4144,scaleY:1.4144,x:516.45,y:344.6},26).to({regY:239,scaleX:1.8278,scaleY:1.7386,x:479.75,y:344.65,alpha:0},5).wait(19));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.bwc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_55 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Pentagram_obj_
	this.Pentagram = new lib.Séquence_1_Pentagram();
	this.Pentagram.name = "Pentagram";
	this.Pentagram.parent = this;
	this.Pentagram.depth = 0;
	this.Pentagram.isAttachedToCamera = 0
	this.Pentagram.isAttachedToMask = 0
	this.Pentagram.layerDepth = 0
	this.Pentagram.layerIndex = 0
	this.Pentagram.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Pentagram).wait(56));

	// Circle_obj_
	this.Circle = new lib.Séquence_1_Circle();
	this.Circle.name = "Circle";
	this.Circle.parent = this;
	this.Circle.depth = 0;
	this.Circle.isAttachedToCamera = 0
	this.Circle.isAttachedToMask = 0
	this.Circle.layerDepth = 0
	this.Circle.layerIndex = 1
	this.Circle.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Circle).wait(56));

	// Calque_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EAn3AbSQgLgLAAgPQAAgPALgKQALgKAPAAQAQAAAKAKQALAKAAAPQAAAPgLALQgKAKgQAAQgPAAgLgKg");
	var mask_graphics_7 = new cjs.Graphics().p("EAlcAbtQgygwAAhDQAAhEAygvQAxgvBFAAQBGAAAxAvQAxAvAABEQAABDgxAwQgxAvhGAAQhFAAgxgvg");
	var mask_graphics_8 = new cjs.Graphics().p("EAjAAcHQhZhVAAh3QAAh4BZhUQBXhVB8AAQB8AABYBVQBXBUAAB4QAAB3hXBVQhYBVh8AAQh8AAhXhVg");
	var mask_graphics_9 = new cjs.Graphics().p("EAgkAciQh/h7AAirQAAisB/h5QB+h6CyAAQCzAAB9B6QB+B5AACsQAACrh+B7Qh9B6izAAQiyAAh+h6g");
	var mask_graphics_10 = new cjs.Graphics().p("AeJc9QinigAAjfQAAjhCnieQCkifDnAAQDqAACkCfQCkCeAADhQAADfikCgQikCfjqAAQjnAAikifg");
	var mask_graphics_11 = new cjs.Graphics().p("AbtdYQjNjGAAkTQAAkVDNjEQDLjDEdAAQEgAADLDDQDKDEAAEVQAAETjKDGQjLDDkgAAQkdAAjLjDg");
	var mask_graphics_12 = new cjs.Graphics().p("AZSdzQj1jsAAlHQAAlKD1joQDxjoFTAAQFWAADyDoQDxDoAAFKQAAFHjxDsQjyDolWAAQlTAAjxjog");
	var mask_graphics_13 = new cjs.Graphics().p("AW2eOQkbkRAAl7QAAl/EbkNQEXkNGKAAQGNAAEXENQEXENAAF/QAAF7kXERQkXENmNAAQmKAAkXkNg");
	var mask_graphics_14 = new cjs.Graphics().p("AUaepQlCk3AAmvQAAmzFCkyQE+kyG/AAQHEAAE+EyQE9EyAAGzQAAGvk9E3Qk+EynEAAQm/AAk+kyg");
	var mask_graphics_15 = new cjs.Graphics().p("AR/fEQlplcAAnjQAAnoFplXQFklWH1AAQH6AAFkFWQFkFXAAHoQAAHjlkFcQlkFXn6AAQn1AAlklXg");
	var mask_graphics_16 = new cjs.Graphics().p("APjfeQmPmBAAoXQAAocGPl8QGLl7IrAAQIxAAGKF7QGKF8AAIcQAAIXmKGBQmKF8oxAAQorAAmLl8g");
	var mask_graphics_17 = new cjs.Graphics().p("ANHf5Qm2mmAApMQAApQG2miQGxmgJiAAQJnAAGxGgQGwGiAAJQQAAJMmwGmQmxGhpnAAQpiAAmxmhg");
	var mask_graphics_18 = new cjs.Graphics().p("EAKsAgUQndnMAAp/QAAqFHdnFQHXnHKYAAQKdAAHXHHQHXHFAAKFQAAJ/nXHMQnXHGqdAAQqYAAnXnGg");
	var mask_graphics_19 = new cjs.Graphics().p("EAIRAgvQoFnxAAq0QAAq5IFnqQH9nsLOAAQLUAAH9HsQH+HqAAK5QAAK0n+HxQn9HrrUAAQrOAAn9nrg");
	var mask_graphics_20 = new cjs.Graphics().p("EAF1AhKQoqoXAAroQAAruIqoPQIkoQMDAAQMLAAIkIQQIkIPAALuQAALookIXQokIQsLAAQsDAAokoQg");
	var mask_graphics_21 = new cjs.Graphics().p("EADaAhlQpRo9AAsbQAAsiJRo1QJKo1M5AAQNBAAJLI1QJKI1AAMiQAAMbpKI9QpLI1tBAAQs5AApKo1g");
	var mask_graphics_22 = new cjs.Graphics().p("EAA+Ah/Qp4phAAtQQAAtWJ4paQJxpaNvAAQN4AAJwJaQJxJaAANWQAANQpxJhQpwJat4AAQtvAApxpag");
	var mask_graphics_23 = new cjs.Graphics().p("EgBdAiaQqgqHAAuEQAAuKKgp/QKWp/OlAAQOvAAKXJ/QKXJ/AAOKQAAOEqXKHQqXJ/uvAAQulAAqWp/g");
	var mask_graphics_24 = new cjs.Graphics().p("EgD4Ai1QrHqtAAu3QAAvALHqjQK8qkPbAAQPlAAK9KkQK+KjAAPAQAAO3q+KtQq9KkvlAAQvbAAq8qkg");
	var mask_graphics_25 = new cjs.Graphics().p("EgGUAjQQrtrSAAvsQAAv0LtrIQLjrJQRAAQQbAALkLJQLkLIAAP0QAAPsrkLSQrkLJwbAAQwRAArjrJg");
	var mask_graphics_26 = new cjs.Graphics().p("EgIvAjrQsVr4AAwfQAAwpMVruQMJrtRHAAQRSAAMKLtQMKLuAAQpQAAQfsKL4QsKLuxSAAQxHAAsJrug");
	var mask_graphics_27 = new cjs.Graphics().p("EgLLAkGQs7sdAAxUQAAxdM7sTQMvsTR+AAQSIAAMwMTQMxMTAARdQAARUsxMdQswMTyIAAQx+AAsvsTg");
	var mask_graphics_28 = new cjs.Graphics().p("EgNnAkhQtitDAAyIQAAyRNis4QNXs4SzAAQS+AANXM4QNXM4AASRQAASItXNDQtXM3y+AAQyzAAtXs3g");
	var mask_graphics_29 = new cjs.Graphics().p("EgQCAk8QuJtoAAy8QAAzGOJtdQN9tdToAAQT2AAN9NdQN9NdAATGQAAS8t9NoQt9Ncz2AAQzoAAt9tcg");
	var mask_graphics_30 = new cjs.Graphics().p("EgSeAlXQuwuOAAzwQAAz6OwuCQOkuCUeAAQUsAAOjOCQOkOCAAT6QAATwukOOQujOB0sAAQ0eAAukuBg");
	var mask_graphics_31 = new cjs.Graphics().p("EgU6AlxQvWuzAA0kQAA0vPWumQPKunVVAAQViAAPKOnQPKOmAAUvQAAUkvKOzQvKOn1iAAQ1VAAvKung");
	var mask_graphics_32 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_33 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_34 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_35 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_36 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_37 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_38 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_39 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_40 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_41 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_42 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_43 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_44 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_45 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_46 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_47 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_48 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_49 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_50 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_52 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_53 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_54 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");
	var mask_graphics_55 = new cjs.Graphics().p("EgW5AmTQv+vZAA1XQAA1kP+vMQPwvLWLAAQWYAAPxPLQPwPMAAVkQAAVXvwPZQvxPL2YAAQ2LAAvwvLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:261.4326,y:175.6157}).wait(1).to({graphics:mask_graphics_7,x:268.2452,y:182.0148}).wait(1).to({graphics:mask_graphics_8,x:275.0303,y:188.3865}).wait(1).to({graphics:mask_graphics_9,x:281.8431,y:194.7606}).wait(1).to({graphics:mask_graphics_10,x:288.6282,y:201.1573}).wait(1).to({graphics:mask_graphics_11,x:295.4407,y:207.5314}).wait(1).to({graphics:mask_graphics_12,x:302.2535,y:213.9056}).wait(1).to({graphics:mask_graphics_13,x:309.0386,y:220.3021}).wait(1).to({graphics:mask_graphics_14,x:315.8263,y:226.6763}).wait(1).to({graphics:mask_graphics_15,x:322.639,y:233.0754}).wait(1).to({graphics:mask_graphics_16,x:329.4491,y:239.447}).wait(1).to({graphics:mask_graphics_17,x:336.2368,y:245.8212}).wait(1).to({graphics:mask_graphics_18,x:343.0469,y:252.2178}).wait(1).to({graphics:mask_graphics_19,x:349.8847,y:258.617}).wait(1).to({graphics:mask_graphics_20,x:356.6723,y:264.9661}).wait(1).to({graphics:mask_graphics_21,x:363.4824,y:271.3628}).wait(1).to({graphics:mask_graphics_22,x:370.295,y:277.7369}).wait(1).to({graphics:mask_graphics_23,x:377.0551,y:284.1085}).wait(1).to({graphics:mask_graphics_24,x:383.8679,y:290.5077}).wait(1).to({graphics:mask_graphics_25,x:390.6805,y:296.9068}).wait(1).to({graphics:mask_graphics_26,x:397.4906,y:303.2784}).wait(1).to({graphics:mask_graphics_27,x:404.2784,y:309.6526}).wait(1).to({graphics:mask_graphics_28,x:411.0911,y:316.0267}).wait(1).to({graphics:mask_graphics_29,x:417.9012,y:322.4234}).wait(1).to({graphics:mask_graphics_30,x:424.6889,y:328.8225}).wait(1).to({graphics:mask_graphics_31,x:431.474,y:335.1691}).wait(1).to({graphics:mask_graphics_32,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_33,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_34,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_35,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_36,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_37,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_38,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_39,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_40,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_41,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_42,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_43,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_44,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_45,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_46,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_47,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_48,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_49,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_50,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_51,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_52,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_53,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_54,x:441.0873,y:342.2436}).wait(1).to({graphics:mask_graphics_55,x:441.0873,y:342.2436}).wait(1));

	// White_obj_
	this.White = new lib.Séquence_1_White();
	this.White.name = "White";
	this.White.parent = this;
	this.White.depth = 0;
	this.White.isAttachedToCamera = 0
	this.White.isAttachedToMask = 0
	this.White.layerDepth = 0
	this.White.layerIndex = 2
	this.White.maskLayerName = 0

	var maskedShapeInstanceList = [this.White];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.White).wait(56));

	// Book_obj_
	this.Book = new lib.Séquence_1_Book();
	this.Book.name = "Book";
	this.Book.parent = this;
	this.Book.setTransform(510.4,384.3,1,1,0,0,0,510.4,384.3);
	this.Book.depth = 0;
	this.Book.isAttachedToCamera = 0
	this.Book.isAttachedToMask = 0
	this.Book.layerDepth = 0
	this.Book.layerIndex = 3
	this.Book.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Book).wait(56));

	// Text_obj_
	this.Text = new lib.Séquence_1_Text();
	this.Text.name = "Text";
	this.Text.parent = this;
	this.Text.depth = 0;
	this.Text.isAttachedToCamera = 0
	this.Text.isAttachedToMask = 0
	this.Text.layerDepth = 0
	this.Text.layerIndex = 4
	this.Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(522,280.6,474.1,553.4);
// library properties:
lib.properties = {
	id: 'DAD9676943A9D94D9A4DD6CD9D1BBA61',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#00FF66",
	opacity: 1.00,
	manifest: [
		{src:"images/bwc_atlas_.png", id:"bwc_atlas_"},
		{src:"images/bwc_atlas_2.png", id:"bwc_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DAD9676943A9D94D9A4DD6CD9D1BBA61'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;