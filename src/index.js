'use strict';

const whatsUp = require('./whatsup');

function sayWhatsUp (ele, name) {
  const ele = document.getElementById(ele);
  ele.innerText = whatsUp(name);
}

sayWhatsUp('greeting', 'Bruna');