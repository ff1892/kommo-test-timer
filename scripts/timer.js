import { ZERO_TIME, DEFAULT_TIMEOUT, Message, timerEl } from './constants.js';
import { getFormattedTime } from './utils.js';

// Использует замыкание и рекурсивный setTimeout
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
        timerEl.textContent = getFormattedTime(remainingSeconds);
        
        timerId = setTimeout(animate, DEFAULT_TIMEOUT);
      } else {
        alert(Message.TIME_GONE);
      }
    };
    
    animate();
  };
};

const animateTimer = createTimerAnimator();

export {
  animateTimer,
}