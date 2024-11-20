const textdiv = document.querySelectorAll(".text");
const result = document.querySelector(".result");
const info = document.querySelector(".info");
const reset = document.querySelector(".reset");
let arr = new Array(9).fill(null);

let turn = "0";
info.innerHTML = `${turn}'s Turn`;

function write(e) {
  e.target.innerHTML = turn;
  arr[e.target.id] = turn;
  check();
  turn = turn == "X" ? "0" : "X";
}

function check() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    info.innerText = "Game Over !";
    result.innerHTML = `${turn}  WON`;
    textdiv.forEach((button) => {
      button.removeEventListener("click", write, false);
    });
  }
  if (
    !arr.some((e) => {
      return e == null;
    })
  ) {
    result.innerText = "It's a TIE !";
  }
}

textdiv.forEach((button) => {
  button.addEventListener("click", write);
});

reset.addEventListener("click", () => {
  window.location.reload();
});
