QUERY addUser(name: String, age: Integer) =>
    user <- AddN<User({name: name, age: age})
    RETURN user

QUERY getUser(user_name: String) =>
    user <- N<User::WHERE(_::{name}::EQ(user_name))
    RETURN user

