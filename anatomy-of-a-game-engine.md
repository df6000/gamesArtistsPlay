start by looking at blender game engine.
what does it do?

logic editor/logic bricks

renders scenes continuously and allows interaction

hmmm.  sounds a bit like p5.js, doesn't it?

with its

function setup() {
	
}

and its 

function draw() {
	
}


or, three.js with its


function init(){
	
}


and its 

function render() {
	
}


it turns out, actually, this is a key paradigm in almost all programming contexts which involve interaction: set up a state and then add an event listener to monitor changes; and this is is also how a game engine written in javascript looks.  so I want to look at two very small game engines written in javascript today, one from an online tutorial that maybe some of you looked at already and one from a course that's on udacity that I recommend you take if this stuff interests you.  and I'll just leave the Blender game engine concepts class up to born CG who is very competent.


