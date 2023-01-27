const router = require("express").Router();
const Schools = require("../models/Schools");




// register new school
// router.post("/", async (req, res) => {
//     try {
//         const schools = await Schools(req.body).save();
//         res.status(200).send({data: schools, message: "School registered successfully"})
//     } catch (error) {
//         // res.status(500).send({message: "Internal Server Error"})
//         res.status(500).json(error);
//         console.log(error)
//     }
// })
 




router.post('/', async(req, res)=>{
    console.log(req.body)
    const data = new Schools(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Oops! School Registration Failed",
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "School Registered Succesfully",
            data: result
        })
    }
})


// getting registered schools list
// router.get("/", async (req, res) => {
//     try {
//         const schools = await Schools.find();
//         res.status(200).send({data: schools})
//     } catch (error) {
//         res.status(500).send({message: "Internal Server Error"})
//     }
// })

// DELETE POST
// router.delete(async (req,res)=>{
    // try{
    // const schools = await Schools.findById(req.params.id);
//     if(post.username === req.body.username){
        
    //  try{
        // await schools.delete();
        // res.status(200).json("Post has been deleted...")
    //  }
// catch(err){
//          res.status(500).json(err);
//      console.log("error is coming-------------->")

//      }
//  }else{
//      res.status(401).json("You can delete only your post!")
//  }
//  }catch(err){
//      res.status(500).json(err);
//      console.log("error is coming from routes")
//  }
//  });
 

// router.delete("/", async (req,res)=>{
//     try{
//     const schools = await Schools.findById(req.params.id);
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
//         await schools.delete();
//         res.status(200).json("Post has been deleted...");
//         alert("Deleted succesfully")
//  }catch(err){
//      res.status(500).json(err)
//  }
//  });
 
// router.delete("/:id", async (req, res)=>{
//     console.log(req.params.id);
//     const data = await dbConnect();
//     const result = await data.deleteOne({_id: req.params.id});
//     const data2 = delete()
// res.send(result)

// try{
//     const deleteSchool = await Schools.findByIdAndDelete(req.params.id)
//     // const id = req.params.id
//     if(!req.params.id){
//         return res.status(400).send()
//     }
//     res.send(deleteSchool)
// }catch(e){
// res.status(500).send(e)
// }
// })



// router.patch("/:id", async (req, res)=>{
//     try{
//     const _id = req.params.id;
//     const updateSchools = await Schools.findByIdAndUpdate(_id, req.body, {
//         new : true
//     });
//     res.send(updateSchools)
//     }catch(e){
//     res.status(400).send(e)

//     }
// })


// get record
router.get("/", async (req, res) =>{
    try{
    const result = await Schools.find()
    if(!result){
        res.json({
            status: "FAILED",
            message: "Record Not Found"
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Records Available",
            data: result
        })
    }
}
catch (e){
    console.log(e)
}
})


// get single records
router.get("/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const result = await Schools.findById(_id)
        if(!result){
            res.json({
                status: "FAILED",
                message: "Record Not Found  on this ID"
            })
        }
        else{
            res.json({
                status: "SUCCESS",
                message: "Record Found",
                data: result
            })
        }
    }
    catch (e){
        console.log(e)
    }
})
// update records
router.put("/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const result = await Schools.findByIdAndUpdate(_id, req.body, {new: true})
        console.log(result)
        if(!result){
            res.json({
                status: "FAILED",
                message: "Records Updation Failed",
                data: result
            })
        }
        else{
            res.json({
                status: "SUCCESS",
                message: "Records Updated Succesfully",
                data: result
            })
        }
    }
    catch (e){
        res.send(e)
    }
})
// delete records
router.delete("/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const result = await Schools.findByIdAndDelete(_id)
        if(!result){
            res.json({
                status: "FAILED",
                message: "Records Deletion Failed"
            })
        }
        else{
            res.json({
                status: "SUCCESS",
                message: "Records Deleted Succesfully",
            })
        }
    }
    catch (e){
        res.send(e)
    }
})


module.exports = router;
