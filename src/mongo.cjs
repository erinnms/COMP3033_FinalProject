const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://unluckyem:HJ3ABAE8nfEG3etQ@cluster0.enlix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);

async function main() {
    

    try {
        await client.connect();
        await create(client, 
            {
                name: "Lovely Loft",
                summary: "A charming loft in Paris",
                bedrooms: 1,
                bathrooms: 1
            }
        );
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function connect(){
    await client.connect();
}

async function create(client, item) {
    const result = await client.db("unwrapped").collection("savedTracks").insertOne(item);
    console.log("Created new saved Track in mongo");
}

main().catch(console.error);
