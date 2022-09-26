
module.exports = {
    postImage: async (req, res) => {
        console.log("Post made")
        console.log(req.file);
        res.send('testImage')
    
    }
}