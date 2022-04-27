import React from "react";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const UserList = (props) => {
  return (
    <Card sx={{ marginTop: "0.8em" }}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>UserList</Typography>
      {props.users.map((user) => (
        <Box sx={{ padding: '.8em', textAlign: 'center' }}>
            {user.name} ({user.age})
          <Divider sx={{ marginTop: '0.8em' }}/>
        </Box>
      ))}
    </Card>
  );
};

export default UserList;
