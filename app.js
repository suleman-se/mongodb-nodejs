const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const dbname = "bank";
const collectionName = "accounts";
const db = client.db(dbname);
const AccountCollection = db.collection(collectionName);

const connectToDB = async () => {
    try {
        await client.connect();
        console.log("Connected to the database");
    } catch (e) {
        console.error(e);
    }
}

const sampleAccount = {
    name: "John Doe",
    balance: 1000,
    accuntType: "savings",
    currency: "USD",
    account_id: "1234567890",
    last_updated: new Date(),
}

const main = async () => {
    await connectToDB();
    const result = await AccountCollection.insertOne(sampleAccount);
    console.log({result});
    // const query = {name: "John Doe"};
    // const result = await

    await client.close();
}

main();