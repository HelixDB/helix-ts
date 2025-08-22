# helix-ts

TypeScript Library for working with HelixDB

## Getting Started

### Setting up HelixDB

##### Install HelixCLI

```bash
$ curl -sSL "https://install.helix-db.com" | bash
$ helix install
$ helix init
```

##### Create HelixQL queries

```js
// ./helixql-queries/queries.hx

QUERY addUser(name: String, age: Integer) =>
    user <- AddN<User({name: name, age: age})
    RETURN user

QUERY getUser(user_name: String) =>
    user <- N<User::WHERE(_::{name}::EQ(user_name))
    RETURN user
```

##### Deploy HelixQL queries

```bash
$ helix deploy --local
```

### Using TypeScript with HelixDB

##### Install HelixTS

```bash
$ npm install helix-ts
```

##### Send requests to HelixDB

```typescript
// ./index.ts
import HelixDB from "helix-ts";

// Create a new HelixDB client
// The default url is http://localhost:6969
// EXAMPLE: const client = new HelixDB("https://xxxxxxxxxx.execute-api.us-west-1.amazonaws.com/v1");
const client = new HelixDB("http://localhost:6969");

// Query the database
await client.query("addUser", {
  name: "John",
  age: 20,
});

// Get the user
const user = await client.query("getUser", {
  name: "John",
});

console.log(user);
```
