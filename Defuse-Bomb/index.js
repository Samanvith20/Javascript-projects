let timer = document.getElementById("timer");
    let defuser = document.getElementById("defuser");
    let counter = 10;

    let intervalId = setInterval(function () {
      counter--;
      timer.innerHTML = counter;

      if (counter === 0) {
        timer.innerHTML = "BOOM";
        clearInterval(intervalId);
      }
    }, 1000);

    defuser.addEventListener("keydown", function (event) {
      let bombDefuserText = defuser.value;
      if (event.key === "Enter" && bombDefuserText === "defuse" && counter !== 0) {
        timer.textContent = "You did it!";
        clearInterval(intervalId);
      }
    });