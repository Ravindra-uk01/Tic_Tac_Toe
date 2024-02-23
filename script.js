console.log("hello this is from script");

// var player1 = document.createElement("img");
// player1.src = "img/captain-america-seeklogo.com.svg";
// player1.style.width = '106px';
// player1.style.height = '106px';
// var player2 = document.createElement("img");
// player2.src = "img/038-19.svg";
// player2.style.width = '106px';
// player2.style.height = '106px';
// let turn = player1;
// function to change player

let turn = "X";

let isgameover = false;
const changePlayer = () =>{
    //   return turn === player1?player2:player1;
    return turn === "X"?"O":"X";
}

// function to toggle Background
//   const toggleBg = ()=>{
//       if(turn == "x"){
//           let symb1 = document.getElementById('player1');
//           symb1.style.cssText = `
//           background: green;
//           border-radius: 50%;
//         `;
//       }else{
//         let symb2 = document.getElementById('player2');
//         symb2.style.cssText = `
//         background: green;
//         border-radius: 50%;
//       `;
//       }
//   }
//   let togg = toggleBg();
// function to checkWin
    const checkWin = ()=>{
        let boxer = document.getElementsByClassName('boxer');
        let wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        wins.forEach(e=>{
            if((boxer[e[0]].innerText === boxer[e[1]].innerText) && (boxer[e[1]].innerText === boxer[e[2]].innerText) && (boxer[e[0]].innerText !== "" ) && isgameover ==false){
                document.querySelector('.info').innerText = boxer[e[0]].innerText + " won";
                isgameover = true;
            }
        })
    }

// function to play game
const col = document.getElementsByClassName('col');
Array.from(col).forEach(element => {
    let boxer = element.querySelector('.boxer');
    element.addEventListener("click", ()=>{
        if(boxer.innerText === ""){
       //     boxer.appendChild(turn);
            boxer.innerText = turn;
          //  togg = toggleBg();
            turn = changePlayer();
            checkWin();
        }
    })

});

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll(".boxer");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    document.querySelector('.info').innerText = "";
    isgameover = false;
})

