import HelixDB from "helix-ts";

// Create a new HelixDB client 
// The default port is 6969
const client = new HelixDB();

// Query the database
await client.query("addUser", {
    name: "John",
    age: 20
});

// Get the user
const user = await client.query("getUser", {
    name: "John"
});

console.log(user);