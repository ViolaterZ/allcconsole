import { xconsolejs } from './basicFunctions';

const showTutorial = () => {
    // Importing dependencies
    xconsolejs.warn(`This app contains just a preview of the xconsolejs BETA with bugs and not full functionality.`);
    xconsolejs.log(`📃 Logs from xconsolejs`, xconsolejs.logStyles.modern(`#ffffff`))
    xconsolejs.success(`Imported all 📦 modules`);
    xconsolejs.success(`Loaded all 😃 dependencies`);
    xconsolejs.log(`
    
    `);
    // Tutorial
    xconsolejs.log(`📕 This is a tutorial of the new xconsolejs BETA`, xconsolejs.logStyles.flat('black', '#3498db'));
    xconsolejs.log(``)
    xconsolejs.log(`Use the following in Code`, xconsolejs.logStyles.flat('black', '#ffffff'));
    xconsolejs.log(`📃 Use xconsolejs.log() to log something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`⚠️ Use xconsolejs.warn() to warn about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`❌ Use xconsolejs.error() to throw an error about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`✅ Use xconsolejs.success() to throw a success message about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`🟦 Use xconsolejs.condition() to check and log to the console if the condition is true or false`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`🗑️ Use xconsolejs.clear() to clear the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`😃 Use xconsolejs.showTutorial() to show the tutorial of the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(``)
    xconsolejs.warn(`Since xconsolejs is made using es6 modules, the variables cannot be used directly from the console. To use the following, we will be using window instead of xconsolejs`);
    xconsolejs.log(`Use the following in Console`, xconsolejs.logStyles.flat('black', '#ffffff'));
    xconsolejs.log(`📃 Use window.log() to log something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`⚠️ Use window.warn() to warn about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`❌ Use window.error() to throw an error about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`✅ Use window.success() to throw a success message about something to the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`🟦 Use window.condition() to check and log to the console if the condition is true or false`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`🗑️ Use window.clear() to clear the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(`😃 Use window.showTutorial() to show the tutorial of the console`, xconsolejs.logStyles.modern('#ffffff'));
    xconsolejs.log(``);
    xconsolejs.log(`To disable this tutorial from popping up everytime you open the console, add the disableTutorial attribute to the body tag`, xconsolejs.logStyles.flat('black', '#3498db'));
    xconsolejs.log(``);
    xconsolejs.log(`📃 Logs from your code`, xconsolejs.logStyles.modern(`#ffffff`))
}

export { showTutorial }