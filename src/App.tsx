import React from "react";
import { Header } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="bg-bodyBackground min-h-screen text-white">
      <Header />
      <div className="max-w-[1400px] mx-auto">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
