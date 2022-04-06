![logo](https://i.imgur.com/jkpX6Ta.png)

![badge](https://img.shields.io/github/package-json/v/violaterz/allcconsole) ![badge](https://img.shields.io/github/license/violaterz/allcconsole)  ![badge](https://img.shields.io/github/last-commit/violaterz/allcconsole) ![badge](https://img.shields.io/github/issues/violaterz/allcconsole)
<p>
   <a href="https://discord.gg/PWGjZp45rg">
   <img src="https://img.shields.io/discord/943805190543384586?logo=discord"
      alt="chat on Discord"></a>
<p>
ALLCCONSOLE.js improves readability, makes the default console look beautiful and makes the overall user experience better.

## Installation
ALLCCONSOLE.js is currently just available in using es6 modules. Import the module using....
```javascript
import { allcconsole } from 'https://cdn.allc.uk/allcconsole/main.js'
```

## Usage
The basic usage of the allcconsole is as follows... 
```javascript
allcconsole.log('Hello World');
```
## Methods
**NOTE:** Values before `?` are optional
1. `clear()` - 🗑️ Clears the console.
2. `condition(condition, trueMessage?, falseMessage?)` - 🟦 Checks if the given condition is true or false.
3. `count(message)` - 🔢 Counts with the message given.
4. `countReset()` - 🔢 Resets the count.
5. `countTime()` - 🔢 Shows the count.
6. `getExecutionInfo()` - 🔗 Get the info about the line of execution.
7. `dir(object)` - 📂 Displays all the properties of a specified object.
8. `error(message)` - ❌ Throws an error message in the console.
9. `log(message, styling?)` - 📃 Logs the value to the console with the styling if specified.
10. `logStyles` - 🤩 Default provided styles for logging. 
    * `basic(color)` - 🔤 Changes the text color.
    * `modern(hexColor)` - 🏛️ Adds a faded background and same text color as the background.
    * `flat(backgroundColor, textColor?)` - 🫓 Adds a background and text color desired. 
11. `memory()` - 💻 Displays the memory usage by javascript.
12. `showTutorial()` - 😃 Shows the tutorial for the package.
13. `success(message)` - ✅ Throws a success message in the console.
14. `table(object)` - 📶 Displays the given data in a tabular form.
15. `warn(message)` - ⚠️ Throws a warn message in the console.

## Dependencies

1. `getExecutionInfo()` -  **NPM Package** | get-current-line - https://www.npmjs.com/package/get-current-line
