const router = require("express").Router();
const Song = require('../models/song');

// Create song
router.post("/", async (req, res) => {
    try {
        const song = await Song(req.body).save();
        res.status(200).send({data: song, message: "Song created successfully"})
    } catch (error) {
        // res.status(500).send({message: "Internal Server Error"})
        res.status(500).json(error);
        console.log(error)
    }
})


    // const newPost = await new Post(req.body);
    // try{
    //     const savedPost = await newPost.save();
    //     res.status(200).json(savedPost);
    // }catch(err){
    //     res.status(500).json(err)
    // }

// });

// });
/////////////////////////

// Get all songs
router.get("/", async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).send({data: songs})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;