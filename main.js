import { linkFont } from './modules/insertFont';
import { allcconsole } from './modules/basicFunctions'

linkFont();

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