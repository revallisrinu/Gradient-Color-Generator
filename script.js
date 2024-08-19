let displaycolor = document.getElementById("displaycolor");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

// Accessing the color values

color1.addEventListener("input", () => {
    // console.log(color1.value);
});

color2.addEventListener("input", () => {
    // console.log(color2.value);
});

color3.addEventListener("input", () => {
    // console.log(color3.value);
});


let graident = document.getElementById("graident");
graident.addEventListener("change", () => {
    let col1 = color1.value;   
    let col2 = color2.value;
    let col3 = color3.value;

    let output = graident.value;
    if (output === "Linear") {
        displaycolor.style.background = `linear-gradient(to bottom, ${col1}, ${col2}, ${col3})`;
    } else if (output === "Radial") {
        displaycolor.style.background = `radial-gradient(${col1}, ${col2}, ${col3})`;
    } else if (output === "Conical") {
        displaycolor.style.background = `conic-gradient(${col1}, ${col2}, ${col3})`;
    }else{
        displaycolor.style.backgroundColor='none'
    }
});