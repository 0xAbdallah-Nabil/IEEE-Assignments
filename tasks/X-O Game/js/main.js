let array = [[1,2,3],[4,5,6],[7,8,9]];
let square = document.querySelectorAll(".square");
let result = document.querySelector("#result");
let player1 = "X";
let player2 = "O";
let player = player1;
let count = 0;
let res=false;

if (count === 0) {
    result.textContent = "X-O Game";
    console.log("X-O Game");
}

result.addEventListener("click", () => {
    array = [[1,2,3],[4,5,6],[7,8,9]];
    count = 0;
    res=false;
    result.textContent = "X-O Game";
    result.style.backgroundColor = "red";
    window.location.reload();
    square.forEach(item => {
        item.textContent = "";
        item.setAttribute(player1,'');
        item.setAttribute(player2,'');
        item.style.backgroundColor = "gray";
    })
});

square.forEach(item => {
    item.addEventListener("click", () => {
        if (res) return;
        row=Math.floor(item.id/3);
        col=item.id%3 ;
        if(item.textContent === "" ) 
        {
            item.innerHTML = player;
            if (player === player1) {
                player = player2;
                count++;
                result.textContent = "O - turn";
                item.style.backgroundColor = "red";
                item.setAttribute(player1,'');
                array[row][col] = player1;
            } else {
                player = player1;
                count++;
                result.textContent = "X - turn";
                item.setAttribute(player2,'');
                item.style.backgroundColor = "green";   
                array[row][col] = player2;
            }
        }
        res=check();
        if (count === 9 && !res) {
            result.innerHTML = "Draw";
            console.log(array);
        }
    });
});

function check() {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] === array[i][1] && array[i][0] === array[i][2]) {
            result.textContent = array[i][0] + " won !!!!!!!!!";
            console.log(array);
            result.style.backgroundColor = "yellow";
            return true;
        }
        if (array[0][i] === array[1][i] && array[0][i] === array[2][i]) {
            result.textContent = array[0][i] + " won !!!!!!!!!";
            console.log(array);
            result.style.backgroundColor = "yellow";
            return true;
        }
    }
    if (array[0][0] === array[1][1] && array[0][0] === array[2][2]) {
        result.textContent = array[0][0] + " won !!!!!!!!!";
        console.log(array);
        result.style.backgroundColor = "yellow";
        return true;
    }
    if (array[0][2] === array[1][1] && array[0][2] === array[2][0]) {
        result.textContent = array[0][2] + " won !!!!!!!!!";
        console.log(array);
        result.style.backgroundColor = "yellow";
        return true;
    }
}