let tempSlider = document.getElementById("temp-slider");
let tempDisplay = document.getElementById("temp-display");

tempSlider.addEventListener("input", function(){
    tempDisplay.innerHTML = this.value + " °C";
});

