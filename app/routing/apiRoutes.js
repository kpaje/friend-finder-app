// ROUTES
app.get("/api/friends", function (req, res) {
    res.json(friends);
});
app.post("/api/friends", function (req, res) {
    var jsonDomPost = req.body;
    console.log(jsonDomPost);
    arrayName.push(jsonDomPost);
    res.json(jsonDomPost);
});