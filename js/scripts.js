// var master = function(num) {


var changeArr = function(num) {
  var str = num.toString();
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
     arr[i] = parseInt(arr[i]);
  };
  return arr;
};


var oneDigit = function(num) {

  var arr = changeArr(num);

  console.log(arr);
  if (arr.length === 1) {
     if (arr[0] === 1) {
       var final = "I";
     } else if (arr[0] === 2) {
       final = "II";
     } else if (arr[0] === 3) {
       final = "III";
     } else if (arr[0] === 4) {
       final = "IV";
     } else if (arr[0] === 5) {
       final = "V";
     } else if (arr[0] === 6) {
       final = "VI";
     } else if (arr[0] === 7) {
       final = "VII";
     } else if (arr[0] === 8) {
       final = "VIII";
     } else if (arr[0] === 9) {
       final = "IX";
     }
   }
 return final;

}


var twoDigit = function(num) {
  var arr = changeArr(num);

  console.log(arr);
  if (arr.length === 2) {
     if (arr[0] === 1) {
       var final = "X";
     } else if (arr[0] === 2) {
       final = "XX";
     } else if (arr[0] === 3) {
       final = "XXX";
     } else if (arr[0] === 4) {
       final = "XL";
     } else if (arr[0] === 5) {
       final = "L";
     } else if (arr[0] === 6) {
       final = "LX";
     } else if (arr[0] === 7) {
       final = "LXX";
     } else if (arr[0] === 8) {
       final = "LXXX";
     } else if (arr[0] === 9) {
       final = "XC";
     }


     if (arr[1] === 1) {
       var final1 = "I";
     } else if (arr[1] === 2) {
       final1 = "II";
     } else if (arr[1] === 3) {
       final1 = "III";
     } else if (arr[1] === 4) {
       final1 = "IV";
     } else if (arr[1] === 5) {
       final1 = "V";
     } else if (arr[1] === 6) {
       final1 = "VI";
     } else if (arr[1] === 7) {
       final1 = "VII";
     } else if (arr[1] === 8) {
       final1 = "VIII";
     } else if (arr[1] === 9) {
       final1 = "IX";
     }






   }
   return(final + final1);

}

var threeDigit = function(num) {
  var arr = changeArr(num);

  console.log(arr);
  if (arr.length === 3) {
     if (arr[0] === 1) {
       var final = "C";
     } else if (arr[0] === 2) {
       final = "CC";
     } else if (arr[0] === 3) {
       final = "CCC";
     } else if (arr[0] === 4) {
       final = "CD";
     } else if (arr[0] === 5) {
       final = "D";
     } else if (arr[0] === 6) {
       final = "DC";
     } else if (arr[0] === 7) {
       final = "DCC";
     } else if (arr[0] === 8) {
       final = "DCCC";
     } else if (arr[0] === 9) {
       final = "CM";
     }


     if (arr[1] === 1) {
       var final1 = "X";
     } else if (arr[1] === 2) {
       final1 = "XX";
     } else if (arr[1] === 3) {
       final1 = "XXX";
     } else if (arr[1] === 4) {
       final1 = "XL";
     } else if (arr[1] === 5) {
       final1 = "L";
     } else if (arr[1] === 6) {
       final1 = "LX";
     } else if (arr[1] === 7) {
       final1 = "LXX";
     } else if (arr[1] === 8) {
       final1 = "LXXX";
     } else if (arr[1] === 9) {
       final1 = "XC";
     }

     if (arr[2] === 1) {
       var final2 = "I";
     } else if (arr[2] === 2) {
       final2 = "II";
     } else if (arr[2] === 3) {
       final2 = "III";
     } else if (arr[2] === 4) {
       final2 = "IV";
     } else if (arr[2] === 5) {
       final2 = "V";
     } else if (arr[2] === 6) {
       final2 = "VI";
     } else if (arr[2] === 7) {
       final2 = "VII";
     } else if (arr[2] === 8) {
       final2 = "VIII";
     } else if (arr[2] === 9) {
       final2 = "IX";
     }

   }
   return(final + final1 + final2)

}
var fourDigit = function(num) {
  var arr = changeArr(num);

  console.log(arr);
  if (arr.length === 4) {
     if (arr[0] === 1) {
       var final = "M";
     } else if (arr[0] === 2) {
       final = "MM";
     } else if (arr[0] === 3) {
       final = "MMM";
     } else if (arr[0] === 4) {
       final = "CD";
     } else if (arr[0] === 5) {
       final = "D";
     } else if (arr[0] === 6) {
       final = "DC";
     } else if (arr[0] === 7) {
       final = "DCC";
     } else if (arr[0] === 8) {
       final = "DCCC";
     } else if (arr[0] === 9) {
       final = "CM";
     }

     if (arr[1] === 1) {
       var final1 = "C";
     } else if (arr[1] === 2) {
       final1 = "CC";
     } else if (arr[1] === 3) {
       final1 = "CCC";
     } else if (arr[1] === 4) {
       final1 = "CD";
     } else if (arr[1] === 5) {
       final1 = "D";
     } else if (arr[1] === 6) {
       final1 = "DC";
     } else if (arr[1] === 7) {
       final1 = "DCC";
     } else if (arr[1] === 8) {
       final1 = "DCCC";
     } else if (arr[1] === 9) {
       final1 = "CM";
     }

     if (arr[2] === 1) {
       var final2 = "X";
     } else if (arr[2] === 2) {
       final2 = "XX";
     } else if (arr[2] === 3) {
       final2 = "XXX";
     } else if (arr[2] === 4) {
       final2 = "XL";
     } else if (arr[2] === 5) {
       final2 = "L";
     } else if (arr[2] === 6) {
       final2= "LX";
     } else if (arr[2] === 7) {
       final2 = "LXX";
     } else if (arr[2] === 8) {
       final2 = "LXXX";
     } else if (arr[2] === 9) {
       final2 = "XC";
     }

     if (arr[3] === 1) {
       var final3 = "I";
     } else if (arr[3] === 2) {
       final3 = "II";
     } else if (arr[3] === 3) {
       final3 = "III";
     } else if (arr[3] === 4) {
       final3 = "IV";
     } else if (arr[3] === 5) {
       final3 = "V";
     } else if (arr[3] === 6) {
       final3 = "VI";
     } else if (arr[3] === 7) {
       final3 = "VII";
     } else if (arr[3] === 8) {
       final3 = "VIII";
     } else if (arr[3] === 9) {
       final3 = "IX";
     }

   }
   return(final + final1 + final2 + final3);

}

$(document).ready(function() {
  $("form#numeralProcess").submit(function(event) {

    (event).preventDefault();
  })
});
