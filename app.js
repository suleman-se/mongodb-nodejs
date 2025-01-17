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

const sampleAccount = [{
    name: "kate Doe",
    balance: 900,
    accuntType: "savings",
    currency: "USD",
    account_id: "1234567891",
    last_updated: new Date(),
},
{
    name: "lucy Doe",
    balance: 11000,
    accuntType: "savings",
    currency: "USD",
    account_id: "1234567892",
    last_updated: new Date(),
},
]

const main = async () => {
    await connectToDB();
    const result = await AccountCollection.insertMany(sampleAccount);
    console.log({result});
    // const query = {name: "John Doe"};
    // const result = await

    await client.close();
}

main();