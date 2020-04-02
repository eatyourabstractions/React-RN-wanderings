const express = require('express');
const router = express.Router();

// Item 'mongoose' Model

const Vote = require('../../models/Vote');

// GET api/Votes
// get all Votes
router.get('/', (req, res) =>{
    Vote.find()
        .then(v => {
            res.json(v)})
});

router.post('/', async (req, res) =>{
   try{
    console.log(req.body)
    const myArr = await Vote.find(req.body)
    console.log(myArr)
    const choice = myArr[0]
    choice.points += 1
    const result = await choice.save()
    console.log(result)
    res.send(result)


   }catch (err){
       res.status(500).send(err)

   }
    
});

router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;