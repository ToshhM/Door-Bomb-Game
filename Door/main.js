let doorImage1 = document.getElementById('door1') ;
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let bomb = "bomb.png";
let gift="gift.png";
let medal="medal.png";
let numClosedDoors= 3;
let openDoor1;
let openDoor2;
let openDoor3;
const randomChoreDoorGenerator = () => {
  choreDoor=Math.floor(Math.random() * numClosedDoors);
if(choreDoor === 0) {
  openDoor1=bomb;
  openDoor2=gift;
  openDoor3=medal;
    
} else if (choreDoor === 1) { 
  openDoor2=gift;
  openDoor1=bomb;
  openDoor3=medal;
} else { (choreDoor === 2)
  openDoor3=medal;
  openDoor2=gift;
  openDoor1=bomb;
}
}

doorImage1.onclick = () => {
  doorImage1.src=openDoor1;
}
doorImage2.onclick = () => {
  doorImage2.src=openDoor2;
}
doorImage3.onclick = () => {
  doorImage3.src=openDoor3;
}

randomChoreDoorGenerator();