import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Home";
import { TooltipProvider } from "@/components/ui/tooltip";


function App() {
  return (
    <div>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </div>
  );
}

export default App;
