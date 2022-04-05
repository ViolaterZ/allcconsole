#!/usr/bin/env node
import { linkFont } from './modules/insertFont';
import { xconsolejs } from './modules/basicFunctions'

linkFont();

window.log = xconsolejs.log
window.logStyles = xconsolejs.logStyles
window.showTutorial = xconsolejs.showTutorial
window.success = xconsolejsjs.success
window.error = xconsolejs.error
window.warn = xconsolejs.warn
window.clear = xconsolejs.clear
window.condition = xconsolejs.condition

if (document.body.getAttribute('disableTutorial') === 'true' || document.body.getAttribute('disableTutorial') === '') {
    xconsolejs.success(`Tutorial was disabled`);
} else {
    xconsolejs.showTutorial();
}

export { xconsolejs }