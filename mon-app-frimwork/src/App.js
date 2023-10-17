import logo from "./logo.svg";
import "./App.css";
import Material from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },

  palette: {
    primary: {
      main: orange[500],
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ marginTop: "300px", marginLeft: "200px" }}>
        <Material />
      </div>
    </ThemeProvider>
  );
}

export default App;
