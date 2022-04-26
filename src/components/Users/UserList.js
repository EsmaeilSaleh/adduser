import React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const UserList = (props) => {
  return (
    <Card sx={{ marginTop: "0.8em" }}>
      <Typography variant="h2">UserList</Typography>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age})
        </li>
      ))}
    </Card>
  );
};

export default UserList;
