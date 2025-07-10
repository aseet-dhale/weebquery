import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import AnimeDetailPage from "./components/AnimeDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar
          position="static"
          elevation={2}
          sx={{ backgroundColor: "background.paper" }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold", textAlign: "center" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                WeebQuery
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth="xl">
                <HomePage />
              </Container>
            }
          />
          <Route path="/anime/:id" element={<AnimeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
