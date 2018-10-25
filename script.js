document.getElementById("b1").onclick = function() {
	var bgColor = document.body.style.background;
	
	if(bgColor === "green"){
		document.body.style.background = "yellow";
	}
	else{
		document.body.style.background = "green";
	}
}

document.getElementById("b2").onclick = function() {
	var elems = document.getElementsByTagName("P");
	console.log(elems);

	var text = document.body;
	var newHTML;;
	
	for(var x in elems){
			console.log("here:" + elems[x].innerHTML);
			text.innerHTML = text.innerHTML
				.replace(elems[x].innerHTML, '**********');
	}
}
