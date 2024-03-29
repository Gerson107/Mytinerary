const Itinerary = require("../models/Itinerarios");
const City = require('../models/cities');

const commentsControllers = {
  getComments: async (req, res) => {
    const { id } = req.params;
    try {
     const comments = await Itinerary.findById(id).populate("comments.userId");
      res.json({ success: true, response: comments, error: null });
    } catch (error) {
      res.json({ success: false, response: null });
    }
  },
  addComment: async (req, res) => {
    const {itinerario, comment, cityId } = req.body.comment
    const user = req.user._id
    const profile = req.user.profile
    const name = req.user.fullName
  
    try {
     await Itinerary.findOneAndUpdate(
        { _id: itinerario }, {$push: {comments: {comentary: comment, userId: user, profile: profile, name: name, date: Date.now()}}}, {new: true})
        .then(response => res.json({ success: true, response: response, message:"Gracias por dejarnos tu comentario"}))  
      } catch (e) {
      res.json({ success: false, message:"algo ha salido mal" });
    }
  },
  deleteCommen: async (req, res) => {
    const { comment, commentId, cityId } = req.body.comment
    const id = req.params.id
    const user = req.user._id
    try {
      await Itinerary.findOneAndUpdate(
        {"comments._id": commentId},{$pull: {comments: {_id: commentId}}}, {new: true})
        .then(response => res.json({ success: true, response: response, message:"Has eliminado tu comentario"}))
        
    } catch (error) {
      console.log(error)
      res.json({
        success: false, message: "Algo a salido mal"
      });
    }
  },
  updateComment: async (req, res) => {
    const  {comment, commentId, cityId}  = req.body.comment
    const user = req.user._id
    try {
      await Itinerary.findOneAndUpdate(
        {"comments._id": commentId },{ $set: { "comments.$.comentary": comment } }, {new: true})
        .then(response => res.json({ success: true, response: response, message:"Has modificado tu comentario"}))
      } catch (e) {
      console.log(e)
      res.json({
        success: true, message: "Algo a salido mal"
      });
    }
  },
};
module.exports = commentsControllers;
