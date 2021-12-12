// grab elements from HTML file
const grabTopH1Tag = document.getElementById("darkH1")
const grabButton = document.querySelector(".btn")
const grabjokeContainer = document.querySelector('.jokeContainer')
const grabh1Tag = document.querySelector(".h1Tag")
const grabWrapperApp = document.querySelector(".wrapperApp")
const grabCopyJoke = document.querySelector(".copyJoke")
const grabCopyButton = document.querySelector(".copybtn")
const grabDarkButton = document.querySelector(".darkMode")
const grabSpan = document.getElementById('newColor')
const loader = document.querySelector(".loading")


// Grab random dad joke API using Axios tool

const getDadJoke = async () => {

    displayLoading()
    const config = {headers:{Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)

    let api = res.data.joke
    H1 = document.createElement('h1')
    hideLoading()
    grabh1Tag.innerText = `${api}...🤣`
    grabjokeContainer.appendChild(H1)
} 

// show loading 
function displayLoading () {
    loader.classList.add("loading")
    // stop loading after period of time
    setTimeout(()=> {
        loader.classList.remove("loading")
    }, 5000);
}


// hiding loading 
function hideLoading () {
    loader.classList.remove("loading")
}

// Copy random joke to clipboard for sharing
grabCopyButton.addEventListener('click', ()=> {
    handleCopyJoke()
})

function handleCopyJoke() {
    const cb = navigator.clipboard;
    cb.writeText(grabh1Tag.innerText).then(() => alert('Joke has been copied. Feel free to share!'));
  }


// Add event listen to joke generated
grabButton.addEventListener('click', () => {
    grabh1Tag.style.visibility ="visible"
    grabWrapperApp.style.visibility ="visible"
    grabCopyJoke.style.visibility = "visible"
    getDadJoke()
    displayLoading()
    
})


// Change to Dark Theme
grabDarkButton.addEventListener('click',() => {
    grabTopH1Tag.classList.toggle("darkBanger")
    document.body.classList.toggle("darkBody")
    grabSpan.classList.toggle("darkSpan")
    grabh1Tag.classList.toggle("darkH1Tag")
    grabWrapperApp.classList.toggle("darkWrapperApp")
    grabButton.classList.toggle("darkBtn")
    grabCopyButton.classList.toggle("darkCopyBtn")
    grabjokeContainer.classList.toggle('darkJokeContainer')
    grabDarkButton.classList.toggle("darkDarkMode")

    if(grabDarkButton.innerText === "DARK THEME") {
        grabDarkButton.innerText = "LIGHT THEME"
    }   else if (grabDarkButton.innerText === "LIGHT THEME") {
            grabDarkButton.innerText = "DARK THEME"
        }

})
