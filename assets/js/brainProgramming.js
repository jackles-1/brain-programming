var breatheIcon = document.querySelector("#breatheIcon");
var thoughtsIcon = document.querySelector("#thoughtsIcon");
var breatheCircle = document.querySelector("#breatheCircle");
var thoughtsDropDown = document.querySelector("select");
var backArrow = document.querySelector("#backArrow");
var breatheSound = document.querySelector("#breatheSound");
var icons = document.querySelectorAll(".icon");

// hide icons when clicked
breatheIcon.addEventListener("click", function(){
	hideIcons();
	breatheCircle.classList.remove("hidden");
	backArrow.classList.remove("arrowHidden");

	// FIX--ISN'T PlAYING
	breatheSound.play();
});
thoughtsIcon.addEventListener("click", function(){
	hideIcons();
	thoughtsDropDown.classList.remove("hidden");
	backArrow.classList.remove("arrowHidden");
});

// clicking back arrow resets hidden classes to inital values, returning to landing screen
backArrow.addEventListener("click", function(){
	if(!backArrow.classList.contains("hidden")){
		for(var i=0; i<icons.length; i++){
			icons[i].classList.remove("hidden");
		}

		backArrow.classList.add("arrowHidden");
		breatheCircle.classList.add("hidden");
		thoughtsDropDown.classList.add("hidden");
	}
});


// ADD FADING EFFECT
function hideIcons(){
	for(var i=0; i<icons.length; i++){
		icons[i].classList.add("hidden");
	}
}
