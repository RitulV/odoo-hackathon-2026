import { RouterProvider } from "react-router-dom";
import Home, { router } from "./pages/Home";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
