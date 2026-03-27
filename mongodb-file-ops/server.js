const fs = require("fs");
const { MongoClient } = require("mongodb");
async function run() {

const data = JSON.parse(fs.readFileSync("input.json"));

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("TestDB");
const col = db.collection("items");

await col.insertMany(data);

await col.updateOne({ id: 1 }, { $set: { status: "updated" } });

const result = await col.find().toArray();

fs.writeFileSync("output.json", JSON.stringify(result, null, 2));
console.log("✔ Exported Updated Data to output.json");
client.close();
}
run();