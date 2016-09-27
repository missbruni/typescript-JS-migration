'use strict';

import whatsUp from './whatsup';

const sayWhatsUp =  (ele, name) =>
 document.getElementById(ele).innerText = whatsUp(name);

sayWhatsUp('greeting', 'Bruna');

