const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() =>{
        console.log("Connection Successful.");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp1")
}

let allChats = [
    {
        from:"Neha",
        to:"Preeti",
        msg:"send me notes for the exam.",
        created_at: new Date(),
    },
    {
        from:"Rohit",
        to:"Mohit",
        msg:"Teach me JS callbacks.",
        created_at: new Date(),
    },
    {
        from:"Amit",
        to:"Sumit",
        msg:"All the Best.",
        created_at: new Date(),
    },
    {
        from:"Anita",
        to:"Ramesh",
        msg:"Bring me some fruits.",
        created_at: new Date(),
    },
    {
        from:"Peter",
        to:"Tony",
        msg:"I love you 3000.",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);