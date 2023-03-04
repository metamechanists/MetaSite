function toggleDiv(divName) {
    var collapsibleDiv = document.getElementById(divName);
    if (collapsibleDiv.style.display == "block") {
        collapsibleDiv.style.display = "none";
    } else {
        collapsibleDiv.style.display = "block";
    }
}
function flipIcons(iconName) {
    var collapsibleIcon = document.getElementById(iconName);
    if (collapsibleIcon.style.transform == "rotate(90deg)") {
        collapsibleIcon.style.transform = "rotate(0deg)";
    } else {
        collapsibleIcon.style.transform = "rotate(90deg)";
    }
}

function toggleCollapsible(name) {
    toggleDiv(name + "-div");
    flipIcons(name + "-icon");
}