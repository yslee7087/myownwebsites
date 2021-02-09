var setColor = {
  setBackgroundColor:function (tagname, color) {
    document.querySelector(tagname).style.backgroundColor = color;
  },
  setTextColor:function (tagname, color) {
    document.querySelector(tagname).style.color = color;
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
    setColor.setBackgroundColor("body", "black");
    setColor.setBackgroundColor("h1", "black");
    setColor.setTextColor("h1", "white")
    setColor.setBackgroundColor("input", "black")
    setColor.setTextColor("input", "white")
    self.value = "Light mode";
  } else {
    setColor.setBackgroundColor("body", "white");
    setColor.setBackgroundColor("h1", "white");
    setColor.setTextColor("h1", "black")
    setColor.setBackgroundColor("input", "white")
    setColor.setTextColor("input", "black")
    self.value = "Dark mode";
  }
}
