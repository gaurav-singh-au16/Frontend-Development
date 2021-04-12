let box = document.getElementById("box")
function generateRandom(box){
    let random = Math.floor(Math.random()*16777216).toString(16)
    box.style.backgroundColor = "#"+random
}
function reset(box){
    let random = Math.floor(Math.random()*16777216).toString(16)
    box.style.backgroundColor = "black"
}