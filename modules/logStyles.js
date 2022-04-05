// Console Log Styles
const basic = (color) => `color: ${color}; font-family: Poppins; font-weight: 600; font-size: 13px; padding-left: -10px; border-radius: 5px;`;
const modern = (color) => `color: ${color}; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: ${color}50; border-radius: 5px;`;
const flat = (color1, color2) => `color: ${color1}; font-family: Poppins; font-weight: 600; font-size: 13px; padding: 5px; background: ${color2}; border-radius: 5px;`;

const logStyles = {
    modern,
    basic,
    flat
}

export { logStyles }