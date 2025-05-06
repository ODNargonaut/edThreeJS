/* Старт программы */


import {mgc} from "./dt/magicNum.js";
import {Main} from "./main.js";


function start()
{
  mgc.main = new Main();
}


window.addEventListener("load", start, false);
