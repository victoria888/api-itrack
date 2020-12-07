const express = require("express");

const router = express.Router();

const Shiping = require("../models/Shiping");


//Post shipping details
router.post("/", async (req, res) => {
  const postShip = new Shiping({
    senderName: req.body.senderName,
    recipientName: req.body.recipientName,
    senderLocation: req.body.senderLocation,
    destinationLocation: req.body.destinationLocation,
    senderPhone: req.body.senderPhone,
    destinationPhone: req.body.destinationPhone,
    packageLocation: req.body.packageLocation,
    senderEmail: req.body.senderEmail,
    destinationEmail: req.body.destinationEmail,
    senderState: req.body.senderState,
    destinationState: req.body.destinationState,
    senderLga: req.body.senderLga,
    destinationLga: req.body.destinationLga,
    senderCity: req.body.senderCity,
    destinationCity: req.body.destinationCity,
    price: req.body.price,
    weight: req.body.weight,
    status: req.body.status,
  });
  try {
      const ship = await postShip.save();
      console.log(ship.trackId);
      res.json(ship);
  } catch (error) {
    res.json({ message: error });
  }
});

//Get shipping details
router.get("/", async (req, res) =>{
    try {
        const getShip = await Shiping.find();
        res.json(getShip);
    } catch (error) {
        res.json({message: error});
    }
});

//Get shipping details by trackId
router.get("/:id", async (req, res) =>{
    try {
        const getShipById = await Shiping.findOne({
            trackId: req.params.id
        });
            res.json(getShipById);  
      
    } catch (error) {
        res.json({message: error});
    }
});

//Update shipping details
router.patch("/:id", async (req, res) =>{
    try {
        const updatedPost = await Shiping.updateMany(
            {trackId: req.params.id},
            {$set:{status: req.body.status, packageLocation: req.body.packageLocation}}

        );
        res.json(updatedPost);
        
    } catch (error) {
        res.json({message: error});
    }
      
})

//Delete shipping details
router.delete('/:id', async (req, res) => {
    try {
        const removeShip = await Shiping.deleteOne({
            trackId:req.params.id
        });
        res.json(removeShip);
    } catch (error) {
        res.json({message:error});
    }
})
module.exports = router;