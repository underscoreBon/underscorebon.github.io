// Dropdown logic from w3schools
var coll = document.getElementsByClassName("dropdown");
var i;  
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
	this.classList.toggle("ddactive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
    	content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }});
}

// Menu Logic
function openNav() {
  const navbar = document.getElementById("navbar-more");
  navbar.style.width = "100%";
  navbar.style.left = "0%";
}

function closeNav() {
 const navbar = document.getElementById("navbar-more");
  navbar.style.width = "0%";
  navbar.style.left = "100%";

}

// Toggles
function toggleTheme(){
	const savedTheme = localStorage.getItem('bonsitetheme');

	// SYSTEM -> DARK -> LIGHT
	if (savedTheme == "dark"){
	  	window.localStorage.setItem("bonsitetheme", "light");
	} else if (savedTheme == "light") { 
  		window.localStorage.setItem("bonsitetheme", "system");
	} else {
	  	window.localStorage.setItem("bonsitetheme", "dark");
	};
	updateThemePref();
}

function toggleAnim() {
  const element = document.querySelector('body');
  
  if (element.style.animationPlayState == "paused") {
  	window.localStorage.setItem("bonsitebg", "on");
  	element.style.animationPlayState = "running";
  } else {
  	window.localStorage.setItem("bonsitebg", "off");
  	element.style.animationPlayState = "paused";
  };
  updateBGPref();
}

// Update Preferences..
function updateBGPref(){
	const element = document.querySelector('body');
	const bgElement = document.getElementById("siteBGToggle");
	var bgMove = window.localStorage.getItem("bonsitebg");

	if (!bgMove){
    	window.localStorage.setItem("bonsitebg", "on");
	};

	var bgMove = window.localStorage.getItem("bonsitebg");

	if (bgMove == "off") {
  		element.style.animationPlayState = "paused";
    	bgElement.innerHTML = "Moving BG: OFF";
	} else {
  		element.style.animationPlayState = "running";
    	bgElement.innerHTML = "Moving BG: ON";
	};
}

function updateThemePref(){
	const themeElement = document.getElementById("siteThemeToggle");
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	var savedTheme = localStorage.getItem('bonsitetheme');

	// null protection
	if (!savedTheme){  
    	window.localStorage.setItem("bonsitetheme", "system");
	}
    
	var savedTheme = localStorage.getItem('bonsitetheme');
	// SYSTEM -> DARK -> LIGHT
	if (savedTheme == "dark"){
    	themeElement.innerHTML = "Theme: DARK";
	  	setTheme("dark");
	} else if (savedTheme == "light") { 
    	themeElement.innerHTML = "Theme: LIGHT";
  		setTheme("light");
    } else {
        themeElement.innerHTML = "Theme: SYSTEM";
        if (systemPrefersDark){
          setTheme("dark");
        } else {
          setTheme("light");
        };
    }
}

// Yes, I'm overriding them.
function setTheme(theme){
	if (theme == "dark") {
        document.documentElement.style.cssText = `	
        --main-primary-lighter: #c37ed9;
        --main-primary-light: #911cb8;
        --main-primary: #32096b;	
        --main-primary-dark: #0e0438;
        --main-secondary: #26ffbe;
        
        --dropdown-shadow: #0e04381f;

        --text-normal: #f6dbff;
        --text-link: #00ff99;
        --text-hover: #4affe1;
        --text-navbar-normal: #f6dbff;
        --text-navbar-hover: #000000;

        --overlay-primary: rgba(0,0,0, 0.9);
        --overlay-text: #818181;
        --overlay-text-hover: #dedede;

        --tile-light: #643869;
        --tile-dark: #4a1d61;`;
    } else {
        document.documentElement.style.cssText = `
        --main-primary-lighter: #edbfff;
        --main-primary-light: #d39ee8;
        --main-primary: #720f8b;	
        --main-primary-dark: #1a0749;
        --main-secondary: #26ffbe;
        
        --dropdown-shadow: #1a07491f;

        --text-normal: #000000;
        --text-link: #007db3;
        --text-hover: #19e8ff;
        --text-navbar-normal: #ffffff;
        --text-navbar-hover: #000000;

        --overlay-primary: rgba(0,0,0, 0.9);
        --overlay-text: #818181;
        --overlay-text-hover: #dedede;

        --tile-light: #ffd7fd;
        --tile-dark: #b800d4;`;
	};
}


// SYSTEM theme functionality since i'm overwriting the :root class
var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function handleThemeChange(event) {
  const savedTheme = localStorage.getItem('bonsitetheme');
  
  if (savedTheme == "system") {
  	if (event.matches) {
    	setTheme("dark");
  	} else {
   	 	setTheme("light");
  	}
  }
  
}

// Event
systemPrefersDark.addEventListener('change', handleThemeChange);

// Run on Startup
updateBGPref();
updateThemePref();