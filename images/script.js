function setTheme(mode){
    if(mode == 'blue'){
        document.getElementById('colour-theme').href='default.css'
    }
    if(mode == 'white'){
        document.getElementById('colour-theme').href='images/white.css'
    }
    if(mode == 'green'){
        document.getElementById('colour-theme').href='images/green.css'
    }
    if(mode == 'dark'){
        document.getElementById('colour-theme').href='images/dark.css'
    }  
    
    localStorage.setItem('theme', mode)
}

// Function to load the saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    }
}
// Event listener for theme dots
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();

    const themeDots = document.getElementsByClassName("theme-dot");
    for (let dot of themeDots) {
        dot.addEventListener("click", function () {
            const mode = this.getAttribute("data-mode");
            setTheme(mode);
        });
    }
});

