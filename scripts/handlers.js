import { ZERO_TIME, inputEl, timerEl, Message } from './constants.js';
import { getFormattedTime, isNumberInput } from './utils.js';
import { animateTimer } from './timer.js';


const onInputChange = () => {
  const seconds  = Number(inputEl.value)
  timerEl.textContent = isNumberInput(seconds) ? 
  getFormattedTime(seconds)
  : Message.NOT_NUMBER
}

const onInputFocus = () => {
  if (!inputEl.value) {
    timerEl.textContent = ZERO_TIME;
  }
}

const onButtonClick = () => {
  if (!isNumberInput(inputEl.value)) {
    alert(Message.NOT_NUMBER);
    return;
  }
  
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
}

export {
  onInputChange,
  onInputFocus,
  onButtonClick,
}