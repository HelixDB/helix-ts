import HelixDB from "helix-ts";

// Create a new HelixDB client 
// The default url is http://localhost:6969
// EXAMPLE: const client = new HelixDB("https://xxxxxxxxxx.execute-api.us-west-1.amazonaws.com/v1");
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