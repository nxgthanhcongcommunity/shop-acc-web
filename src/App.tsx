import React from "react";
import { Header } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="min-h-screen bg-bodyBackground text-white">
      <Header />
      <div className="mx-auto max-w-[1400px] bg-[#080325]">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
