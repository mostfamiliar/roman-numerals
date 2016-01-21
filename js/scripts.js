// var master = function(num) {
var masterFunction = function(num) {
  var arr = changeArr(num);
  if (arr.length === 1) {
    var oneDig = oneDigit(num);
    return oneDig;
  }
  else if (arr.length === 2) {
    var twoDig = twoDigit(num);
    console.log(twoDig)
    return twoDig;
  }
  else if (arr.length === 3) {
    var threeDig = threeDigit(num);
    return threeDig;
  }
  else {
    var fourDig = fourDigit(num);
    return fourDig;
  }

};

var changeArr = function(num) {
  var str = num.toString();
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
     arr[i] = parseInt(arr[i]);
  };
  return arr;
};

var ones = function(arr) {
    var i = (arr.length-1);
    if (true) {
       if (arr[i] === 1) {
         var final = "I";
       } else if (arr[i] === 0) {
         var final = "";
       } else if (arr[i] === 2) {
         final = "II";
       } else if (arr[i] === 3) {
         final = "III";
       } else if (arr[i] === 4) {
         final = "IV";
       } else if (arr[i] === 5) {
         final = "V";
       } else if (arr[i] === 6) {
         final = "VI";
       } else if (arr[i] === 7) {
         final = "VII";
       } else if (arr[i] === 8) {
         final = "VIII";
       } else if (arr[i] === 9) {
         final = "IX";
       } else {
         console.log("error");
       };
   };
     return final;
};


var tens = function(arr) {
  var i = (arr.length-2);
  if (true) {
     if (arr[i] === 1) {
       var final1 = "X";
     } else if (arr[i] === 0) {
       var final1 = "";
     } else if (arr[i] === 2) {
       final1 = "XX";
     } else if (arr[i] === 3) {
       final1 = "XXX";
     } else if (arr[i] === 4) {
       final1 = "XL";
     } else if (arr[i] === 5) {
       final1 = "L";
     } else if (arr[i] === 6) {
       final1 = "LX";
     } else if (arr[i] === 7) {
       final1 = "LXX";
     } else if (arr[i] === 8) {
       final1 = "LXXX";
     } else if (arr[i] === 9) {
       final1 = "XC";
     } else {
       console.log("error");
     }
   };
   return final1;
};

var hundreds = function(arr) {

  var i = (arr.length-3)
  if (true) {
     if (arr[i] === 1) {
       var final2 = "C";
     } else if (arr[i] === 0) {
       var final2 = "";
     } else if (arr[i] === 2) {
       final2 = "CC";
     } else if (arr[i] === 3) {
       final2 = "CCC";
     } else if (arr[i] === 4) {
       final2 = "CD";
     } else if (arr[i] === 5) {
       final2 = "D";
     } else if (arr[i] === 6) {
       final2 = "DC";
     } else if (arr[i] === 7) {
       final2 = "DCC";
     } else if (arr[i] === 8) {
       final2 = "DCCC";
     } else if (arr[i] === 9) {
       final2 = "CM";
     };
   };
   console.log(final2);
   return final2;

};

var thousands = function(arr) {
  var i = (arr.length-4);
  if (true) {
     if (arr[i] === 1) {
       var final = "M";
     } else if (arr[i] === 0) {
       var final = "";
     } else if (arr[i] === 2) {
       final = "MM";
     } else if (arr[i] === 3) {
       final = "MMM";
     } else if (arr[i] === 4) {
       final = "CD";
     } else if (arr[i] === 5) {
       final = "D";
     } else if (arr[i] === 6) {
       final = "DC";
     } else if (arr[i] === 7) {
       final = "DCC";
     } else if (arr[i] === 8) {
       final = "DCCC";
     } else if (arr[i] === 9) {
       final = "CM";
     }
     return final;
   }
 };

var oneDigit = function(num) {

  var arr = changeArr(num);
  var callOnes = ones(arr);
  return callOnes;

}

var twoDigit = function(num) {
  var arr = changeArr(num);
  console.log(arr)
  var callOnes = ones(arr);
  var callTens = tens(arr);

  console.log(callOnes)

  return(callTens + callOnes);

};

var threeDigit = function(num) {
  var arr = changeArr(num);
  var callOnes = ones(arr);
  var callTens = tens(arr);
  var callHundreds = hundreds(arr);
  return(callHundreds + callTens + callOnes)

};

var fourDigit = function(num) {
  var arr = changeArr(num);
  var callOnes = ones(arr);
  var callTens = tens(arr);
  var callHundreds = hundreds(arr);
  var callThousands = thousands(arr);
  console.log(arr);

  return(callThousands + callHundreds + callTens + callOnes);

};

$(document).ready(function() {
  $("form#numeralProcess").submit(function(event) {
    var num = $("input#romanText").val();
    var result =


    (event).preventDefault();
  })
});
