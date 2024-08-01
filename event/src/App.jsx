// import React, { useState } from "react";

// const App = () => {
//   let [text, setText] = useState(true);

//   let handleButton = () => {};

//   return (
//     <div className="bg-blue-950 w-full h-screen flex items-center justify-center flex-col p-6">
//       <h1 className="text-5xl text-blue-300">{text ? "Qitmeer Raza" : ""}</h1>
//       <button
//         onClick={() => setText(!text)}
//         className="text-2xl bg-blue-400 px-8 py-2 rounded-lg m-4"
//       >
//         {text ? "Hide Text" : "Show Text"}
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import boy from "./assets/boy.jpg";

const App = () => {
  let [flag, setFlag] = useState(true);

  return (
    <div className="bg-blue-950 w-full h-screen flex items-center justify-center flex-col p-6">
      {flag ? "" : <img className="w-96" src={boy} />}
      <button
        className="bg-blue-100 font-bold px-6 py-2 rounded-lg m-4"
        onClick={() => setFlag(!flag)}
      >
        {flag ? "Show Image" : "Hide Image"}
      </button>
    </div>
  );
};

export default App;
