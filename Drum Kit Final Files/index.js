//button pressed
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

    });
};
//key pressed
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
        case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

        case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

        case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

        case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

        case "l":
                 var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        default:
            console.log(buttonInnerHtml);
    }
}



/*function HouseKeeper ( name, age,job ){
    this.name = name;
    this.age = age;
    this.job = job;
}
var housekeeper1 = new HouseKeeper("b",16,["lr","k"]);
var housekeeper2 = new HouseKeeper("c",17,["BR","OO"]);
 console.log(housekeeper2.age);
 */


/*function  add (a,b){

    var hello =  a / b;
    
 console.log(hello);
}
add(4,9);
// we need to call function after closing the function
 */
