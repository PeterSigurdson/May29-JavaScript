function BobsYourUncle(){
    var TheAnswer;
    startingNumber = 504;
    endingNumber = 107;
    stepDown = 38;
    i = startingNumber;
    while (i > endingNumber){
        i -= stepDown;
        TheAnswer += i;
    }

    return TheAnswer;
} 

function PracticeIfThen(inputNumber){

    if (inputNumber > 50 ){
        return "YES";
    }
    else {return "NO";}

}
