const password = "Sumair123";

if (password.length >=8 &&  
    ( password.includes("0") ||
    password.includes("1") ||
    password.includes("2") ||
    password.includes("3") ||
    password.includes("4") ||
    password.includes("5") ||
    password.includes("6") ||
    password.includes("7") ||
    password.includes("8") ||
    password.includes("9") 
)
) {
    console.log("Password is Valid");
}
else {
    console.log("Password is Invalid");
}
