const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(url);

async function main(){
    await client.connect();
    
    const database = client.db('Human_Resource');
    const collection = database.collection('employee');

    const data = {
        "yearGrad":{ $gt: "2015" },
        "overallExp":{$gte : "1"}

    }

    const response =  await collection.find(data).toArray();

    console.log("response...",response)
}
main()
