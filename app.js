// grab elements from HTML file

const grabTopH1Tag = document.getElementById("darkH1")
const grabButton = document.getElementById("btn")
const grabjokeContainer = document.getElementById('jokeContainer')
const grabh1Tag = document.getElementById("h1Tag")
const grabWrapperApp = document.getElementById("wrapperApp")
const grabCopyJoke = document.getElementById("copyJoke")
const grabCopyButton = document.getElementById("copybtn")
const grabDarkButton = document.getElementById("darkMode")
const grabSpan = document.getElementById('newColor')


// Grab random dad joke API using Axios tool

const getDadJoke = async () => {
    const config = {headers:{Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)

    let api = res.data.joke
    H1 = document.createElement('h1')
    grabh1Tag.innerText = `${api}...🤣`
    grabjokeContainer.appendChild(H1)
} 

// Copy random joke to clipboard for sharing

grabCopyButton.addEventListener('click', ()=> {
    handleCopyJoke()
})

function handleCopyJoke() {
    const cb = navigator.clipboard;
    cb.writeText(grabh1Tag.innerText).then(() => alert('Joke has been copied to the clipboard. Feel free to share!'));
  }


// Add event listen to joke generated

grabButton.addEventListener('click', () => {
    grabh1Tag.style.visibility ="visible"
    grabWrapperApp.style.visibility ="visible"
    grabCopyJoke.style.visibility = "visible"
    getDadJoke()
    
})



// Change Theme
grabDarkButton.addEventListener('click',() => {
 grabTopH1Tag.style.color = "white"
 grabSpan.style.color = "plum"
 document.body.style.backgroundColor = "#292929"
 grabWrapperApp.style.backgroundColor = "black"
 grabWrapperApp.style.boxShadow = "4px 3px 8px 1px #131212";
 grabh1Tag.style.color = "white"
 grabjokeContainer.style.backgroundColor = "#292929"
 grabButton.style.backgroundColor ="#1cdac6"
 grabButton.style.color ="white"
 grabCopyButton.style.backgroundColor ="plum"
 grabCopyButton.style.color ="white"

})
