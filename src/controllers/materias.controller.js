const materiasCtrl = {};
const Materia = require("../models/Materia");

materiasCtrl.renderMateriaForm = (req, res) => {
  res.render("materias/new-materia");
};

materiasCtrl.createMateria = async (req, res) => {
  const { nombre, titular } = req.body;
  const newMateria = new Materia({ nombre, titular });
  await newMateria.save();
  req.flash("success_msg", "Materia agregada correctamente");
  res.redirect("/materias");
};

materiasCtrl.renderMaterias = async (req, res) => {
  const materias = await Materia.find().sort({ createdAt: "desc" });
  res.render("materias/all-materias", { materias });
};

materiasCtrl.renderEditForm = async (req, res) => {
  const materia = await Materia.findById(req.params.id);
  res.render("materias/edit-materias", { materia });
};

materiasCtrl.updateMateria = async (req, res) => {
  const { nombre, titular } = req.body;
  await Materia.findByIdAndUpdate(req.params.id, { nombre, titular });
  req.flash("success_msg", "Materia actualizada correctamente");
  res.redirect("/materias");
};

materiasCtrl.deleteMateria = async (req, res) => {
  await Materia.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Materia eliminada correctamente");
  res.redirect("/materias");
};

module.exports = materiasCtrl;
