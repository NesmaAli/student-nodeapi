var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/iti", function(err, client) {
    if (!err) {
        console.log("We are connected");
        const db = client.db('iti');

        db.collection('students').find({ name: "nesma" }).toArray().then((docs) => {
            console.log(JSON.stringify(docs));
        }, (err) => {
            console.log("cann't fetch", err);
        });
        // db.collection('students').insertOne({
        //     name: 'noha',
        //     age: 29
        // }, (err, result) => {
        //     if (err) {
        //         console.log("cann't insert");

        //     } else {
        //         console.log(JSON.stringify(result.ops));
        //     }
        // });
        client.close();
    }


});