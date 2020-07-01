const edificiosCtrl = {};
const Edificio = require("../models/Edificio");

edificiosCtrl.renderEdificioForm = (req, res) => {
  res.render("edificios/new-edificio");
};

edificiosCtrl.createEdificio = async (req, res) => {
  const { nombre } = req.body;
  const newEdificio = new Edificio({ nombre });
  await newEdificio.save();
  req.flash("success_msg", "Edificio agregada correctamente");
  res.redirect("/edificios");
};

edificiosCtrl.renderEdificios = async (req, res) => {
  const edificios = await Edificio.find().sort({ createdAt: "desc" });
  res.render("edificios/all-edificios", { edificios });
};

edificiosCtrl.renderEditForm = async (req, res) => {
  const edificio = await Edificio.findById(req.params.id);
  res.render("edificios/edit-edificio", { edificio });
};

edificiosCtrl.updateEdificio = async (req, res) => {
  const { nombre } = req.body;
  await Edificio.findByIdAndUpdate(req.params.id, { nombre });
  req.flash("success_msg", "Edificio actualizada correctamente");
  res.redirect("/edificios");
};

edificiosCtrl.deleteEdificio = async (req, res) => {
  await Edificio.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Edificio eliminada correctamente");
  res.redirect("/edificios");
};

module.exports = edificiosCtrl;
