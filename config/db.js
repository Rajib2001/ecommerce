import mongoose from "mongoose";
import colors from "colors"
const connectDB=async()=>{
    try {

        const conn=await mongoose.connect(process.env.MONGO_URL)

        console.log(`Mongodb connection successfully on ${conn.connection.host}`.bgMagenta.white)
        


    } catch (error) {
        console.log(`Mongodb connection failed ${error}`.bgRed.white);
        
    }

}


export default connectDB;