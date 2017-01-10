var breatheIcon = document.querySelector("#breatheIcon");
var thoughtsIcon = document.querySelector("#thoughtsIcon");
var icons = document.querySelectorAll(".icon");

// hide icons when clicked
breatheIcon.addEventListener("click", function(){
	hideIcons();
});
thoughtsIcon.addEventListener("click", function(){
	hideIcons();
});


// ADD FADING EFFECT
function hideIcons(){
	for(var i=0; i<icons.length; i++){
		icons[i].classList.add("hidden");
	}
}