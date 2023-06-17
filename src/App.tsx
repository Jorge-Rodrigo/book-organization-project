import { BookProvider } from "./context/bookContext";
import { HomePage } from "./pages/homePage";

function App() {
  return (
    <BookProvider>
      <HomePage />
    </BookProvider>
  );
}

export default App;
