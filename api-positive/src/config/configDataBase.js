import mongoose, { mongo } from "mongoose";

async function connectDataBase() {
    mongoose.connect("mongodb+srv://dbUser:wcwqaXJ9nhsQOiJ8@positiveapi.75v7enb.mongodb.net/PDA_project?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;
