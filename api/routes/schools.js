const router = require("express").Router();
const Schools = require("../models/Schools");

// register new school
router.post("/", async (req, res) => {
    try {
        const schools = await Schools(req.body).save();
        res.status(200).send({data: schools, message: "School registered successfully"})
    } catch (error) {
        // res.status(500).send({message: "Internal Server Error"})
        res.status(500).json(error);
        console.log(error)
    }
})


// getting registered schools list
router.get("/", async (req, res) => {
    try {
        const schools = await Schools.find();
        res.status(200).send({data: schools})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})

// DELETE POST
// router.delete(async (req,res)=>{
//     try{
//     const schools = await Schools.findById(req.params.id);
// //     if(post.username === req.body.username){
        
//     //  try{
//         await schools.delete();
//         res.status(200).json("Post has been deleted...")
//     //  }
// // catch(err){
// //          res.status(500).json(err);
// //      console.log("error is coming-------------->")

// //      }
// //  }else{
// //      res.status(401).json("You can delete only your post!")
// //  }
//  }catch(err){
//      res.status(500).json(err);
//      console.log("error is coming from routes")
//  }
//  });
 

router.delete("/", async (req,res)=>{
    try{
    const schools = await Schools.findById(req.params.id);
//     if(post.username === req.body.username){
        
//      try{
//         await post.delete();
//         res.status(200).json("Post has been deleted...")
//      }catch(err){
//          res.status(500).json(err);
//      }
//  }else{
//      res.status(401).json("You can delete only your post!")
//  }
        await schools.delete();
        res.status(200).json("Post has been deleted...");
        alert("Deleted succesfully")
 }catch(err){
     res.status(500).json(err)
 }
 });
 

module.exports = router;
