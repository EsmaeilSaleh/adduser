import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
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
