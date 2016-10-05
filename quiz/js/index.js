function test() {
  var question = prompt("What is the worst flavour of icecream?");
  var score = 0;
  if (question === "Ya mum") {
    alert("Correct!");
    score = score + 1;
    var question2 = prompt("What is the worst flavour of Pi?");
    if (question2 === "idk") {
      alert("Correct!");
      score = score + 1;
      var question3 = prompt("idk");
      if (question3 === "lol") {
        alert("Correct!");
        score = score + 1;
        var question4 = prompt ("lol");
        if (question4 === "idk") {
          alert("Correct! Congratulations, you've won the game!");
          score = score + 1;
          alert("Your score was");
          alert("3/3!");
        }
      } else {
        alert("WRONG!")
      }
    } else {
      alert("WRONG!");
    }
  } else {
    alert("Wrong!");
  }
}