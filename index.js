var randomNumber=Math.random()*6;
randomNumber=Math.floor(randomNumber)+1;

//for image 2

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;


if(randomNumber>randomNumber2)
{
    document.querySelector(".winner").innerHTML="Player 1 WINS";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector(".winner").innerHTML="Player 2 WINS";
}
else
{
    document.querySelector(".winner").innerHTML="Draw";
}



function randomDiceGenerator(classname,randomVariable)
{
    if(randomVariable===1)
    {
        document.querySelector(classname).setAttribute("src","images/dice1.png");
    }
    else if(randomVariable===2)
    {
        document.querySelector(classname).setAttribute("src","images/dice2.png");
    }
    else if(randomVariable===3)
    {
        document.querySelector(classname).setAttribute("src","images/dice3.png");
    }
    else if(randomVariable===4)
    {
        document.querySelector(classname).setAttribute("src","images/dice4.png");
    }
    else if(randomVariable===5)
    {
        document.querySelector(classname).setAttribute("src","images/dice5.png");
    }
    else if(randomVariable===6)
    {
        document.querySelector(classname).setAttribute("src","images/dice6.png");
    }
}

randomDiceGenerator(".img1",randomNumber);
randomDiceGenerator(".img2",randomNumber2);






