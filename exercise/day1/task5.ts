export function task5() {
const name = "John Doe";
const initials = name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
console.log("Initials:", initials); // Output: JD
}