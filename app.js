const express = require('express')
const app = express()
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cbrown30:Phigammadelta1848@cluster0.lfomp7w.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


let myVariableServer = 'soft coded server data';

app.get('/barry', function (req, res) {
  res.render('index', 
  {
    'myVariableClient' : myVariableServer 
  }
  );
})

app.get('/', function (req, res) {
  res.send('<h1>Hello World From Express & a PaaS/Render</h1>')
})

app.get('/whatever', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



// app.listen(3000)

app.listen(port, () => console.log(`Server is running...on ${ port }` ));