function BMI(){

    var weight=Number(document.getElementById("weight").value);
    var height=Number(document.getElementById("height").value);
   var weightunit=document.getElementById("weightunit").value;
   var heightunit=document.getElementById("heightunit").value;
      //Convert all units to metric
          if (heightunit == "inch") height /= 39.3700787;
            if (weightunit== "pound") weight /= 2.20462;
            var BMI = Math.round(weight / Math.pow(height, 2) );
             document.getElementById("output").innerText=Math.round(BMI*100)/100;

  
        
             var output = Math.round(BMI * 100) / 100
             if (output < 18.5)
                 document.getElementById("comment").innerText = "Underweight";
             else if (output >= 18.5 && output <= 25)
                 document.getElementById("comment").innerText = "Normal";
             else if (output >= 25 && output <= 30)
                 document.getElementById("comment").innerText = "Obese";
             else if (output > 30)
                 document.getElementById("comment").innerText = "Overweight";
        }