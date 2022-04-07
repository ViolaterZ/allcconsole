// Imports
import { logStyles } from './logStyles.js';
import { showTutorial } from './showTutorial.js';
import getCurrentLine from '//cdn.skypack.dev/get-current-line@^6.6.0';
import browserSystemDetect from 'https://cdn.skypack.dev/browser-system-detect';

// Console Log
const log = (text, style = `font-family: 'Poppins', sans-serif; font-weight: 400; font-size: 12px;`) =>  {
    if (typeof text === 'string') {
        console.log(`%c ${text}`, style);
    } else {
        console.log(text);
    }
}

// let fileName = getCurrentLine().file.split(document.location.protocol + '//' + document.location.host + '/')[1];

// Throw success message
const success = (text) => console.log(`%c ✅ Success:  ${text}`, `color: #2ecc71; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #2ecc7150; border-radius: 5px;`);

// Throw error message
const error = (text) => console.log(`%c ❌ Error: ${text}`, `color: #e74c3c; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #e74c3c50; border-radius: 5px;`);

// Throw warn message
const warn = (text) => console.log(`%c ⚠️ Warning: ${text}`, `color: #f1c40f; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #f1c40f50; border-radius: 5px;`);

// Clear the console
const clear = () => {
    console.clear();
    success(`Cleared the console`);
    setTimeout(() => console.clear(), 2500)
}

// Check if the given condition is true or false
const condition = (cond, msg = 'Condition was true', errmsg = 'Condition was false') => {
    if (cond) {
        success(msg);
    } else {
        error(errmsg)
    }
}

// Display a table with the given data 
const table = (object) => {
    console.table(object);
}

// Show the directory of the given object
const dir = (object) => {
    if (typeof object === 'string' || typeof object === 'number') {
        console.log(`%c ${object}`, logStyles.modern('#3498db'));
    } else {
        console.dir(object)
    }
}

// Count
let countNum = 0;
const count = (msg = '') => {
    if(msg == '') {
        error(`No Message was found to count with 😔`);
    } else {
        console.log(`%c ${msg}: ${countNum = countNum + 1}`, logStyles.modern('#3498db'));
    }
}

// Count Reset
const countReset = (msg) => {
    // console.countReset(msg);
    countNum = 0;
}

// Count Time
const countTime = function () {
    allcconsole.log(countNum);
}

// Display memory
const memory = () => {
    log(`JS Heap Size Limit: ${console.memory.jsHeapSizeLimit / 1000000}MB\n Total JS Heap Size: ${console.memory.totalJSHeapSize / 1000000}MB\n Used JS Heap Size: ${console.memory.usedJSHeapSize / 1000000}MB`, logStyles.modern('#3498db'));
}

// Get browser info
let browserInfo = browserSystemDetect().browser;

// Display browser Info
const browser = () => {
    log(`Name: ${browserInfo.name}\n Up to Date: ${browserInfo.uptodate}\n Version: ${browserInfo.version}\n Canvas Supported: ${browserInfo.features.canvas}\n WebGL Supported: ${browserInfo.features.webgl}`, logStyles.modern('#3498db'))
}

// Get platform
const platform = () => {
    return browserSystemDetect().platform;
}

// Object
const allcconsole = {
    browser,
    browserInfo,
    clear,
    condition,
    count,
    countReset,
    countTime,
    getExecutionInfo: getCurrentLine,
    dir,
    error,
    log, 
    logStyles,
    memory,
    platform,
    showTutorial,
    success,
    table,
    warn,
}

export { allcconsole };