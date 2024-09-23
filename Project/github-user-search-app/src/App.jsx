import React from "react";
import Header from "./Component/Header";
import ProfileDetails from "./Component/Hero Section/ProfileDetails";
import Repos from "./Component/Hero Section/Repos";

function App() {
  return (
    <div className="w-full h-full bg-[#141e30]">
      <Header />;
      <div className="flex items-center justify-center">
        <ProfileDetails />
        <div className="w-64 flex-wrap flex items-center justify-center gap-3">
          <Repos />
          <Repos />
          <Repos />
          <Repos />
          <Repos />
          <Repos />
        </div>
      </div>
    </div>
  );
}

export default App;
