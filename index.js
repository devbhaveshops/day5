new Audio("unconditionally.mp3").play();

let text = "Happy Promise Day! I promise to be there for you, always and forever. 💕";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();