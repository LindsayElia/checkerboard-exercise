// Your JS goes here

for (var i = 0; i < 81; i++){	// count up to the number of squares we need
	// no need to add a new line after every 9 squares because we are using % for the sizes
	
	var newDiv = document.createElement("div");	
	// creating a new <element>, like <h1> or <p>. 
	// We're creating a <div> section here.
	
	document.body.appendChild(newDiv);	
	// tells the body to display my newDiv,
	// appends newDiv as a child element to the <body>
	
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.padding = "0 0 11.1% 0";
	if (i%2 === 0){
		newDiv.style.background = "red"; 	// sets the background color to red
	}
	else {
		newDiv.style.background = "black"; 	// sets the background color to black
	}
}




// newDiv.innerHTML = "."	// This appears inside of the <div> element that we just created.
// newDiv.style.color = "red";	//	sets the text to the same red as the background




/*



var blackDiv = document.createElement("div");	// creating a new <element>, like <h1> or <p>. We're creating a <div> section here.

blackDiv.innerHTML = "."	// This appears inside of the <div> element that we 

document.body.appendChild(blackDiv);	// tells the body to display my newDiv,
// ?? appends newDiv as a child element to the <body>

blackDiv.style.background = "black"; 	// sets the background color to red
blackDiv.style.color = "black";	//	sets the text to the same red as the background
blackDiv.style.width = "11.1%";
blackDiv.style.float = "left";
blackDiv.style.padding = "0 0 11.1% 0";

*/