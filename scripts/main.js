var nav = 0;
var slideInterval;
var articleNumber;
var slide0 = 5;
var slide1 = 4;
var slide2 = 3;
var slide3 = 2;
var slide4 = 1;
var currentImg = 1;
var child;
var galleryOpen = 0;
var currentArticle;
/*var scrollEventHandler = function() {
  window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);*/

function openNav() {
    if (nav == 0) {
        document.getElementById("navigation").style.marginLeft = 0;
        document.getElementById("closebtn").style.width = "100%";
        nav++
    } else {
        closeNav();
    }
}

function closeNav() {
    document.getElementById("navigation").style.marginLeft = "-80%";
    document.getElementById("closebtn").style.width = 0;
    nav = 0;
}

function nextSlide() {
    slide0++;
    slide1++;
    slide2++;
    slide3++;
    slide4++;
    setSlideTo0();
    document.getElementById("slide" + slide0).style.marginLeft = "-100%";
    document.getElementById("slide" + slide1).style.marginLeft = "-200%";
    document.getElementById("slide" + slide1).style.zIndex = "0";
    document.getElementById("slide" + slide2).style.marginLeft = "200%";
    document.getElementById("slide" + slide3).style.marginLeft = "100%";
    document.getElementById("slide" + slide3).style.zIndex = "2";
    document.getElementById("slide" + slide4).style.marginLeft = 0;
    document.getElementById("dot" + slide4).className = "currentdot";
    document.getElementById("dot" + slide0).className = "otherdot";
}

function setSlideTo0() {
    if (slide0 == 6) {
        slide0 = 1;
    } else if (slide1 == 6) {
        slide1 = 1;
    } else if (slide2 == 6) {
        slide2 = 1;
    } else if (slide3 == 6) {
        slide3 = 1;
    } else if (slide4 == 6) {
        slide4 = 1;
    }
}

function initMain() {
	var slides = document.querySelectorAll("#slides .slidepic");
	slideInterval = setInterval(nextSlide,5000);
    articleNumber = document.getElementById("tilewrapper").childElementCount;
    /*nameLength();*/
}



function openarticle(nummer) {
	/*document.getElementById("newstile1").addEventListener("click", function(event){
    event.preventDefault()
	});*/
    currentArticle = nummer;
	document.getElementById("beitrag" + nummer).style.marginLeft = 0;
    document.getElementById("navicon").style.display = "none";
    document.getElementById("closeicon").style.display = "block";
    window.scrollTo(0,0);
}

function closeAll() {
    if (galleryOpen == 0){
        for (articleCounter = 0; articleCounter < articleNumber; articleCounter++) {
            document.getElementById("beitrag" + (articleCounter + 1)).style.marginLeft = "100%";
        }
        document.getElementById("navicon").style.display = "block";
        document.getElementById("closeicon").style.display = "none";
    } else if (galleryOpen == 1) {
        closeGallery(currentArticle);
    }
}

function closeCookies() {
	document.getElementById("cookies").style.height = 0;
}

/*function nameLength() {
    var txt = document.getElementById("benutzername").length;
    var txtLength = txt.length
    if (txtLength > 10) {
        document.getElementById("logout").id = "logoutsmall";
        document.getElementById("logouticon").id = "logouticonsmall";
        document.getElementById("newstile1").innerHTML = "test";
    }
}*/

function zuInhalt(nummer) {
    document.getElementById("inhalt" + nummer).style.marginLeft = "5%";
    document.getElementById("gallerie" + nummer).style.marginLeft = "105%";
    document.getElementById("dividerunten" + nummer).style.marginLeft = 0;
}

function zuGallerie(nummer) {
    document.getElementById("inhalt" + nummer).style.marginLeft = "-100%";
    document.getElementById("gallerie" + nummer).style.marginLeft = "5%";
    document.getElementById("dividerunten" + nummer).style.marginLeft = "calc(50% - 2px)";
}

/*function noClickEvent() {
    main.addEventListener("click",reset,true);
}*/

function imgNumber(articlenr) {
    return document.getElementById("gallerie" + articlenr).childElementCount;
}

function openGallery(article,img) {
    galleryOpen = 1;
    currentImg = img;
    document.getElementById("galleriebg" + article).style.height = "100%";
    document.getElementById("galleriebg" + article).style.marginTop = 0;
    document.getElementById("gallerie" + article).style.marginLeft = 0;
    if (img > 1) {
        for (a = 1; a < (img + 1); a++) {
            document.getElementById("gimg" + article + a).className = "gimgl";
        }
        document.getElementById("gimg" + article + img).className = "gimgm";
    }
}

function closeGallery(article) {
    document.getElementById("galleriebg" + article).style.height = 0;
    document.getElementById("galleriebg" + article).style.marginTop = "50%";
    document.getElementById("gallerie" + article).style.marginLeft = "100%";
    if (currentImg > 1) {
        for (a = currentImg; a > 1; a--) {
            galleryScrollLeft(article);
        }
    }
    galleryOpen = 0;
}

function galleryScrollLeft(article) {
    if (currentImg > 1) {
        document.getElementById("gimg" + article + currentImg).className = "gimgr";
        document.getElementById("gimg" + article + (currentImg - 1)).className = "gimgm";
        currentImg--;
    }
}

function galleryScrollRight(article) {
    if (currentImg < imgNumber(article)) {
        document.getElementById("gimg" + article + currentImg).className = "gimgl";
        document.getElementById("gimg" + article + (currentImg + 1)).className = "gimgm";
        currentImg++;
    }
}