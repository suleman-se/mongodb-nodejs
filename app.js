const { MongoClient, ObjectId } = require('mongodb');
const uri = require('./atlas_uri');

const client = new MongoClient(uri);
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

//// Sample data to insert One
// const sampleAccount = {
//     name: "John Doe",
//     balance: 1000,
//     accuntType: "savings",
//     currency: "USD",
//     account_id: "1234567890",
//     last_updated: new Date(),
// }

//// Sample data to insert Many
// const sampleAccount = [{
//     name: "kate Doe",
//     balance: 900,
//     accuntType: "savings",
//     currency: "USD",
//     account_id: "1234567891",
//     last_updated: new Date(),
// },
// {
//     name: "lucy Doe",
//     balance: 11000,
//     accuntType: "savings",
//     currency: "USD",
//     account_id: "1234567892",
//     last_updated: new Date(),
// },
// ]

//// Query to find all documents
// const documentToFind = {
//     balance: {$gt: 1000}
// }

//// Query to find one document
const documentToFind = {_id: new ObjectId('678a62246754edb9960e66c3')}

const main = async () => {
    await connectToDB();
    //// Insert One
    // const result = await AccountCollection.insertOne(sampleAccount);

    //// Insert Many
    // const result = await AccountCollection.insertMany(sampleAccount);

    //// Query to find all documents
    // const result = await AccountCollection.find(documentToFind);
    // const docCount = await AccountCollection.countDocuments(documentToFind);
    // const allDocs = await result.toArray();
    // console.log({docCount});

    //// Query to find one document
    const result = await AccountCollection.findOne(documentToFind);

    console.log({result});
    // const query = {name: "John Doe"};
    // const result = await

    await client.close();
}

main();