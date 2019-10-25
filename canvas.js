$(function() {  //on load


function ranLine() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = (window.innerWidth / 2);
c.height = (window.innerHeight / 3);
var x = Math.floor(Math.random() * c.width);
var y = Math.floor(Math.random() * c.height);
ctx.translate(50, -50);
ctx.rotate(25 * Math.PI / 180);
ctx.lineWidth = 1;
ctx.strokeStyle = '#fff';
	for (var i = 0; i < 12; i++) {
    	ctx.beginPath();
    	ctx.moveTo( i*18+12 , Math.floor(Math.random() * c.height)+30);
        //ctx.rotate(25 * Math.PI / 180);
		ctx.lineTo(i*18+12 , Math.floor(Math.random() * c.height)+30);
		ctx.stroke();
        //ctx.fillStyle = '#F30';
        //ctx.fillRect(x,y,2,2);
	}
    ctx.restore();
    ctx.translate(100, -50);
    for (var j = 0; j < 6; j++) {
        ctx.strokeStyle = '#d3d3d3';
    	ctx.beginPath();
    	ctx.moveTo(150+(10*j) , Math.floor(Math.random() * c.height)+30);
        //ctx.rotate(25 * Math.PI / 180);
		ctx.lineTo(150+(10*j) , Math.floor(Math.random() * c.height));
		ctx.stroke();
        ctx.fillStyle = '#ffff';
        ctx.fillRect(x+j,y+j,1,6+j);
	}
}

ranLine();
drawSquares();

function drawSquares() {
var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
c.width = (window.innerWidth / 2);
c.height = (window.innerHeight / 3);
var x = Math.floor(Math.random() * c.width);
var y = Math.floor(Math.random() * c.height);
ctx.translate(-80, 0);
	for (var i = 0; i < 8; i++) {
    	ctx.moveTo((x * i * 12), (y+i));
        ctx.fillStyle = '#ff0066';
        ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);
	}
    for (var i = 0; i < 12; i++) {
    	ctx.moveTo(i + 12 * x, y+i);
        ctx.fillStyle = '#33ccff';
        ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);
	}
}

///////////////////////////////////////
///////////////////////////////////////

function drawSquares2() {
	var c = document.getElementById("canvasb2");
	var ctx = c.getContext("2d");
	c.width = (window.innerWidth / 4);
	c.height = (window.innerHeight / 3);
	var x = Math.floor(Math.random() * c.width);
	var y = Math.floor(Math.random() * c.height);
	//ctx.translate(70, 0);
		for (var i = 0; i < 8; i++) {
			ctx.moveTo((x * i * 12), (y+i));
			ctx.fillStyle = '#ff0066';
			ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);
		}
		for (var i = 0; i < 12; i++) {
			ctx.moveTo(i + 12 * x, y+i);
			ctx.fillStyle = '#33ccff';
			ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);
		}
	}
	drawSquares2();

	ranLine2();
	function ranLine2() {
	var c = document.getElementById("canvasb");
	var ctx = c.getContext("2d");
	c.width = (window.innerWidth / 4);
	c.height = (window.innerHeight / 2);
	var x = Math.floor(Math.random() * c.width);
	var y = Math.floor(Math.random() * c.height);
	ctx.translate(80, -50);
	ctx.rotate(25 * Math.PI / 180);
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#fff';
		for (var i = 0; i < 12; i++) {
			ctx.beginPath();
			ctx.moveTo( i*18+12 , Math.floor(Math.random() * c.height)+30);
			//ctx.rotate(25 * Math.PI / 180);
			ctx.lineTo(i*18+12 , Math.floor(Math.random() * c.height)+30);
			ctx.stroke();
			//ctx.fillStyle = '#F30';
			//ctx.fillRect(x,y,2,2);
		}
		ctx.restore();
		//ctx.translate(100, -50);
		ctx.translate(20, -10);
		for (var j = 0; j < 6; j++) {
			ctx.strokeStyle = '#ff0066';
			ctx.beginPath();
			ctx.moveTo(150+(10*j) , Math.floor(Math.random() * c.height)-5);
			ctx.lineTo(150+(10*j) , Math.floor(Math.random() * c.height));
			ctx.stroke();
			//ctx.fillStyle = '#F30';
			//ctx.fillRect(2+x+(4*j),10+y+j,1,6+j);
		}
	}

/////////bottom full-width canvas///////////
//////////regular random squares////////////
function drawSquares3() {
	var c = document.getElementById("canvasc2");
	var ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = (window.innerHeight / 2);
	var x = Math.floor(Math.random() * c.width);
	var y = Math.floor(Math.random() * c.height);
	//ctx.translate(70, 0);
	for (var i = 0; i < 10; i++) {
		ctx.moveTo((x * i * 12), (y+i));
		//ctx.fillStyle = '#ff0066';
		ctx.fillStyle = 'rgb(130,'+(140+(10*i))+','+(255-(10*i))+')';
		ctx.filter = "brightness(180%)";
		ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);
	}
	for (var i = 0; i < 20; i++) {
		ctx.filter = "brightness(90%)";
		ctx.moveTo(i * 12 + x, y+i);
		//ctx.scale(1.1,1.1);
		//ctx.fillStyle = '#33ccff';
		ctx.fillStyle = 'rgb('+(140+(10*i))+',130,'+(255-(9*i))+')';
		ctx.fillRect(Math.floor(Math.random() * c.width),Math.floor(Math.random() * c.height),4,4);  
	}
}
drawSquares3();
//copy a frame of drawSquares3 to redraw for each new frame of light-up squares
//prevents confetti effect of drawSquares changing position each time they're drawn
var c = document.getElementById("canvasc2");
var ctx = c.getContext("2d");
var imgData = ctx.getImageData(0, 0, c.width, c.height);
	
function copy() {
	ctx.putImageData(imgData, 0, 0);
	ctx.save();
}

////////////light-up random squares////////////////
var c = document.getElementById("canvasc2"),
ctx = c.getContext("2d"),
lightups = [],
lightCount = 20,
mouseX = 0,
mouseY = 0, 
randomRange = function(minRange,maxRange){
	return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
};
c.width = window.innerWidth;
c.height = (window.innerHeight / 2);
var normalColor = ['rgb(153, 255, 153)','rgb(102, 204, 255)','rgb(255, 102, 153)','rgb(255, 102, 102)','rgb(255, 204, 102)'];
var hoverColor = ['rgb(204, 255, 153)','rgb(153, 221, 255)','rgb(255, 153, 204)','rgb(255, 170, 128)','rgb(255, 255, 153)'] 

while (lightCount--) {
	lightups.push({
		x: randomRange(10, c.width-10),
		y: randomRange(10, c.height-10),
		width: 4,
		height: 4,
		hovering: false
	});
};
// Update Shapes
var updateShapes = function(){
    var i = lightups.length;
    while(i--){
		var light = lightups[i];
		var spread = 80;
		// check for hovering within 80px of square by comparing mouseX and mouseY to the current square's x, y, width, and height properties
		  if(mouseX >= light.x - spread && mouseX <= light.x + light.width + spread && mouseY >= light.y - spread && mouseY <= light.y + light.height +spread){
			light.hovering = true;  			  
        } else {
			light.hovering = false;    
        }
    };
};
// Render Shapes
var renderShapes = function(){
var i = lightups.length;
// loop over all shapes
while(i--){
	var light = lightups[i];
	ctx.beginPath();
	ctx.rect(light.x, light.y, light.width, light.height);
	ctx.closePath();
	//console.log(light.x + ", " + light.y);
	// change the color if the square is being hovered over/near
	if(light.hovering){
		ctx.fillStyle = hoverColor[i%hoverColor.length]; //using i%hoverColor.length returns the remainder of i divided by the length; allows color array to start at beginning again after i is greater than the array length
		light.width = 5; light.height= 5;
	} else {
		ctx.fillStyle = normalColor[i%normalColor.length];
		light.width = 4; light.height= 4;
	}
	ctx.fill();
  };
};

// Update mouse position (coords) on mousemove when mouse is over the canvas

$( "#canvasc2" ).mouseover(function() { 
  //$( "#canvasc2" ).mousemove(function( event ) { //same as using $(this) ?
	$( this ).on('mousemove', function( event ){ 
	var offset = $( this ).offset();
	mouseX = event.pageX - offset.left;
	mouseY = event.pageY - offset.top;
  });
}); 

$( "#canvasc2" ).mouseleave(function() {
  $( "#canvasc2" ).off("mousemove");  
}); 

// Drawing loop running 60 FPS
setInterval(function(){                     
	ctx.clearRect(0, 0, c.width, c.height);
	copy();
    updateShapes();    
	renderShapes(); 
}, 1000/60);


////////
});