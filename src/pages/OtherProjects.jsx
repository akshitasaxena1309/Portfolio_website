import React, { useEffect, useState } from "react";

function OtherProjects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/akshitasaxena1309/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div
        name="OtherProject"
        className="w-full font-serif h-auto mx-auto pt-10 pb-12"
      >
        <div className="flex justify-center">
          <h1 className="text-gray-700 font-bold text-4xl inline-block px-4 py-2 relative underline-on-hover">
            Other Projects
          </h1>
        </div>
        {data.map((repo) => (
          <div
            className="flex
        pt-12"
            key={repo.id}
          >
            <div className="w-1/2 text-xl md:text-2xl text-gray-800 font-semibold">
              <div className="flex flex-row justify-center">
                <span className=" px-2 relative underline-on-hover">
                  {repo.name}
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <div className="s flex justify-center">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border text-gray-700 border-gray-700 font-bold py-2 px-6 rounded hover:bg-gray-700 hover:text-gray-300">
                    Click Here
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OtherProjects;
