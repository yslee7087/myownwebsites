var setColor = {
  background:function (tagname, color) {
    document.querySelector(tagname).style.backgroundColor = color;
  },
  text:function (tagname, color) {
    document.querySelector(tagname).style.color = color;
  },
  btnBorder:function (color) {
    document.querySelector("input").style.borderColor = color;
  }
}

function linksSetColor(color) {
  var linksList = document.querySelectorAll("a");
  var linksSequence = 0;
  while (linksSequence < linksList.length) {
    linksList[linksSequence].style.color = color;
    linksSequence = linksSequence + 1;
  }
}
function darkmode(self, tagname) {
  const target = document.querySelector(tagname);
  if(self.value ===  "Dark mode") {
    setColor.background("body", "black");
    setColor.background("h1", "black");
    setColor.text("h1", "white");
    setColor.background("input", "black");
    setColor.text("input", "white");
    setColor.btnBorder("white");
    self.value = "Light mode";
  } else {
    setColor.background("body", "white");
    setColor.background("h1", "white");
    setColor.text("h1", "black");
    setColor.background("input", "white");
    setColor.text("input", "black");
    setColor.btnBorder("black");
    self.value = "Dark mode";
  }
}
