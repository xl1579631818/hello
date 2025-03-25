let days = document.querySelector('.days .number'),
    hours = document.querySelector('.hours .number'),
    minutes = document.querySelector('.minutes .number'),
    seconds = document.querySelector('.seconds .number'),
    //Count Down End Date
    //1000 milliseconds = 1 second
    countDownDate = new Date("Sep 01, 2025 09:30:00").getTime();
// setInterval()在指定的间隔时间内重复执行一段代码
let counter = setInterval(() => {
    //Get Date Now
    let dateNow = new Date().getTime();
    //Find The Date Difference Between Now and End Date
    let dateDiff = countDownDate - dateNow;

    //Get Time Unit
    let day = Math.floor(dateDiff / (1000*60*60*24));
    let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

    days.innerHTML = day < 10 ? `0${day}` : day;
    hours.innerHTML = hour < 10 ? `0${hour}` : hour;
    minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
    seconds.innerHTML = second < 10 ? `0${second}` : second;

    if(dateDiff == 0){
        clearInterval(counter);
    }
}, 1000);

const text = document.querySelectorAll('ul li a')

text.forEach(text => {
  text.innerHTML = text.innerText.split('').map((letters, i) => `<span>${letters}</span>`).join('')

  const spn = document.querySelectorAll('ul li a span').forEach(e => {
    const duration = Math.random() * 5
    e.style.animationDuration = 0.25 + duration + 's'
  })
})

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('bgMusic');
  audio.play().catch(e => {
    // 自动播放失败的处理
    console.log('自动播放失败，请手动播放');
  });
});