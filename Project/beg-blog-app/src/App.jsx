import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let [updateBtnFlag, setUpdateBtnFlag] = useState(false);
  let [currIndex, setCurrIndex] = useState();

  let [blogTitle, setBlogTitle] = useState(() => {
    let rawTitle = localStorage.getItem("blogTitle");
    return rawTitle ? JSON.parse(rawTitle) : [];
  });
  let [blogContent, setBlogContent] = useState(() => {
    let rawContent = localStorage.getItem("blogContent");
    return rawContent ? JSON.parse(rawContent) : [];
  });

  function handleClick() {
    if (title && content) {
      let cloneArrTitle = [...blogTitle];
      cloneArrTitle.push(title);
      setBlogTitle(cloneArrTitle);

      let cloneArrContent = [...blogContent];
      cloneArrContent.push(content);
      setBlogContent(cloneArrContent);
      setContent("");
      setTitle("");
    } else {
      console.error("Error");
    }
  }

  localStorage.setItem("blogTitle", JSON.stringify(blogTitle));
  localStorage.setItem("blogContent", JSON.stringify(blogContent));

  // localStorage.clear()

  function handleDeleteBtn(index) {
    let cloneArrTitle = [...blogTitle];
    let cloneArrContent = [...blogContent];
    cloneArrTitle.splice(index, 1);
    cloneArrContent.splice(index, 1);
    setBlogTitle(cloneArrTitle);
    setBlogContent(cloneArrContent);
  }

  function handleEditBtn(index) {
    let cloneArrTitle = [...blogTitle];
    let cloneArrContent = [...blogContent];
    setTitle(cloneArrTitle[index]);
    setContent(cloneArrContent[index]);

    console.log(index);
    setUpdateBtnFlag(true);
    setCurrIndex(index);
  }

  function updateClick() {
    let cloneArrTitle = [...blogTitle];
    let cloneArrContent = [...blogContent];

    cloneArrContent[currIndex] = content;
    cloneArrTitle[currIndex] = title;

    setBlogTitle(cloneArrTitle);
    setBlogContent(cloneArrContent);

    setUpdateBtnFlag(false);

    setContent("");
    setTitle("");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 flex-col">
      <div className="w-full max-w-[700px] p-6 bg-white rounded-lg shadow-lg">
        <div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog post here"
              rows="6"
              required
            ></textarea>
          </div>
          {updateBtnFlag ? (
            <button
              onClick={updateClick}
              type="button"
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleClick}
              type="button"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      <div className="p-[100px] flex justify-center items-center gap-12 flex-wrap">
        {blogTitle.map((title, index) => (
          <div
            key={index}
            className="p-6 w-[500px] overflow-scroll rounded-2xl shadow-sm shadow-slate-400"
          >
            <h1 className="text-4xl text-[#242424] font-extrabold mb-4 tracking-[-0.1em]">
              {title}
            </h1>
            <div>
              {blogContent[index] ? (
                <p>{blogContent[index]}</p>
              ) : (
                <p>No content available</p>
              )}
            </div>

            <div className="flex items-center justify-end mt-4 mb-4">
              <button
                onClick={() => handleEditBtn(index)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteBtn(index)}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;