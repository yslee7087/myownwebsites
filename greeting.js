const form = document.querySelector(".greetingForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    const greetingByTime = new Date(),
        liveTime = greetingByTime.getHours();
    let talk = "";
    if (liveTime < 6) {
        talk = "새로운 하루가 시작됐네요.";
    } else if (liveTime < 12) {
        talk = "좋은 아침입니다.";
    } else if (liveTime < 18) {
        talk = "좋은 오후입니다.";
    } else if (liveTime < 20) {
        talk = "벌써 하루가 다 갔네요.";
    } else if (liveTime <= 24) {
        talk = "오늘도 수고했어요 :)";
    }

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요, ${text}님! ${talk}`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
    setInterval(loadName, 1000)
}
init();