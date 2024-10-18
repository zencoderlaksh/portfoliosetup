import React from "react";
import { useSmoothScroll } from "./useSmoothScroll"; // Ensure this path points to where you saved the hook
import AppRoutes from "./routes/AppRoutes";
import "../src/styles/global.css";

const App = () => {
  return (
    <div id="main-container" data-scroll-container>
      {/* Your App Routes */}
      <AppRoutes />
    </div>
  );
};

export default App;
