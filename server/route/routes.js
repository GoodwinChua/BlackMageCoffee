var express = require('express');
var router = express.Router();

const CoffeeBean = require('../model/coffeebeans.js');

//read
router.get('/coffeebeans', (req, res, next) => {
    // db
    // res.send('test get route');
    CoffeeBean.find(function (err, coffeebeans) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(coffeebeans);
        }
    })
});

//create
router.post('/coffeebean', (req, res, next) => {
    // db
    let newCoffeeBean = new CoffeeBean({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });

    newCoffeeBean.save((err, item) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ msg: 'Item has been added to db' });
        }
    });
});

//update
router.put('/coffeebean/:id', (req, res, next) => {
    // db 
    CoffeeBean.findOneAndUpdate({ _id: req.params.id },
        {
            $set: {
                itemName: req.body.itemName,
                itemQuantity: req.body.itemQuantity,
                itemBought: req.body.itemBought
            }
        },
        {
            new: true,
        },
        function (err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        }

    );

});

//delete
router.delete('/coffeebean/:id', (req, res, next) => {
    // db
    CoffeeBean.deleteOne({ _id: req.params.id },
        function (err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
});


module.exports = router;