let collection = require('../models/fairway')
function postFairway(req, res) {
    anime = req.body;
    collection.postAnime(fairway, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, messsage: 'post successfull done' })
        }
    });
}
function getAllFairway(req, res) {
    collection.getAllFairway((err, cards) => {
        if (err) {
            console.error(err);
            return res.statusCode(500).send('Error ');
        }
        res.render('index', { cards });
    })
}
function getAllFairway(req, res) {
    collection.getAllFairway((error, result) => {
        if (!error) {
            res.json({ statusCode: 200, data: result, messsage: 'post successfull done' })
         }
     })
 }
module.exports = { postFairway, getAllFairway }