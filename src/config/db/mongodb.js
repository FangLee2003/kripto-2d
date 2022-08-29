const {connect: connect1} = require('mongoose')

async function connect() {
    try {
        await connect1(
            'mongodb+srv://kriptoexchange:gfL5Hc4tbPtNJ3jz@cluster0.8pxnkzu.mongodb.net/kriptoExchange?retryWrites=true&w=majority'
            // 'mongodb://localhost:27017'
        );

        console.log('\nConnected to DataBase');
    } catch (err) {
        console.log('Disconnect');
    }
}

module.exports = {connect}