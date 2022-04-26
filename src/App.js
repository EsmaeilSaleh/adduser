import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

import Container from "@mui/material/Container";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <AddUser />
      <UserList />
    </Container>
  );
}

export default App;
