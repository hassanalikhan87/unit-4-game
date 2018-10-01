$( document ).ready(function(){
    var randomNum = Math.floor(Math.random()*101+19);
    wins=0;
    losses=0;
    $("#randomDiv").text(randomNum);
    var totalScore=0;
    blueNum=Math.floor(Math.random()*11+1);
    greenNum=Math.floor(Math.random()*11+1);
    redNum=Math.floor(Math.random()*11+1);
    yellowNum=Math.floor(Math.random()*11+1);
    function reset(){
        randomNum = Math.floor(Math.random()*101+19);
        $("#randomDiv").text(randomNum);
        totalScore=0;
        $("#finalTotal").text(totalScore);
        blueNum=Math.floor(Math.random()*11+1);
        greenNum=Math.floor(Math.random()*11+1);
        redNum=Math.floor(Math.random()*11+1);
        yellowNum=Math.floor(Math.random()*11+1);

    }
    function win(){
        wins++;
        alert("You Win!");
        $("#numberWins").text(wins);
        reset();
    };

    function lose(){
        alert("You Lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();

    }

    $("#one").on("click", function(){
        totalScore=totalScore+blueNum;
        $("#finalTotal").text(totalScore);
        console.log(blueNum);
        if(totalScore == randomNum){
            win();
        }
        else if(totalScore > randomNum){
            lose();
        }
    });
    $("#two").on("click", function(){
        totalScore=totalScore+greenNum;
        $("#finalTotal").text(totalScore);
        console.log(greenNum);
        if(totalScore == randomNum){
            win();
        }
        else if(totalScore > randomNum){
            lose();
        }
    });
    $("#three").on("click", function(){
        totalScore=totalScore+redNum;
        $("#finalTotal").text(totalScore);
        console.log(redNum);
        if(totalScore == randomNum){
            win();
        }
        else if(totalScore > randomNum){
            lose();
        }
    });
    $("#four").on("click", function(){
        totalScore=totalScore+yellowNum;
        $("#finalTotal").text(totalScore);
        console.log(yellowNum);
        if(totalScore == randomNum){
            win();
        }
        else if(totalScore > randomNum){
            lose();
        }
    });
})