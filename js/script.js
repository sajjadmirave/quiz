function submit() {
  // first get the name
  let slecetion = document.getElementsByName("select");

  for (let i = 0; i < slecetion.length; i++) {
    if (slecetion[i].checked) {
      if (slecetion[i].value === "Blueberry") {
        swal({
          title: "Its True",
          text: "You got 500xp",
          icon: "success",
        });
      } else {
        swal({
          title: "Its False",
          text: "Try again",
          icon: "error",
        });
      }
    }
  }
}
