var find_btn = document.getElementById("find")
var map_btn = document.getElementById("map")
var print_location = document.getElementById("location")

function myLocation(position){
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude

    print_location.innerText = "Latitude is "+latitude+", Longitude is "+ longitude 

    
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(myLocation)
}

function locationInMap(){
    navigator.geolocation.getCurrentPosition(mapLocation)
    
}

function mapLocation(position){
    var latitude_value = position.coords.latitude
    var longitude_value = position.coords.longitude
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude_value},${longitude_value}`)
}
find_btn.addEventListener("click", getLocation)
map_btn.addEventListener("click", locationInMap)