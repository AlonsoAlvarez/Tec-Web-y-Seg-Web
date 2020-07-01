const aspirantesCtrl = {};
const Aspirante = require("../models/Aspirante");

aspirantesCtrl.renderAspiranteForm = (req, res) => {
  res.render("aspirantes/new-aspirante");
};

aspirantesCtrl.createAspirante = async (req, res) => {
  const { nombre, email, phone, municipio, procedencia } = req.body;
  const newAspirante = new Aspirante({
    nombre,
    email,
    phone,
    municipio,
    procedencia,
  });
  await newAspirante.save();
  req.flash("success_msg", "Aspirante agregado correctamente");
  res.redirect("/aspirantes");
};

aspirantesCtrl.renderAspirantes = async (req, res) => {
  const aspirantes = await Aspirante.find().sort({ createdAt: "desc" });
  res.render("aspirantes/all-aspirantes", { aspirantes });
};

aspirantesCtrl.renderEditForm = async (req, res) => {
  const aspirante = await Aspirante.findById(req.params.id);
  res.render("aspirantes/edit-aspirantes", { aspirante });
};

aspirantesCtrl.updateAspirante = async (req, res) => {
  const { nombre, email, phone, municipio, procedencia } = req.body;
  await Aspirante.findByIdAndUpdate(req.params.id, {
    nombre,
    email,
    phone,
    municipio,
    procedencia,
  });
  req.flash("success_msg", "Aspirante actualizado correctamente");
  res.redirect("/aspirantes");
};

aspirantesCtrl.deleteAspirante = async (req, res) => {
  await Aspirante.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Aspirante eliminado correctamente");
  res.redirect("/aspirantes");
};

module.exports = aspirantesCtrl;
