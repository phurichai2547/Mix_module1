function change (str) {  
    let newString  = ""
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            newString += char.toLowerCase();
        } else {
            newString += char.toUpperCase();
        }
        return newString;
    }  

}
console.log(change("Hello World"));
console.log(change("hELLO wORLD"));