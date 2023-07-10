
//SEARCH
app.get("/posts/searchall", async (req, res) => {
  // Get the search query from the request
  const query = req.query.query;

  try {
    // Use the $text operator in a Post.find() query to search for posts that match the search query
    const posts = await Post.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    // Return the search results
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
