function result(){
    var x = document.getElementById("value").value;
    var z = document.getElementById("output");
    if (x>=0){
        if (x>=5 && x<=7){
            var y = "Distilled reverse osmosis water";
            z.style.color = "Green";
        }
        else if(x>7&&x<=7.5){
            var y = "Tap water";
            z.style.color = "Green";
        }
        else if(x>=7.5 && x<=9){
            var y = "Bottled waters labeled as alkaline";
            z.style.color = "Red";
        }
        else if (x>5&&x<=5.5){
            var y = "Acid rain Water";
            z.style.color = "Red";

        }
        else if (x<5){
            var y = "Not Safe for Drinking Acidic";
            z.style.color = "Red";
            
        }
        else{
            var y = "Invalid Input";
            z.style.color = "Red";

        }
    }
    else{
        var y = "Invalid Input";
        z.style.color = "Red";

    }
    document.getElementById("output").innerHTML = y;

}