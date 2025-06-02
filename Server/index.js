const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@usercluster.ol4exsn.mongodb.net/?retryWrites=true&w=majority&appName=userCluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db("plantDB");
    const plantsCollection = database.collection("plants");

    app.post('/plants', async (req, res) => {
      const plant = req.body;
      const result = await plantsCollection.insertOne(plant);
      res.send(result);
    });

    // app.get('/plants/:email', async (req, res) => {
    //   const userEmail = req.query.email;
    //   const query = userEmail ? { email: userEmail } : {};
    //   const cursor = await plantsCollection.findOne(query);

    //   res.send(cursor ? [cursor] : []); // Return an array for consistency
    // });

    app.get('/plants', async (req, res) => {
      const userEmail = req.query.email;
      const query = userEmail ? { email: userEmail } : {};
      const plants = await plantsCollection.find(query).toArray();
      res.send(plants);
    });

    app.patch('/plants/:id', async (req, res) => {
      const id = req.params.id;
      const {
        email, image, plantName, category, description,
        careLevel, wateringFrequency, lastWatered, nextWatering,
        healthStatus, userName
      } = req.body;

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          email,
          image,
          plantName,
          category,
          description,
          careLevel,
          wateringFrequency,
          lastWatered,
          nextWatering,
          healthStatus,
          userName
        }
      };

      const result = await plantsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete('/plants/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await plantsCollection.deleteOne(query);
      res.send(result);
    })

    app.get('/plants/:id', async (req, res) => {
      const id = req.params.id;
      const plant = await plantsCollection.findOne({ _id: new ObjectId(id) });
      res.send(plant);
    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});