function crackGlass(ID, x, y) {
    const canvas = document.getElementById(ID);
    const context = canvas.getContext("2d");
    
    const glass = document.createElement("img");
    glass.src = "/Images/GlassBroken.png";

    const rect = canvas.getBoundingClientRect();

    glass.onload = function () {

        context.drawImage(glass, 0, 0, glass.width, glass.height, x - rect.left - 75, y - rect.top - 75, 150, 150);
    };
}

function prepareCanvas(ID) {
    const canvas = document.getElementById(ID);
    const context = canvas.getContext("2d");

    const willem = document.createElement("img");
    willem.src = "/Images/Willem.jpg";

    willem.onload = function () {
        canvas.width = willem.width;
        canvas.height = willem.height;
        context.drawImage(willem, 0, 0);
    };
}