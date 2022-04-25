import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    alert(event.target.value);
  };
  return (
    <Card style={{ width: "32rem", padding: "0.8em" }}>
      <h2>AddUser</h2>
      <form onSubmit={addUserHandler}>
        <TextField
          fullWidth
          style={{ display: "block", marginBottom: 10, width: "100%" }}
          type="text"
          label="Username"
        />
        <TextField fullWidth label="Age (Years)" type="number" />
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
  );
};

export default AddUser;
