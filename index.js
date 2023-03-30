import { inputEl, buttonEl } from './scripts/constants.js';
import { 
  onInputChange,
  onInputFocus,
  onButtonClick } 
from './scripts/handlers.js';

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('focus', onInputFocus);
buttonEl.addEventListener('click', onButtonClick);
