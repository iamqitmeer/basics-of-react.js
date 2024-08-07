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

// import React from "react";

// const App = () => {
//   const books = [
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       genre: "Fiction",
//       year: 1960,
//       isbn: "978-0061120084",
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       genre: "Dystopian",
//       year: 1949,
//       isbn: "978-0451524935",
//     },
//     {
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       genre: "Romance",
//       year: 1813,
//       isbn: "978-1503290563",
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Fiction",
//       year: 1925,
//       isbn: "978-0743273565",
//     },
//     {
//       title: "Moby Dick",
//       author: "Herman Melville",
//       genre: "Adventure",
//       year: 1851,
//       isbn: "978-1503280786",
//     },
//     {
//       title: "War and Peace",
//       author: "Leo Tolstoy",
//       genre: "Historical Fiction",
//       year: 1869,
//       isbn: "978-1420959712",
//     },
//     {
//       title: "The Catcher in the Rye",
//       author: "J.D. Salinger",
//       genre: "Fiction",
//       year: 1951,
//       isbn: "978-0316769488",
//     },
//     {
//       title: "The Lord of the Rings",
//       author: "J.R.R. Tolkien",
//       genre: "Fantasy",
//       year: 1954,
//       isbn: "978-0544003415",
//     },
//     {
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       genre: "Fantasy",
//       year: 1937,
//       isbn: "978-0547928227",
//     },
//     {
//       title: "Brave New World",
//       author: "Aldous Huxley",
//       genre: "Dystopian",
//       year: 1932,
//       isbn: "978-0060850524",
//     },
//     {
//       title: "The Alchemist",
//       author: "Paulo Coelho",
//       genre: "Adventure",
//       year: 1988,
//       isbn: "978-0061122415",
//     },
//     {
//       title: "The Odyssey",
//       author: "Homer",
//       genre: "Epic",
//       year: "c. 8th century BC",
//       isbn: "978-0140268867",
//     },
//     {
//       title: "Crime and Punishment",
//       author: "Fyodor Dostoevsky",
//       genre: "Philosophical Fiction",
//       year: 1866,
//       isbn: "978-0486415871",
//     },
//     {
//       title: "Jane Eyre",
//       author: "Charlotte Brontë",
//       genre: "Gothic Fiction",
//       year: 1847,
//       isbn: "978-0141441146",
//     },
//     {
//       title: "The Picture of Dorian Gray",
//       author: "Oscar Wilde",
//       genre: "Philosophical Fiction",
//       year: 1890,
//       isbn: "978-0141439570",
//     },
//     {
//       title: "The Brothers Karamazov",
//       author: "Fyodor Dostoevsky",
//       genre: "Philosophical Fiction",
//       year: 1880,
//       isbn: "978-0374528379",
//     },
//     {
//       title: "Wuthering Heights",
//       author: "Emily Brontë",
//       genre: "Gothic Fiction",
//       year: 1847,
//       isbn: "978-0141439556",
//     },
//     {
//       title: "The Divine Comedy",
//       author: "Dante Alighieri",
//       genre: "Epic Poetry",
//       year: "c. 1320",
//       isbn: "978-0140448955",
//     },
//     {
//       title: "Frankenstein",
//       author: "Mary Shelley",
//       genre: "Gothic Fiction",
//       year: 1818,
//       isbn: "978-0141439471",
//     },
//     {
//       title: "The Count of Monte Cristo",
//       author: "Alexandre Dumas",
//       genre: "Adventure",
//       year: 1844,
//       isbn: "978-0140449266",
//     },
//   ];

//   console.log(books);

//   return (
//     <div className="flex items-center justify-center bg-[#c3c3ec] w-full h-full flex-wrap gap-10 p-12">
//       {books.map((data) => {
//         return (
//           <div className="w-[600px] h-[200px] p-6 flex  justify-center flex-col  bg-[#614db8] text-white rounded-2xl">
//             <p className="text-3xl font-medium">{data.author}</p>
//             <h1 className="text-5xl font-black">{data.title}</h1>
//             <p className="font-medium text-lg">
//               {data.genre} - Was Published On {data.year}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react'

function App() {

  let [input,setInput] = useState("")

  let handleClick = () => {
console.log(input);
  }

  return (
    <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter Your Name.' className='m-4' />
        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default App
