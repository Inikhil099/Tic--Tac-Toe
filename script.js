const textdiv = document.querySelectorAll(".text");
const result = document.querySelector(".result");
const info = document.querySelector(".info");
const reset = document.querySelector(".reset");
const first = document.querySelectorAll(".text")[0];
const second = document.querySelectorAll(".text")[1];
const third = document.querySelectorAll(".text")[2];
const fourth = document.querySelectorAll(".text")[3];
const fifth = document.querySelectorAll(".text")[4];
const sixth = document.querySelectorAll(".text")[5];
const seventh = document.querySelectorAll(".text")[6];
const eighth = document.querySelectorAll(".text")[7];
const ninth = document.querySelectorAll(".text")[8];

const condition1 =
  (first.innerHTML == "X" &&
    second.innerHTML == "X" &&
    third.innerHTML == "X") ||
  (fourth.innerHTML == "X" &&
    fifth.innerHTML == "X" &&
    sixth.innerHTML == "X") ||
  (seventh.innerHTML == "X" &&
    eighth.innerHTML == "X" &&
    ninth.innerHTML == "X") ||
  (first.innerHTML == "X" &&
    fourth.innerHTML == "X" &&
    seventh.innerHTML == "X") ||
  (second.innerHTML == "X" &&
    fifth.innerHTML == "X" &&
    eighth.innerHTML == "X") ||
  (third.innerHTML == "X" &&
    sixth.innerHTML == "X" &&
    ninth.innerHTML == "X") ||
  (third.innerHTML == "X" &&
    fifth.innerHTML == "X" &&
    seventh.innerHTML == "X") ||
  (fifth.innerHTML == "X" && fifth.innerHTML == "X" && ninth.innerHTML == "X");


const condition2 =
  (first.innerHTML == "0" &&
    second.innerHTML == "0" &&
    third.innerHTML == "0") ||
  (fourth.innerHTML == "0" &&
    fifth.innerHTML == "0" &&
    sixth.innerHTML == "0") ||
  (seventh.innerHTML == "X" &&
    eighth.innerHTML == "0" &&
    ninth.innerHTML == "0") ||
  (first.innerHTML == "0" &&
    fourth.innerHTML == "0" &&
    seventh.innerHTML == "0") ||
  (second.innerHTML == "0" &&
    fifth.innerHTML == "0" &&
    eighth.innerHTML == "0") ||
  (third.innerHTML == "0" &&
    sixth.innerHTML == "0" &&
    ninth.innerHTML == "0") ||
  (third.innerHTML == "0" &&
    fifth.innerHTML == "0" &&
    seventh.innerHTML == "0") ||
  (fifth.innerHTML == "0" && fifth.innerHTML == "X" && ninth.innerHTML == "0");

let turn = 0;

function write(e) {
  if (turn == 0) {
    e.target.innerHTML = "0";
    turn += 1;
    info.innerText = "X's Turn";
    e.target.removeEventListener("click", write, false);
    check();
  } else if (turn == 1) {
    e.target.innerHTML = "X";
    turn -= 1;
    info.innerText = "0's Turn";
    e.target.removeEventListener("click", write, false);
    check();
  }
}

function check() {
  if (condition1 == true) {
    info.innerText = "Game Over !";
    result.innerHTML = "X WON";
    textdiv.forEach((button) => {
      button.removeEventListener("click", write, false);
    });
  }

  if (condition1 == false && condition2 == false && first.innerHTML != '' && second.innerHTML != '' && third.innerHTML != '' && fourth.innerHTML != '' && fifth.innerHTML != '' && sixth.innerHTML != '' && seventh.innerHTML != '' && eighth.innerHTML != '' && ninth.innerHTML != '' ) {
    result.innerText = "It's a TIE !"
    
  } 
  
  else if (condition2 == true) {
    info.innerText = "Game Over !";
    result.innerHTML = "0 WON";
    textdiv.forEach((button) => {
      button.removeEventListener("click", write, false);
    });
  }

  // else{
  //     result.innerText = "It's a TIE"
  // }
}

textdiv.forEach((button) => {
  button.addEventListener("click", write);
});

reset.addEventListener("click", () => {
  window.location.reload();
});

// setTimeout(() => {
//     result.innerText = "its a tie"
// }, 0);
