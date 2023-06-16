import { BookProvider } from "./context/bookContext";

function App() {
  return (
    <BookProvider>
      <h1>Book Organization</h1>
    </BookProvider>
  );
}

export default App;
