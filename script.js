const player = (token) => {
    return {token: token}
}

const p1 = player("X")
const p2 = player("O")

let currentPlayer = p1


const gameBoard = (() => {
    return {'a1': NaN, 'a2': NaN, 'a3': NaN, 'b1': NaN, 'b2': NaN, 'b3': NaN, 'c1': NaN, 'c2': NaN, 'c3': NaN}
})();





const displayToken = function() {
    const selectedSquare = this.id;

    // Displaying the correct token
    if (currentPlayer.token == "X") {
        const token = document.createElement('div');
        token.innerText = "X";
        token.classList.add('icon');

        const currBlock = document.getElementById(selectedSquare)
        currBlock.appendChild(token);

        gameBoard[selectedSquare] = 'X'
        
        // Change the message to O's turn
        document.querySelector('#x').style.display = "none";
        document.querySelector('#o').style.display = "block";
    } else {
        const token = document.createElement('div');
        token.innerText = "O";
        token.classList.add('icon');

        const currBlock = document.getElementById(selectedSquare)
        currBlock.appendChild(token);

        gameBoard[selectedSquare] = 'O'

        //Change message to X's turn
        document.querySelector('#x').style.display = "block";
        document.querySelector('#o').style.display = "none";
    };

    
    // Switching turns
    if (currentPlayer == p1) {
        currentPlayer = p2
    } else {
        currentPlayer = p1
    }

    // Check if gameOver
    function isGameOver() {
        const winAxes = [
            ['a3','b2','c1'],
            ['a2','b2','c2'],
            ['b1','b2','b3'],
            ['a1','b2','c3'],
            ['a1','a2','a3'],
            ['a3','b3','b3'],
            ['c3','c2','c1'],
            ['c1','b1','a1']
        ]

        for (let i = 0; i < winAxes.length; i++) {
            const first = winAxes[i][0]
            const second = winAxes[i][1]
            const third = winAxes[i][2]
            
            if (gameBoard[third] == gameBoard[first] && gameBoard[third] == gameBoard[second]) {
                const win_msg = document.createElement('div')
                win_msg.innerText = `${gameBoard[first]} has won!`
                win_msg.classList.add('turn')
                document.querySelector('.header').prepend(win_msg)
                
                document.querySelector('#x').style.display = "none";
                document.querySelector('#o').style.display = "none";

                document.querySelector('.btn').style.display = "block"
            } 
        }
    }

    isGameOver();
}

const a1 = document.getElementById("a1")
a1.addEventListener('click', displayToken, {once: true})

const a2 = document.getElementById("a2")
a2.addEventListener('click', displayToken, {once: true})

const a3 = document.getElementById("a3")
a3.addEventListener('click', displayToken, {once: true})

const b1 = document.getElementById("b1")
b1.addEventListener('click', displayToken, {once: true})

const b2 = document.getElementById("b2")
b2.addEventListener('click', displayToken, {once: true})

const b3 = document.getElementById("b3")
b3.addEventListener('click', displayToken, {once: true})

const c1 = document.getElementById("c1")
c1.addEventListener('click', displayToken, {once: true})

const c2 = document.getElementById("c2")
c2.addEventListener('click', displayToken, {once: true})

const c3 = document.getElementById("c3")
c3.addEventListener('click', displayToken, {once: true})



