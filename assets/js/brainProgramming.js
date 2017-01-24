var breatheIcon = document.querySelector("#breatheIcon");
var thoughtsIcon = document.querySelector("#thoughtsIcon");
var breatheCircle = document.querySelector("#breatheCircle");
var thoughtsDropDown = document.querySelector("#thoughtsDropDown");
var backArrow = document.querySelector("#backArrow");
var breatheSound = document.querySelector("#breatheSound");
var icons = document.querySelectorAll(".icon");
var interval;

// icon functionality
breatheIcon.addEventListener("click", function(){
	hideIcons();
	breatheCircle.classList.remove("hidden");
	breatheSound.play();
	breathing();
	backArrow.classList.remove("arrowHidden");
});
thoughtsIcon.addEventListener("click", function(){
	hideIcons();
	thoughtsDropDown.classList.remove("hidden");
	backArrow.classList.remove("arrowHidden");
});

// clicking back arrow resets hidden classes to inital values, returning to landing screen
backArrow.addEventListener("click", function(){
	// remove .hidden from icons
	if(!backArrow.classList.contains("hidden")){
		for(var i=0; i<icons.length; i++){
			icons[i].classList.remove("hidden");
		}

		// hide other divs
		backArrow.classList.add("arrowHidden");
		breatheCircle.classList.add("hidden");
		thoughtsDropDown.classList.add("hidden");

		// reset breatheCircle
		breatheCircle.classList.add("inBreath");
		breatheCircle.classList.remove("outBreath");
		clearInterval(interval);
		breatheSound.pause();
		breatheSound.currentTime = 0;
	}
});


// ADD FADING EFFECT
function hideIcons(){
	for(var i=0; i<icons.length; i++){
		icons[i].classList.add("hidden");
	}
}

// TIMES BREATHING ANIMATION
function breathing(){
	setTimeout(breath, 10);
	interval = setInterval(breath, 8000);
}

// TOGGLES BREATH STATES
function breath(){
	breatheCircle.classList.toggle("inBreath");
	breatheCircle.classList.toggle("outBreath");
}
