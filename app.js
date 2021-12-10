// grab elements from HTML file

const grabButton = document.getElementById("btn")
const GrabjokeContainer = document.getElementById('jokeContainer')
const grabh1Tag = document.getElementById("h1Tag")
const grabWrapperApp = document.getElementById("wrapperApp")
const grabCopyJoke = document.getElementById("copyJoke")

// Grab random dad joke API using Axios tool

const getDadJoke = async () => {
    const config = {headers:{Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)

    let api = res.data.joke
    H1 = document.createElement('h1')
    grabh1Tag.innerText = `${api}...🤣`
    GrabjokeContainer.appendChild(H1)
} 

// Copy random joke to clipboard for sharing

grabCopyJoke.addEventListener('click', ()=> {
    handleCopyJoke()
})

function handleCopyJoke() {
    const cb = navigator.clipboard;
    cb.writeText(grabh1Tag.innerText).then(() => alert('Joke has been copied to the clipboard. Feel free to share!'));
  }






// call getDadJoke function

// getDadJoke()

// Add event listen to joke generated

grabButton.addEventListener('click', () => {
    grabh1Tag.style.visibility ="visible"
    grabWrapperApp.style.visibility ="visible"
    grabCopyJoke.style.visibility = "visible"
    getDadJoke()
    
})

