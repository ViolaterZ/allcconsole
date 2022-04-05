// Imports
import { logStyles } from './logStyles';
import { showTutorial } from './showTutorial';

// Console Log
const log = (text, style = `font-family: 'Poppins', sans-serif; font-weight: 400; font-size: 12px;`) =>  {
    if (typeof text === 'string') {
        console.log(`%c ${text}`, style);
    } else {
        console.log(text);
    }
}

// Throw success message
const success = (text) => console.log(`%c ✅ Success:  ${text}`, `color: #2ecc71; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #2ecc7150; border-radius: 5px;`);

// Throw error message
const error = (text) => console.log(`%c ❌ Error: ${text}`, `color: #e74c3c; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #e74c3c50; border-radius: 5px;`);

// Throw warn message
const warn = (text) => console.log(`%c ⚠️ Warning: ${text}`, `color: #f1c40f; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: #f1c40f50; border-radius: 5px;`);

// Clear the console
const clear = () => {
    console.clear();
    success(`cleared the console`);
}

const condition = (cond, msg = 'Condition was true', errmsg = 'Condition was false') => {
    if (cond) {
        success(msg);
    } else {
        error(errmsg)
    }
}

const table = (object) => {
    console.table(object);
}

// Object
const allcconsole = {
    log, 
    logStyles,
    showTutorial,
    success,
    error,
    warn,
    clear,
    condition,
    table
}

export { allcconsole };