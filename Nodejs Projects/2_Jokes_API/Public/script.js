let next = document.getElementById("next")
next.addEventListener("click", nextButton)
let value = ""
document.getElementById("animal").addEventListener("click", async()=>{
    value = "animal"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`

})
document.getElementById("career").addEventListener("click", async()=>{
    value = "career"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})
document.getElementById("celebrity").addEventListener("click", async()=>{
    value = "celebrity"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("dev").addEventListener("click", async()=>{
    value = "dev"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("explicit").addEventListener("click", async()=>{
    value = "explicit"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("fashion").addEventListener("click", async()=>{
    value = "fashion"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("food").addEventListener("click", async()=>{
    value = "food"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("history").addEventListener("click", async()=>{
    value = "history"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("money").addEventListener("click", async()=>{
    value = "money"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("movie").addEventListener("click", async()=>{
    value = "movie"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("music").addEventListener("click", async()=>{
    value = "music"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("political").addEventListener("click", async()=>{
    value = "political"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("religion").addEventListener("click", async()=>{
    value = "religion"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("science").addEventListener("click", async()=>{
    value = "science"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("sport").addEventListener("click", async()=>{
    value = "sport"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

document.getElementById("travel").addEventListener("click", async()=>{
    value = "travel"
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
    document.getElementById("selected").innerHTML = `Selected Category : ${value}`
})

async function nextButton(){
    
    const getdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${value}`)
    const jsonData = await getdata.json()
    document.getElementById("joke").innerHTML = jsonData.value
}