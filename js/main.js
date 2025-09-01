// 1. 计时起点：随便换成你需要的过去时间
const startDate = new Date('2025-09-01T09:30:00').getTime();

// 2. 缓存 DOM 节点
const daysEl = document.querySelector('.days .number');
const hoursEl = document.querySelector('.hours .number');
const minutesEl = document.querySelector('.minutes .number');
const secondsEl = document.querySelector('.seconds .number');

// 3. 补零函数
const pad = n => n.toString().padStart(2, '0');

// 4. 每秒刷新一次
const counter = setInterval(() => {
  const now = Date.now();
  const diff = now - startDate;          // 关键：用“现在 - 起点”

  // 计算各个单位
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // 5. 渲染
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
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
