function toCase(str) {
    if (str === "") {
        return "-";
    }
    
    let lowercase = str.toLowerCase();
    let uppercase = str.toUpperCase();
    
    return lowercase + "-" + uppercase;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
