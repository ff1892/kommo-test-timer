const NUMBER_REGEX = /^\d+$/;
const ZERO_TIME = '00:00:00';
const DEFAULT_TIMEOUT = 1000;

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const Message = {
  NOT_NUMBER: '🤖 Please, enter a number',
  TIME_GONE: '⏰ Time is up'
}

export {
  NUMBER_REGEX,
  ZERO_TIME,
  DEFAULT_TIMEOUT,
  inputEl,
  buttonEl,
  timerEl,
  Message,
}
