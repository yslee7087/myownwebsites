const body = document.querySelector("body");

function darkmode(self) {
    if (self.value === "Light mode") {
        body.classList.remove("createImage");
        body.classList.add("removeImage");

        self.value = "Dark mode";
        self.title = "화면이 밝아지고 배경 이미지가 나타납니다."
    } else {
        body.classList.remove("removeImage");
        body.classList.add("createImage");

        self.value = "Light mode";
        self.title = "화면이 어두워지고 배경 이미지가 사라집니다."
    }
}