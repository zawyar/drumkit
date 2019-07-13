function makeSound(key) {
    let Promise;
    switch (key) {
        case "w":
            Promise = new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            Promise = new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            Promise = new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            Promise = new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            Promise = new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            Promise = new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            Promise = new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }

}
function animate(key) {
    let button = document.querySelector("."+ key);
    button.className += " pressed";
    setTimeout(function () {
        button.className = "";
        button.className = key + " drum";
    },100)
}
for (let i = 0; i<7; i++){
    const w = document.querySelectorAll("button");
    w[i].addEventListener("click",function () {
       makeSound(this.innerText);
       animate(this.innerText);
    } );
}
document.addEventListener("keypress",function (event) {
   makeSound(event.key);
   animate(event.key);


});