import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import contacts from "./User";

function App() {
  let [contactList, setContactList] = useState(contacts);
  let [filter, setFilter] = useState();
  let [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="w-full h-screen p-12 bg-violet-200">
      <h1 className="text-4xl text-center font-bold">Contact Keeper</h1>
      <div className="flex items-center justify-evenly">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="m-6 w-[83%] p-3 rounded-xl px-6 border-none outline-none"
          type="search"
          placeholder="Search contacts"
        />
      </div>

      <div className="flex justify-evenly">
        <p className="font-bold text-xl">First Name</p>
        <p className="font-bold text-xl">Last Name</p>
        <p className="font-bold text-xl">Gender</p>
        <p className="font-bold text-xl">Skills</p>
        <p className="font-bold text-xl">Email</p>
        <p className="font-bold text-xl">Skills</p>
      </div>

      {contactList.filter((item) => {
        return input.toLowerCase() == "" ? item : item.first_name.toLowerCase().includes(input)
      }).map((list) => {
        return (
          <div key={list.id} className=" flex justify-evenly mt-4">
            <p className="text-left">{list.first_name}</p>
            <p className="text-left">{list.last_name}</p>
            <p>{list.gender}</p>
            <p>{list.skills}</p>
            <p>{list.email}</p>
            <p>{list.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
