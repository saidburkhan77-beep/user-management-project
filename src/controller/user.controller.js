import User from '../schema/user.schema.js'
export async function createUser(req, res) {
    const { username, phoneNumber } = req.body;
    const existUsername = await User.findOne({username})
    if(existUsername){
        return res.status(409).json({
            message:'Username. already exists'
        });
    }
    const existsPhone = await User.findOne({ phoneNumber })
    if(existsPhone){
        return res.status (409).json({
            message:'Phone number already exists'
        });
    }
    const user = await User.create(req.body);
    return res.status(201).json(user)
}

export async function  findAll(req,res) {
    const users = await User.find();
    return res.status(200).json(users)
}

export async function  findById(req,res) {
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({
            message:'User not found'
        });
    }
    return res.status(200).json(user)
}
export async function update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })
    return res.status(200).json(({message:'success' }))
}

export async function  remove(req,res) {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message:'success '})
}
