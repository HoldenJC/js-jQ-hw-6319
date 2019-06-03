var myFunction = function() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
}
  // alert("I was clicked");
};

$(function() {

  var userSentence = prompt('Please enter in a sentence: ');
  alert(userSentence);

  var firstLastCapital = function(userSentence) {
    var firstLetter = userSentence.charAt(0).toUpperCase();
    var lastLetter = userSentence.charAt(userSentence.length-1).toUpperCase();
    var firstLastCapitalResult = firstLetter + lastLetter;
    return firstLastCapitalResult;
  };

  var string1 = firstLastCapital(userSentence);
  alert(string1);

  var reverseString = function(string1) {
    var result = string1.split('').reverse().join('');
    return result;
  };

  var string2 = reverseString(string1);
  alert(string2);

  var concatenateOthers = function(userSentence) {
    var temp1 = firstLastCapital(userSentence);
    var temp2 = reverseString(firstLastCapital(userSentence));
    var result = temp1 + temp2;
    return result;
  };

  var string3 = concatenateOthers(userSentence);
  alert(string3);

  alert(userSentence + string3);

  var countSentence = function(userSentence) {
    var sentenceLength = userSentence.length;
    var dividend = sentenceLength / 2;
    var chosenLetter = userSentence.charAt(dividend);
    return chosenLetter + userSentence;

  };

  var string4 = countSentence(userSentence);
  alert(string4);

  alert(reverseString(string4));



  $("h1").click(function() {
    alert(userSentence);
  });

  $("p").click(function() {
    alert(reverseString(string4));
  });

  $("#myButton").click(function(){
    alert("Second Button was clicked too!");
  });


});



/*
jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});
*/

/* BOTH the below and above function the same... $ and jQuery are interchangeable here

$(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
*/
