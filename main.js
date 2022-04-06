import { linkFont } from './modules/insertFont.js';
import { allcconsole } from './modules/basicFunctions.js';
import getCurrentLine from '//cdn.skypack.dev/get-current-line@^6.6.0';

linkFont();

document.body.querySelector('button').addEventListener('click', function (e) {
    window.open('https://github.com/ViolaterZ/allcconsole')
})

// window.log = allcconsole.log
// window.logStyles = allcconsole.logStyles
// window.showTutorial = allcconsole.showTutorial
// window.success = allcconsole.success
// window.error = allcconsole.error
// window.warn = allcconsole.warn
// window.clear = allcconsole.clear
// window.condition = allcconsole.condition
window.allcconsole = allcconsole

if (document.body.getAttribute('disableTutorial') === 'true' || document.body.getAttribute('disableTutorial') === '') {
    allcconsole.success(`Tutorial was disabled`);
} else {
    allcconsole.showTutorial();
}

export { allcconsole }
