const express = require('express')
const router = express.Router()

const { Details } = require('../models/detailsModel')

router.route('/store')
.post(async (req,res) => {
    try {
 
         //generate user instance
         const details = new Details({
             ...req.body
         })
 
         //save user to db
         const doc = await details.save()

         res.status(200).send(doc)
    } catch(error) {
        res.status(400).json({message: 'Error', error: error})
    }
})

module.exports = router