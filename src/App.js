import AddUser from "./components/Users/AddUser";
import Footer from "./components/UI/Footer"

import Container from "@mui/material/Container";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <AddUser />
      <Footer />
    </Container>
  );
}

export default App;
