import { connect } from "mongoose";
import { config } from "dotenv";
config()
 
export async function connectDB() {
    try{
        await connect(process.env.MONGO_URL)
        console.log('Datavase connected')
    }catch(error){
        console.log('Error on conneecting to the database',error);
    }
}
