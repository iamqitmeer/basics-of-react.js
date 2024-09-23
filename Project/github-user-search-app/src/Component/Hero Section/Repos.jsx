import { Button } from "@nextui-org/react";
import React from "react";

function Repos() {
  return (
    <div className="bg-gray-50">
      <div className="flex items-center justify-between w-[400px]">
        <h1>30-days-javascript-challenge-with-chai-aur-code</h1>
        <Button color="primary" variant="bordered">
          Public
        </Button>
      </div>
      <p>
        A repository documenting my journey through Hitesh Choudhary's 30-day
        JavaScript challenge from 'Chai aur Code.' This repo includes core
        subjects, related questions, DSA, and projects. Accepting the challenge
        to become a JavaScript pro in 30 days!
      </p>
    </div>
  );
}

export default Repos;
