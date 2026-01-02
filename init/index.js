const mongoose = require('mongoose');
const initdata = require('./data.js');
const Listing = require('../models/listing.js');


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>
{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initdb=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"6954bd4e098b89fbdf8b397e"}));
    await Listing.insertMany(initdata.data);
    console.log("Data initialized successfully");
};
// async function initdb() {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initdata.data);
//   console.log("Data was initialized");
// };
initdb();