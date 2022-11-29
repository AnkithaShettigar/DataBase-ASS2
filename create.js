const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/"

const client = new MongoClient(url);


async function main(){
    client.connect();
    
    const database = client.db('Human_Resource');
    const collection = database.collection('employee')

}
main()