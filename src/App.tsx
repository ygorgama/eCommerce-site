import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import themeDefault from "./styles/themes/default-theme";

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="App">
        <Button
          color="primary"
          size="lg"
          key={"1"}
          type="button"
          children={"Label"}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
