const {connect: connect1} = require('mongoose')
const {MongoClient, ServerApiVersion} = require("mongodb");

async function connect() {
    try {
        await connect1(
            'mongodb+srv://kriptoexchange:gfL5Hc4tbPtNJ3jz@cluster0.8pxnkzu.mongodb.net/kriptoExchange?retryWrites=true&w=majority'
            // 'mongodb+srv://fanglee:fanglee1808@fanglee.ofypspm.mongodb.net/?retryWrites=true&w=majority'
        );
        // const uri = "mongodb+srv://fanglee:fanglee1808@fanglee.ofypspm.mongodb.net/?retryWrites=true&w=majority";
        // const client = new MongoClient(uri, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     serverApi: ServerApiVersion.v1
        // });
        // client.connect(err => {
        //     const collection = client.db("Kripto-3D").collection("Users");
        //     // perform actions on the collection object
        //     client.close();
        // });
        console.log('\nConnected to DataBase');
    } catch (err) {
        console.log('Disconnect');
    }
}

module.exports = {connect}