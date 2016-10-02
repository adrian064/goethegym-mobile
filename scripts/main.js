var nav = 0;
var slides;
var currentSlide = 0;
var slideInterval;

function openNav() {
    if (nav == 0) {
    document.getElementById("navigation").style.width = "80%";
    document.getElementById("closebtn").style.width = "100%";
    nav = nav++
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("navigation").style.width = 0;
    document.getElementById("closebtn").style.width = 0;
    nav = 0;
}

function nextSlide() {
    if (currentSlide == 0) {
        document.getElementById("slide1").style.marginLeft = "-100%";
        document.getElementById("slide4").style.zIndex = "-1";
        document.getElementById("slide2").style.marginLeft = 0;
        document.getElementById("slide3").style.marginLeft = "100%";
        document.getElementById("slide2").style.zIndex = "2";
        document.getElementById("dot2").className = "currentdot";
        document.getElementById("dot1").className = "otherdot";
        currentSlide = 1;
    } else if (currentSlide == 1) {
        document.getElementById("slide2").style.marginLeft = "-100%";
        document.getElementById("slide5").style.zIndex = "-1";
        document.getElementById("slide3").style.marginLeft = 0;
        document.getElementById("slide4").style.marginLeft = "100%";
        document.getElementById("slide3").style.zIndex = "2";
        document.getElementById("dot3").className = "currentdot";
        document.getElementById("dot2").className = "otherdot";
        currentSlide = 2;
    } else if (currentSlide == 2) {
        document.getElementById("slide3").style.marginLeft = "-100%";
        document.getElementById("slide1").style.zIndex = "-1";
        document.getElementById("slide4").style.marginLeft = 0;
        document.getElementById("slide5").style.marginLeft = "100%";
        document.getElementById("slide4").style.zIndex = "2";
        document.getElementById("dot4").className = "currentdot";
        document.getElementById("dot3").className = "otherdot";
        currentSlide = 3;
    } else if (currentSlide == 3) {
        document.getElementById("slide4").style.marginLeft = "-100%";
        document.getElementById("slide2").style.zIndex = "-1";
        document.getElementById("slide5").style.marginLeft = 0;
        document.getElementById("slide1").style.marginLeft = "100%";
        document.getElementById("slide5").style.zIndex = "2";
        document.getElementById("dot5").className = "currentdot";
        document.getElementById("dot4").className = "otherdot";
        currentSlide = 4;
    } else if (currentSlide == 4) {
        document.getElementById("slide5").style.marginLeft = "-100%";
        document.getElementById("slide3").style.zIndex = "-1";
        document.getElementById("slide1").style.marginLeft = 0;
        document.getElementById("slide2").style.marginLeft = "100%";
        document.getElementById("slide1").style.zIndex = "2";
        document.getElementById("dot1").className = "currentdot";
        document.getElementById("dot5").className = "otherdot";
        currentSlide = 0;
    } else {
        currentSlide = 0;
    }
}

function initMain() {
	var slides = document.querySelectorAll("#slides .slidepic");
	slideInterval = setInterval(nextSlide,5000);
}

function open1() {
	/*document.getElementById("newstile1").addEventListener("click", function(event){
    event.preventDefault()
	});*/
	document.getElementById("beitrag1").style.width = "100%";
    document.getElementById("navicon").style.display = "none";
    document.getElementById("closeicon").style.display = "block";
    window.scrollTo(0,0);
}

function closeAll() {
    document.getElementById("beitrag1").style.width = 0;
    document.getElementById("navicon").style.display = "block";
    document.getElementById("closeicon").style.display = "none";
}

/*function closeCookies() {
	document.getElenemtById("cookies").style.height = 0;
}*/

/*function nameLength() {
    var txt = document.getElementById("benutzername");
    var txtLength = txt.length
    if (txtLength > 10) {
        document.getElementsByClassName("logout").className = "logoutsmall";
        document.getElementsByClassName("logouticon").className = "logouticonsmall";
    }
}*/

function zuInhalt1() {
    document.getElementById("inhalt1").style.display = "block";
    document.getElementById("gallerie1").style.display = "none";
    document.getElementById("dividerunten1").style.float = "left";
}

function zuGallerie1() {
    document.getElementById("inhalt1").style.display = "none";
    document.getElementById("gallerie1").style.display = "inline";
    document.getElementById("dividerunten1").style.float = "right";
}