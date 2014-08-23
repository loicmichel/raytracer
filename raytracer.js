var Camera = function (){

}


var Vector = function (){

}



var RayTracer = function(){

}

RayTracer.prototype.render = function (scene, context, width, height){
	var imgData=context.createImageData(width,height);
	var i = 0;
	for(var x = 0; x < width; x++){
		for(var y = 0; y < height; y++){
			var ray = new Ray();
			var color = ray.color(scene);

			imgData.data[i+0]=color.R;
			imgData.data[i+1]=color.G;
			imgData.data[i+2]=color.B;
			imgData.data[i+3]=255;
			i += 4;
		}
	}
	context.putImageData(imgData,0,0);
}

var Ray = function(){

}

Ray.prototype.color = function (scene){

	return {
		R: 0,
		G: 0,
		B: 0};
}