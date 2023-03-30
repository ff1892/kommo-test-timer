const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const NUMBER_REGEX = /^\d+$/;
const ZERO_TIME = '00:00:00';
const DEFAULT_TIMEOUT = 1000;

const createTimerAnimator = () => {
  let timerId;
  let remainingSeconds;

  return (seconds) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    remainingSeconds = seconds;

    const animate = () => {
      if (remainingSeconds > 0) {
        if (timerEl.textContent === ZERO_TIME) {
          clearTimeout(timerId);
          return;
        }
        
        remainingSeconds--;

        const formattedTime = getFormattedTime(remainingSeconds);
        timerEl.textContent = formattedTime;

        timerId = setTimeout(animate, DEFAULT_TIMEOUT);
      } else {
        alert('Time is up');
      }
    };
    animate();
  };
};

const animateTimer = createTimerAnimator();


const getFormattedNumber = num => (
  num < 10 ? `0${num}` : `${num}`
)

const getFormattedTime = userValue => {
  const hours = Math.floor(userValue / 3600);
  const minutes = Math.floor((userValue % 3600) / 60);
  const seconds = Math.floor(userValue % 60)
  
  return [hours, minutes, seconds]
    .map(getFormattedNumber)
    .join(':');
}

inputEl.addEventListener('input', () => {
  const seconds  = Number(inputEl.value)
  const formattedTime = NUMBER_REGEX.test(inputEl.value) ? 
    getFormattedTime(seconds)
    : 'NOT A NUMBER'
  timerEl.textContent = formattedTime;
});

inputEl.addEventListener('focus', () => {
  if (!inputEl.value) {
    timerEl.textContent = ZERO_TIME;
  }
});

buttonEl.addEventListener('click', () => {
  
  if (!NUMBER_REGEX.test(inputEl.value)) {
    alert('Please, enter a number');
    return;
  }
  
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
