import AddUser from "./components/Users/AddUser";

import Container from "@mui/material/Container";

function App() {
  return (
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <AddUser />
        <AddUser />
      </Container>
  );
}

export default App;
