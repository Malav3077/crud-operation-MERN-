import User from "../models/userModel.js"

export const Create = async(req,res)=>{
    try {
      const userData = new User(req.body);
      
      if(!userData){
            return res.status(404).json({message:"User Data Not Found"});
      }

      const savedData = await userData.save()  // save method to data savee
      res.status(200).json({savedData, message:"User Created Successfully"});
      
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getAll =  async(req,res)=>{
    try {
        const userData = await User.find()
         if(!userData){
            return res.status(404).json({message:"User Data Not Found"});
      }
      res.status(200).json(userData);


    } catch (error) {
        res.status(500).json({error:error})
        
        
    }
}


export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)

        if(!userExist){
            return res.status(404).json({message:"User Not Exists"})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error:error})
    }
} 


export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)

        if(!userExist){
            return res.status(401).json({message:"User Not Found"})
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"User Updated Successfully "})
         
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const Delete = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id); // get id

        if(!userExist){
            return res.status(401).json({message:"Data Not Found"})
        }
        await User.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).json({message:"User Deleted Successfully"})

    } catch (error) {
        return res.status(500).json({error:error})
    }
} 