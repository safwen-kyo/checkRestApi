const express=require('express')
const router=express.Router()
router.get ('/test', (req,res)=>{
    res.json({message: "Hello world"})
})
// get all users
router.get('/users',function(req,res){
      
    User.find({},(err,users)=>{
        if(err){
            res.send('something went wrong !!')
            next();
            
        }
      res.json (users)
    })
})
// add user
router.post('/user', async (req, res) => {
  const { name, email, age} = req.body
  try {
      const newUser = new User({ name, email, age})
      const result = await newUser.save()
      res.json({ user:result, msg: "user added" })
  } catch (error) {
      res.status(500).json({ errors: error })
  }
})
//Update user 
router.put("/:id", async (req, res) => {
    try {
      const result = await User.updateOne({ _id: req.params.id },{$set:{...req.body}});

      res.json({ user:result, msg: "User Updated Successufly" })
        
    } catch (error) {
      res.status(400).send("Can not Update User");
    }
  });
// delete user by Id
router.delete('/:id', async (req, res)=>{

    try {
        const _id =req.params.id
     const result = await   User.findByIdAndDelete({_id}) 
        res.json({ user:result, msg: "user deleted " })
    } catch (error) {
        res.status(400).json({ errors: error })
    }
})
    
module.exports=router