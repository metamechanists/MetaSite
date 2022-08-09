function importImages(folder) {
    var fs = require('fs');
    var files = fs.readdirSync('gallery');
    return images;
}

function displayImages() {
    let galleryDiv = document.getElementById("gallery-div");
    for (key in images) {
        let value = images[key];
        let img = document.createElement("img");
        let div = document.createElement("div");
        div.setAttribute("class", "gallery-image-div");
        galleryDiv.appendChild(div);
    }
}

const images = importImages(require.context('./gallery', false, /\.(png|jpe?g|svg)$/));
displayImages(images);