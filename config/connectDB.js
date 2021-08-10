const mongoose=require("mongoose");

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("db successfuly connected")
    } catch (error){
        console.log(error)
    }

}
module.exports=connectDB