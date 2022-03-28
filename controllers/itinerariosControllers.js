const Itinerarios = require("../models/Itinerarios");
const City = require("../models/cities");

const ItinerariosController = {
  getitinerarios: async (req, res) => {
    try {
      const itinerario = await Itinerarios.find();
      res.json({ success: false, response: { itinerario } });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Algo anda mal" });
    }
  },

  getOneItinerario: async (req, res) => {
    const id = req.params.id;
    try {
      const itinerario = await Itinerarios.findOne({ _id: id });
      res.json({ success: false, response: { itinerario } });
    } catch (err) {
      console.log(err);
      res.json({
        success: false,
        message: "algo a salido mal",
      });
    }
  },
  createItinerarios: async (req, res) => {
    const { imagen, image, name, price, duration } = req.body;
    new Itinerarios({
      image,
      imagen,
      name,
      price,
      duration,
    })
      .save()
      .then((respuesta) => res.json({ respuesta }));
  },

  deleteItinerarios: async (req, res) => {
    const id = req.params.id;

    await Itinerarios.findOneAndDelete({ _id: id });
  },

  updateItinerarios: async (req, res) => {
    const id = req.params.id;
    const itinerarios = req.body.dataInput;

    let ciudaddb = await Itinerarios.findOneAndUpdate({ _id: id }, itinerarios);
  },

  LikeAndDislike: async (req, res) => {
    const id = req.params.id;
    const user = req.user.id;
    const cityid = req.params.cityId;
    let itinerario;
    let error = null;
    let allitinerarios;
    let allcities;

    try {
      itinerario = await Itinerarios.findOne({ _id: id });

      if (itinerario.likes.includes(user)) {
        await Itinerarios.findByIdAndUpdate(
          { _id: id },
          { $pull: { likes: user } },
          { new: true }
        );
        console.log("estoy aqui");
        allcities = await City.findOne({ _id: cityid }).populate("Itinerarios");
        allitinerarios = allcities.Itinerario;
        res.json({ success: true, response: allitinerarios });
      } else {
        await Itinerarios.findByIdAndUpdate(
          { _id: id },
          { $push: { likes: user } },
          { new: true }
        );
        allcities = await City.findOne({ _id: cityid }).populate("Itinerarios");
        allitinerarios = allcities.Itinerarios;
        res.json({ success: true, response: allitinerarios });
      }
    } catch (e) {
      error = e;
      res.json({ success: false, response: error });
    }
  },
};
module.exports = ItinerariosController;
