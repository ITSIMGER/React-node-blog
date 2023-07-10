  // // Add the searchQuery and searchResults state variables
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // // Add the searchQuery and searchResults state variables
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  
  // // // Function to handle the search form submission
  // // const handleSearchClick = (event) => {
  // //   event.preventDefault();

  // //   // Get the search query from the form
  // //   // const query = event.target.elements.query.value;
  // //   const query = event.target.value;

  // //   // Make a GET request to the /posts/searchall route
  // //   axios.get('/posts/searchall', {
  // //     params: {
  // //       query: query
  // //     }
  // //   })
  // //     .then(function (response) {
  // //       // Handle the successful response
  // //       setSearchResults(response.data);
  // //     })
  // //     .catch(function (error) {
  // //       // Handle any errors
  // //       console.error(error);
  // //     });
  // // };



  // // // Add the handleSearchClick event handler function
  // // const handleSearchClick = async () => {
  // //   try {
  // //     // Send a GET request to the "/posts/search" endpoint to search for posts
  // //     const res = await axios.get("/posts/searchall", {
  // //       params: {
  // //         query: searchQuery,
  // //       },
  // //     });

  // //     // Update the searchResults state variable with the search results
  // //     setSearchResults(res.data);
  // //   } catch (err) {
  // //     console.error(err);
  // //   }
  // // };

  // const handleSearchClick = async (e) => {
  //   const searchValue = e.target.value;
  //   const { res } = await axios.get(`/api/posts?search=${searchValue}`);
  //   // The subset of posts is added to the state that will trigger a re-render of the UI
  //   setSearchResults(res.data); 
  // };


     
//  {/* Add the search bar
//         <input
//           type="text"
//           name="query"
//           placeholder="Search"
//           className="topSearchInput"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
      
//         <button className="topSearchButton" 
//         type="submit" 
//         onClick={handleSearchClick}>Search</button>


//         <div className="searchResults">
//         {searchResults.map((result) => (
//         <div className="searchResult">
//         <Link to={`/posts/${result.id}`}>
//         <h3>{result.title}</h3>
//         <p>{result.desc}</p>
//         </Link>
//         </div>
//         ))}
//         </div> */}
