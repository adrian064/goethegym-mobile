

function openNav() {
    document.getElementById("navigation").style.width = "80%";
    document.getElementById("closebtn").style.width = "100%";
}

function closeNav() {
    document.getElementById("navigation").style.width = 0;
    document.getElementById("closebtn").style.width = 0;
}

function nextSlide() {
    slides[currentSlide].className = "slidepic";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = "current_slidepic";
}

function initMain() {
	var slides = document.querySelectorAll("#slides .slidepic");
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,2000);
}

function open1() {
	document.getElementById("newstile1").addEventListener("click", function(event){
    event.preventDefault()
	});
	document.getElementById("beitrag1").style.width = "100%";
}

function closeCookies() {
	document.getElenemtById("cookies").style.height = 0;
}