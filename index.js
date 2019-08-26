let main = document.getElementById('main')
document.body.removeChild(main)

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.textContent = "YOUR NAME is the champion."
newHeader.id = "victory"
