import React from "react";

function FilmPage() {
  const [books, setBooks] = React.useState([]);
  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/books/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) =>
        console.error("Error Fehler beim Abrufen Bücher", error)
      );
  }, []);

  return (
    <form action="">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Film Page</h1>
        <input
          type="text"
          placeholder="Enter film name"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
      ihhhj hh
      <h1>
        h
        <h1>
          <h1>
            hh
            <h1>
              <h1>
                <h1>
                  h h
                  <h1>
                    <h1>
                      <h1>
                        <h1>
                          <h1>
                            <h1>
                              <h1>
                                <h1>
                                  <h1>
                                    hh
                                    <table>
                                      zugeteiltenh
                                      <h1>
                                        h
                                        <h1>
                                          <h1>
                                            <h1>
                                              <h1>
                                                <h1>
                                                  <h1></h1>
                                                </h1>
                                              </h1>
                                            </h1>
                                          </h1>
                                        </h1>
                                      </h1>
                                    </table>
                                  </h1>
                                </h1>
                              </h1>
                            </h1>
                          </h1>
                        </h1>
                      </h1>
                    </h1>
                  </h1>
                </h1>
              </h1>
            </h1>
          </h1>
        </h1>
      </h1>
    </form>
  );
}

export default FilmPage;
