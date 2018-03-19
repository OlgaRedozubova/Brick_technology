var element = document.getElementsByClassName("dropDown")[0];

function dropDown_Show() {
 if (element.classList) {
    element.classList.toggle("visible");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("visible");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("visible");
    element.className = classes.join(" ");
  }
}

