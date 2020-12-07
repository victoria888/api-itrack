const express = require("express");

const router = express.Router();

const Track = require("../models/Track");

router.get("/", async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:trackId", async (req, res) => {
  try {
    const track = await Track.findById(req.params.trackId);
    res.json(track);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Track.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title} }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/", async (req, res) => {
  const track = new Track({
    trackId: req.body.trackId,
    location: req.body.location,
    remark: req.body.remark,
    status: req.body.status,
  });

  try {
    const savedPost = await track.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
