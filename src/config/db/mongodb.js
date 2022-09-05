const {connect: connect1} = require('mongoose')

async function connect() {
    try {
        await connect1(
            // 'mongodb+srv://kriptoexchange:gfL5Hc4tbPtNJ3jz@cluster0.8pxnkzu.mongodb.net/kriptoExchange?retryWrites=true&w=majority'
            'mongodb+srv://fanglee:fanglee1808@fanglee.ofypspm.mongodb.net/?retryWrites=true&w=majority'
        );
        console.log('\nConnected to DataBase');
    } catch (err) {
        console.log('Disconnect');
    }
}

module.exports = {connect}