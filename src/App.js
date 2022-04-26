import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Footer from "./components/UI/Footer"

import Container from "@mui/material/Container";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <AddUser />
      <UserList />
      <Footer />
    </Container>
  );
}

export default App;
