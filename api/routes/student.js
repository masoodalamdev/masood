const router = require("express").Router();
const Student = require("../models/Student");

router.post('/', async(req, res)=>{
    console.log(req.body)
    const data = new Student(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "FAILED",
            message: "Oops! Student Registration Failed",
        })
    }
    else{
        res.json({
            status: "SUCCESS",
            message: "Student Registered Succesfully",
            data: result
        })
    }
})



// get record
router.get("/", async (req, res) =>{
    try{
    const result = await Student.find()
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
        const result = await Student.findById(_id)
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
        const result = await Student.findByIdAndUpdate(_id, req.body, {new: true})
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
        const result = await Student.findByIdAndDelete(_id)
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
