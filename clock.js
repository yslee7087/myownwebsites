const clockContainer = document.querySelector(".clock"),
  AmPmTitle = clockContainer.querySelector(".AmPm"),
  clockTitle = clockContainer.querySelector("h1"),
  dateTitle = clockContainer.querySelector(".dates");

function getTime() {
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const time = new Date(),
    year = time.getFullYear(),
    month = time.getMonth(),
    date = time.getDate(),
    day = week[time.getDay()],
    hour = time.getHours(),
    minute = time.getMinutes();

  // AM or PM
  if (hour <= 12) {
    AmPmTitle.innerText = "AM";
  } else {
    AmPmTitle.innerText = "PM";
  }
  // 시간
  if (hour <= 9) {
    // 1시~9시 일때
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
  } else if (hour <= 12) {
    // 10시~12시 일때
    clockTitle.innerText = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
  } else if (hour <= 21) {
    // 오후 1시~9시 일때
    clockTitle.innerText = `0${hour - 12}:${minute < 10 ? `0${minute}` : minute}`;
  } else {
    // 오후 10시~12시 일때
    clockTitle.innerText = `${hour - 12}:${minute < 10 ? `0${minute}` : minute}`;
  }
  // 날짜, 요일
  dateTitle.innerText = `${year}년 ${month + 1}월 ${date}일 ${day}`;
}
function init() {
  getTime()
  setInterval(getTime, 1000)
}
init();
