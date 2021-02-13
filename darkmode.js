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
  if(self.value ===  "Dark mode") {
    setColor.background("body", "black");
    setColor.background("h1", "black");
    setColor.text("h1", "white");

    self.classList.remove("lightmodeBtn");
    self.classList.add("darkmodeBtn");

    self.value = "Light mode";
  } else {
    setColor.background("body", "white");
    setColor.background("h1", "white");
    setColor.text("h1", "black");

    self.classList.remove("darkmodeBtn");
    self.classList.add("lightmodeBtn");
    
    self.value = "Dark mode";
  }
}
