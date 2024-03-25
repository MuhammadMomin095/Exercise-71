let age = 25;
age = 26; // Works fine because let allows reassignment
console.log(age); 

// Trying to reassign a const-declared variable
const name = "Alice";
try {
  name = "Bob"; // This line will cause an error
} catch (error) {
  console.log("Error: Can't reassign a const-declared variable."); // This message is shown
}