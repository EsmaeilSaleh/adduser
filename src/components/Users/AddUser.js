import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import UserList from "./UserList";

const AddUser = () => {
  const [enteredUsers, setEnteredUsers] = useState([]);
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userHandler = (e) => {
    setEnteredUser(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser === "" || enteredAge === "") {
      alert("Please insert the required data!");
      return;
    }
    setEnteredUsers([...enteredUsers, { name: enteredUser, age: enteredAge }]);
    setEnteredUser("");
    setEnteredAge("");
  };
  return (
    <Box>
      <Card style={{ width: "32rem", padding: "0.8em" }}>
        <Typography
          variant="h4"
          sx={{ padding: "0.3em", textAlign: "center", fontWeight: 600 }}
        >
          Add User
        </Typography>
        <form onSubmit={addUserHandler}>
          <TextField
            fullWidth
            onChange={userHandler}
            value={enteredUser}
            style={{ display: "block", marginBottom: 10, width: "100%" }}
            type="text"
            label="Username"
          />
          <TextField
            fullWidth
            value={enteredAge}
            onChange={ageHandler}
            label="Age (Years)"
            type="number"
          />
          <Button
            variant="outlined"
            style={{
              marginTop: "0.8em",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              display: "block",
            }}
            type="submit"
          >
            Add User
          </Button>
        </form>
      </Card>
      <UserList users={enteredUsers} />
    </Box>
  );
};

export default AddUser;
