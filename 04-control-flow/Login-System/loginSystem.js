const username = "admin";
const password = 12345;

if (username === "admin" && password === 12345){
  console.log("Login Successful");
}

else if (username === "admin" && password !== 12345){
  console.log("Incorrect Password!");
}

else {
  console.log("User Not Found!")
}

