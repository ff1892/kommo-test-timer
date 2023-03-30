import { NUMBER_REGEX } from './constants.js';

// Возвращает строку с ведущим нулем, если число меньше 10
const getFormattedNumber = num => (
  num < 10 ? `0${num}` : `${num}`
)

// Возвращает строку с счетчиком времени,
// например '00:01:12'
const getFormattedTime = secondsNum => {
  const hours = Math.floor(secondsNum / 3600);
  const minutes = Math.floor((secondsNum % 3600) / 60);
  const seconds = Math.floor(secondsNum % 60)
  
  return [hours, minutes, seconds]
    .map(getFormattedNumber)
    .join(':');
}

const isNumberInput = inputValue => NUMBER_REGEX.test(inputValue);

export {
  getFormattedTime,
  isNumberInput
}