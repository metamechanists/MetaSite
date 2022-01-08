const LOCAL_STORAGE_THEME_NAME = "theme";


function getStoredTheme() {
    if (localStorage.getItem(LOCAL_STORAGE_THEME_NAME) == null) {
        return "dark";
    }
    return localStorage.getItem(LOCAL_STORAGE_THEME_NAME);
}

function setStoredThemeDark() {
    localStorage.setItem(LOCAL_STORAGE_THEME_NAME, "dark");
}

function setStoredThemeLight() {
    localStorage.setItem(LOCAL_STORAGE_THEME_NAME, "light");
}


function setThemeLight() {
    var theme = document.getElementsByTagName('link')[1]; 
    theme.setAttribute('href', 'style/light.css'); 
    document.getElementById("themebutton").innerHTML = "Light Theme";
}

function setThemeDark() {
    var theme = document.getElementsByTagName('link')[1]; 
    theme.setAttribute('href', 'style/dark.css'); 
    document.getElementById("themebutton").innerHTML = "Dark Theme";
}


function toggleTheme() { 
    var theme = document.getElementsByTagName('link')[1]; 
    if (theme.getAttribute('href') == 'style/dark.css') { 
        setThemeLight();
        setStoredThemeLight();
    } else { 
        setThemeDark();
        setStoredThemeDark();
    }
}

function setDefaultTheme() {
    if (getStoredTheme() == "dark") {
        setThemeDark();
    } else {
        setThemeLight();
    }
}


window.onload = setDefaultTheme();