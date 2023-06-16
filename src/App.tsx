import { BookProvider } from "./context/bookContext";
import RoutesMain from "./pages/routes";

function App() {
  return (
    <BookProvider>
      <RoutesMain />
    </BookProvider>
  );
}

export default App;
