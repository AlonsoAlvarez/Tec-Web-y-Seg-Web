const gruposCtrl = {};
const Grupo = require("../models/Grupo");

gruposCtrl.renderGrupoForm = (req, res) => {
  res.render("grupos/new-grupo");
};

gruposCtrl.createGrupo = async (req, res) => {
  const { nombre, edificio, aula, horario } = req.body;
  const newGrupo = new Grupo({ nombre, edificio, aula, horario });
  await newGrupo.save();
  req.flash("success_msg", "Grupo agregado correctamente");
  res.redirect("/grupos");
};

gruposCtrl.renderGrupos = async (req, res) => {
  const grupos = await Grupo.find().sort({ createdAt: "desc" });
  res.render("grupos/all-grupos", { grupos });
};

gruposCtrl.renderEditForm = async (req, res) => {
  const grupo = await Grupo.findById(req.params.id);
  res.render("grupos/edit-grupos", { grupo });
};

gruposCtrl.updateGrupo = async (req, res) => {
  const { nombre, edificio, aula, horario } = req.body;
  await Grupo.findByIdAndUpdate(req.params.id, {
    nombre,
    edificio,
    aula,
    horario,
  });
  req.flash("success_msg", "Grupo actualizado correctamente");
  res.redirect("/grupos");
};

gruposCtrl.deleteGrupo = async (req, res) => {
  await Grupo.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Grupo eliminado correctamente");
  res.redirect("/grupos");
};

module.exports = gruposCtrl;
