import { allcconsole } from './basicFunctions.js';

const showTutorial = () => {
    // Importing dependencies
    allcconsole.warn(`This app contains allcconsole v0.1.1 with bugs and not full functionality.`);
    allcconsole.log(`📃 Logs from allcconsole`, allcconsole.logStyles.modern(`#ffffff`))
    allcconsole.success(`Imported all 📦 modules`);
    allcconsole.success(`Loaded all 😃 dependencies`);
    allcconsole.log(`
    
    `);
    // Tutorial
    allcconsole.log(`📕 This is a tutorial of the new allcconsole v0.1.0`, allcconsole.logStyles.flat('#3498db', 'black'));
    allcconsole.log(``)
    allcconsole.log(`Use the following in Code`, allcconsole.logStyles.flat('#ffffff', 'black'));
    allcconsole.log(`📃 Use allcconsole.log() to log something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`⚠️ Use allcconsole.warn() to warn about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`❌ Use allcconsole.error() to throw an error about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`✅ Use allcconsole.success() to throw a success message about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`🟦 Use allcconsole.condition() to check and log to the console if the condition is true or false`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`📶 Use allcconsole.table() to show the current values in a table format`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`🗑️ Use allcconsole.clear() to clear the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`😃 Use allcconsole.showTutorial() to show the tutorial of the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(``)
    allcconsole.warn(`Since allcconsole is made using es6 modules, the variables cannot be used directly from the console. To use the following, we will be using window instead of allcconsole. The allcconsole variable still works in some browsers but if doesn't work, you can use the following.`);
    allcconsole.log(`Use the following in Console`, allcconsole.logStyles.flat('#ffffff', 'black'));
    allcconsole.log(`📃 Use window.allconsole.log() to log something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`⚠️ Use window.allconsole.warn() to warn about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`❌ Use window.allconsole.error() to throw an error about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`✅ Use window.allconsole.success() to throw a success message about something to the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`🟦 Use window.allconsole.condition() to check and log to the console if the condition is true or false`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`📶 Use window.allcconsole.table() to show the current values in a table format`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`🗑️ Use window.allconsole.clear() to clear the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(`😃 Use window.allconsole.showTutorial() to show the tutorial of the console`, allcconsole.logStyles.modern('#ffffff'));
    allcconsole.log(``);
    allcconsole.log(`NOTE: This is not the full tutorial so please do check out the documentation for all the methods`, allcconsole.logStyles.flat('#3498db', 'black'));
    allcconsole.log(`To disable this tutorial from popping up everytime you open the console, add the disableTutorial attribute to the body tag`, allcconsole.logStyles.flat('#3498db', 'black'));
    allcconsole.log(``);
    allcconsole.log(`📃 Logs from your code`, allcconsole.logStyles.modern(`#ffffff`))
}

export { showTutorial }