const mongoose=require("mongoose")
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/Sizzle-Food-Delivery-App-Man")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('registration',logInSchema)

module.exports=LogInCollection