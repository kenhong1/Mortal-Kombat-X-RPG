console.log("hello"); 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var scorpionChosen = false; 
var scorpionFight = null;
var subZeroChosen = false;
var subzeroFight = null;
var liukangChosen = false;
var liukangFight = null;

var playerOneButton = null; 
var playerOnePick = false;
var playerOneBlock = null;
var playerOneAttack = null;

var playerTwoAttack = null; 
var playerTwoBlock = null 
var playerTwoPick = false;


var yourFighterSelect = document.getElementById("yourFighterSelect")
var myFighterSelect = document.getElementById("myFighterSelect")
var roundOneFight = document.getElementById("roundOneFight"); 
var liuKangAudio = document.getElementById("liuKangAudio"); 
var subZeroAudio = document.getElementById("subZeroAudio");
var scorpionAudio = document.getElementById("scorpionAudio");
var attackAudio = document.getElementById("attackAudio");
var blockAudio = document.getElementById("defendAudio");
var winAudio = document.getElementById("winAudio"); 
var drawAudio = document.getElementById("drawAudio");


var characterSelected = []; 



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~reset~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

var lk = document.getElementById("liuKangFighterBox");


var hide = function (elem) {
    elem.style.display = 'none';
};


function resetBtn(){
    location.reload();
}


document.getElementById("resetBtn").addEventListener("click",function(){
    resetBtn(); 
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End game conditions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function endGame(){

    if (characterSelected[0].hp <= 0 && characterSelected[1].hp > 0){
            myFighterSelect.style.borderColor = "red" 
            yourFighterSelect.style.borderColor = "green"
        
        winAudioPlay(); 
        playerTwoWin(); 
        playerTwoClearDefend(); 
        playerTwoClearKombat();
        playerOneClearKombat(); 
        playerOneClearDefend(); 
        clearFightText()
        
        document.getElementById("characterSelected[1]").remove(); 
        // display.document.getElementById
        //removing box from the battle arena 
        
        
    console.log("player 2 wins")
    } else if (characterSelected[0].hp > 0 && characterSelected[1].hp <= 0) {
                yourFighterSelect.style.borderColor = "red" 
                myFighterSelect.style.borderColor = "green"
        
        winAudioPlay();
        playerOneWin(); 
        playerTwoClearDefend(); 
        playerTwoClearKombat();
        playerOneClearKombat(); 
        playerOneClearDefend(); 
        clearFightText()
        
        
        //removing box from the battle arena 
        document.getElementById("characterSelected[0]").remove(); 
        
    console.log("player 1 wins")
    } else if (characterSelected[0].hp === 0 && characterSelected[1].hp === 0 ){
            yourFighterSelect.style.borderColor = "yellow"
            myFighterSelect.style.borderColor = "yellow"
    console.log("draw")
        drawAudioPlay();
        
    }
    
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ audio for game ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function roundOneFightAudioPlay(){
    roundOneFight.play();  
    console.log("r1 fight audio")
};
function liuKangAudioPlay(){
    liuKangAudio.play(); 
    console.log("liukang Audio")
};
function subZeroAudioPlay(){
    subZeroAudio.play();
    console.log("subZero audio")
};
function scorpionAudioPlay(){
    scorpionAudio.play();
    console.log("scorpion audio")
};

function attackAudioPlay(){
    attackAudio.play();
    console.log("this is attack audio")
};

function defendAudioPlayer(){
    defendAudio.play();
    console.log("this is a defend")
};

function winAudioPlay(){
    winAudio.play(); 
    console.log("this is a win")
};

function drawAudioPlay(){
    drawAudio.play(); 
    console.log("this is a draw")
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEXT INPUT AND OUTPUT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function selectFighterText(){
    document.getElementById("selectYourFighter").textContent = "Choose Your Fighter";
    console.log("Choose Your Fighter")
};

function clearSelectFighter(){
    document.getElementById("selectYourFighter").innerHTML = "";
}

function playerOneKombat(){
    document.getElementById("playerOneKombat").textContent = "Player One Chose Attack"; 
    console.log("Player One Chose Attack")
};

function playerOneClearKombat(){
    document.getElementById("playerOneKombat").innerHTML = "";
};

function playerTwoKombat(){
    document.getElementById("playerTwoKombat").textContent = "Player Two Chose Attack"; 
    console.log("Player Two Chose Attack")
};

function playerTwoClearKombat(){
    document.getElementById("playerTwoKombat").innerHTML = "";
};

function playerOneDefend(){
    document.getElementById("playerOneDefend").textContent = "Player One Chose To Defend";
    console.log("Player One Defend")
};

function playerOneClearDefend(){
    document.getElementById("playerOneDefend").innerHTML = "";
};

function playerTwoDefend(){
    document.getElementById("playerTwoDefend").textContent = "Player Two Chose To Defend";
    console.log("Player Two Defend")
};

function playerTwoClearDefend(){
    document.getElementById("playerTwoDefend").innerHTML = "";
};

function fightText(){
    document.getElementById("kombat").innerHTML = "Fight!";
};

function clearFightText(){
    document.getElementById("kombat").innerHTML = "";
};

function playerOneWin(){
    document.getElementById("playerOneWins").innerHTML = "PLAYER 1 WINS!";
};

function playerTwoWin(){
    document.getElementById("playerTwoWins").innerHTML = "PLAYER 2 WINS!";
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LiuKang object~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
var liukangFighterObj = {
    player: 0, 
    name: "Liu Kang", 
    hp: 100, 
    damage: 35,
    block: 20,
    alive: true,

    attacks: function(){
        if (liukangFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 
                    attackAudioPlay(); 
                    playerOneKombat(); 
                    playerTwoClearDefend();
                    playerTwoClearKombat();
                    playerOneClearDefend(); 
                    clearFightText();
                    
                

        }
        else if (liukangFighterObj.player === 2 ){
            playerTwoAttack = true; 
                console.log(playerTwoAttack, "p2 chose attck")
                    attackAudioPlay();
                    playerTwoKombat();
                    playerOneClearKombat();
                    playerOneClearDefend(); 
                    playerTwoClearDefend(); 
                    clearFightText();
            

            
        }
        },              
    defend: function(){
        if (liukangFighterObj.player === 1){
            playerOneBlock = true; 
                console.log(playerOneBlock, "p1 chose block")
                    defendAudioPlayer();
                    playerOneDefend();
                    playerTwoClearKombat();
                    playerTwoClearDefend(); 
                    clearFightText();
           
        }
        else if(liukangFighterObj.player === 2){
            playerTwoBlock = true; 
                console.log(playerTwoBlock,"p2 chose block")
                    defendAudioPlayer();
                    playerTwoDefend()
                    playerOneClearDefend();
                    playerOneClearKombat();
                    clearFightText();
         
            
        }
    },

}; 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SubZero Object~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var  subZeroFighterObj = {
    player: 0, 
    name: "Sub Zero", 
    hp: 100,
    damage: 30, 
    block: 25, 
    status: true,

    attacks: function(){
        if (subZeroFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 
                    attackAudioPlay();
                    playerOneKombat(); 
                    playerTwoClearDefend();
                    playerTwoClearKombat();
                    playerOneClearDefend(); 
                    clearFightText();

        }
        else if (subZeroFighterObj.player === 2 ){
            playerTwoAttack = true; 
                console.log(playerTwoAttack, "p2 chose attck")
                    attackAudioPlay();    
                    playerTwoKombat();
                    playerOneClearKombat();
                    playerOneClearDefend(); 
                    playerTwoClearDefend(); 
                    clearFightText();
        }
        },              
    defend: function(){
        if (subZeroFighterObj.player === 1){
            playerOneBlock = true; 
                console.log(playerOneBlock, "p1 chose block")
                    defendAudioPlayer(); 
                    playerOneDefend();
                    playerTwoClearKombat();
                    playerTwoClearDefend(); 
                    clearFightText();
            }
        else if(subZeroFighterObj.player === 2){
            playerTwoBlock = true; 
                console.log(playerTwoBlock,"p2 chose block")
                    defendAudioPlayer();
                    playerTwoDefend()
                    playerOneClearDefend();
                    playerOneClearKombat();
                    clearFightText();
        }
    },
    
    
   
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Scorpion object~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var  scorpionFighterObj = {
    player: 0, 
    name: "Scorpion",
    hp: 100, 
    damage: 35, 
    block: 30, 
    status: true,

    attacks: function(){
        if (scorpionFighterObj.player === 1) {
            playerOneAttack = true; 
                console.log(playerOneAttack, "p1 chose attack"); 
                    attackAudioPlay(); 
                    playerOneKombat(); 
                    playerOneClearDefend(); 
                    playerTwoClearDefend();
                    playerTwoClearKombat();
                    clearFightText();

        }
        else if (scorpionFighterObj.player === 2 ){
            playerTwoAttack = true; 
                console.log(playerTwoAttack, "p2 chose attck")
                    attackAudioPlay();
                    playerTwoKombat();
                    playerOneClearKombat();
                    playerOneClearDefend(); 
                    playerTwoClearDefend(); 
                    clearFightText();
        }
        },              
    defend: function(){
        if (scorpionFighterObj.player === 1){
            playerOneBlock = true; 
                console.log(playerOneBlock, "p1 chose block")
                    defendAudioPlayer();
                    playerOneDefend();
                    playerTwoClearKombat();
                    playerTwoClearDefend(); 
                    clearFightText();
        }
        else if(scorpionFighterObj.player === 2){
            playerTwoBlock = true; 
                console.log(playerTwoBlock,"p2 chose block")
                    defendAudioPlayer();
                    playerTwoDefend()
                    playerOneClearDefend();
                    playerOneClearKombat();
                    clearFightText();
        }
    },

}; 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HP CHECKER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function checkHp(){
    if (characterSelected[1].hp <= 0 ) {
            characterSelected[1].hp = 0;
}   if (characterSelected[0].hp <= 0 ) {
            characterSelected[0].hp = 0;
    
} 
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~battle function that allows player to select fight or block.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
function battle(){
    
    if(playerOneAttack && playerTwoAttack){
        console.log("both player attacked")
            playerOneAttack = null; 
            playerTwoAttack = null;

            characterSelected[1].hp -= characterSelected[0].damage
            characterSelected[0].hp -= characterSelected[1].damage
            console.log( characterSelected);
            
            checkHp();
    
            
    } 
    if(playerOneAttack && playerTwoBlock){
        console.log("player 1 attacked player 2 blocked")
            playerOneAttack = null; 
            playerTwoBlock = null; 
            characterSelected[1].hp -=(characterSelected[0].damage - characterSelected[1].block)
            console.log(characterSelected)

              
            checkHp();
    }  
    if(playerOneBlock && playerTwoAttack){
        console.log("player 1 blocked and p2 attacked")
            playerOneBlock = null; 
            playerTwoAttack = null;
            characterSelected[0].hp -=(characterSelected[1].damage - characterSelected[0].block)
            console.log(characterSelected)

              
            checkHp();
    }
    if(playerOneBlock&& playerTwoBlock){
        console.log("both players block")
            playerOneBlock= null; 
            playerTwoBlock = null;


}};



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~hp function that dynamically changes the hp.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
function hpChanger(){
    if(characterSelected[0].name==="Liu Kang"){
        document.getElementById("liuKangHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name==="Liu Kang"){
        document.getElementById("liuKangHealth").innerHTML = characterSelected[1].hp   
    }
    if(characterSelected[0].name==="Scorpion"){
        document.getElementById("scorpionHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name === "Scorpion"){
        document.getElementById("scorpionHealth").innerHTML = characterSelected[1].hp
    }
    if(characterSelected[0].name==="Sub Zero"){
        document.getElementById("subZeroHealth").innerHTML = characterSelected[0].hp
    } else if (characterSelected[1].name==="Sub Zero"){
        document.getElementById("subZeroHealth").innerHTML = characterSelected[1].hp
    }

};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MAIN FIGHT BUTTON ENABLER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("battleBtn").addEventListener("click", function(){ 
    battle(); 
    hpChanger(); 
    endGame();
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~player one attack~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById('playerOneAttack').addEventListener('click', function() {
    characterSelected[0].attacks()
   
    
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~player one block~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
document.getElementById('playerOneBlock').addEventListener('click', function() {
    characterSelected[0].defend()
  
    
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~player two attack~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById('playerTwoAttack').addEventListener('click', function() {
    characterSelected[1].attacks()
  
    
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~player two block~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
document.getElementById("playerTwoBlock").addEventListener('click', function() {
    characterSelected[1].defend()
  
    
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARRAY OF FIGHTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var fighters = {
    liuKang: liukangFighterObj,
    subZero: subZeroFighterObj,
    scorpion: scorpionFighterObj,
};




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~liuKang fighter selecter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("liuKangFighterBox").addEventListener("click", function(){
    if(playerOnePick === false && liukangChosen === false){
        playerOnePick = true;
            liukangFighterObj.player = 1;
                liuKangAudioPlay(); 

            document.getElementById("myFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
            liukangChosen = true; 
    }   else if ( playerOnePick === true && playerTwoPick === false && liukangChosen === false){
            document.getElementById("yourFighterSelect").appendChild(document.getElementById("liuKangFighterBox"))
                playerTwoPick = true; 
                    liukangFighterObj.player = 2;  
                        liuKangAudioPlay();

    }      
    //     if (playerOnePick === true && playerTwoPick === true && liukangChosen=== false){
    //                 document.getElementById("liuKangFighterBox").remove() 
    //                 console.log("removed liuKang")
    // };
   
});



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~subZero fighter selecter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    document.getElementById("subZeroFighterBox").addEventListener("click", function(){
        if(playerOnePick === false && subZeroChosen === false){
            playerOnePick = true;
            subZeroFighterObj.player = 1; 
                document.getElementById("myFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))
                    subZeroChosen = true; 
                        subZeroAudioPlay(); 
                console.log("sub zero has been chosen")
        }   else if (playerOnePick === true && playerTwoPick === false && subZeroChosen === false){
                document.getElementById("yourFighterSelect").appendChild(document.getElementById("subZeroFighterBox"))                
                    playerTwoPick = true; 
                        subZeroFighterObj.player = 2;
                            subZeroAudioPlay(); 
                console.log("sub zero has been chosen")
        }  
        //      if (playerOnePick === true && playerTwoPick === true && subZeroChosen === false){
        //             document.getElementById("subZeroFighterBox").remove(); 
        //                 console.log("removed subZero")
        // };     
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~scoropion Fighter selecter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        document.getElementById("scorpionFighterBox").addEventListener("click", function(){
            if (playerOnePick === false && scorpionChosen === false){
                playerOnePick = true;
                    scorpionFighterObj.player = 1; 
                        document.getElementById("myFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))
                            scorpionChosen = true; 
                                scorpionAudioPlay();
            } else if ( playerOnePick === true && playerTwoPick === false && scorpionChosen === false){
                    document.getElementById("yourFighterSelect").appendChild(document.getElementById("scorpionFighterBox"))                
                        playerTwoPick = true; 
                            scorpionFighterObj.player = 2;
                                scorpionAudioPlay();
            console.log("scorpion has been chosen")
            }
            //     if (playerOnePick === true && playerTwoPick === true && scorpionChosen === false){
            //             document.getElementById("scorpionFighterBox").remove() 
            //             console.log("removed scorpion")
            // };
});



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BACKGROUND CHANGER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
var fightScene = function(){
console.log("Prepare to Fight", fightScene);
    document.body.classList.replace("menu","fight");
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CLICK FUNCTION REMOVER AFTER CHARACTER SELECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var initGame = function (){
    console.log("game is started")
        var characters = document.getElementsByClassName("character")
            for (var character of characters){
                character.removeEventListener("click", selectCharacter) 
    } 
    clearSelectFighter();
    fightScene(); 
    fightText();
    roundOneFightAudioPlay(); 
};



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME STARTER FOR CLICK FUNCTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
        var characters = document.getElementsByClassName("character")
            for (var character of characters){
                character.addEventListener("click", selectCharacter)
            
            //select Fighter Text 
            selectFighterText(); 
        }

});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PUSHES FIGHTERS INTO EMPTY ARRAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function selectCharacter(e) {
        console.log(e.target.id)
            characterSelected.push(fighters[e.target.id]);
                console.log(characterSelected);
        if (characterSelected.length === 2) {
            initGame();
            
        }
}; 

