import React from "react";
import { useSmoothScroll } from "./useSmoothScroll"; // Ensure this path points to where you saved the hook
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  // Apply the smooth scroll hook
  useSmoothScroll();

  return (
    <div id="main-container" data-scroll-container>
      {/* Your App Routes */}
      <AppRoutes />
    </div>
  );
};

export default App;
