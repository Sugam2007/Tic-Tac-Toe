let boxes = document.querySelectorAll(".button");
let reset = document.querySelector("#btn");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("button clicked");
        if (turn0 === true) {
            button.innerText = "O";
            button.classList.add("o");
            turn0 = false;
        } else {
            button.innerText = "X";
            button.classList.add("x");
            turn0 = true;
        }
        button.disabled = true;
        checkwinner();

    });
});
const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes = () => {
    for (let button of boxes) {
        button.disabled = false;
        button.innerText = "";
        button.classList.remove("o", "x");
    }
}
const disableboxes = () => {
    for (let button of boxes) {
        button.disabled = true;
    }
}
const showwinner = (winner) => {

    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () => {

    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3 && val3 == val1) {
                console.log("winner!", val1);
                showwinner(val1);


            }

        }




    }
};
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
