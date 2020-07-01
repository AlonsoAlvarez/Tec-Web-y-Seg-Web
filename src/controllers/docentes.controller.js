const docentesCtrl = {};
const Docente = require("../models/Docente");

docentesCtrl.renderDocenteForm = (req, res) => {
  res.render("docentes/new-docente");
};

docentesCtrl.createDocente = async (req, res) => {
  const { nombre, email, phone, grado } = req.body;
  const newDocente = new Docente({
    nombre,
    email,
    phone,
    grado,
  });
  await newDocente.save();
  req.flash("success_msg", "Docente agregado correctamente");
  res.redirect("/docentes");
};

docentesCtrl.renderDocentes = async (req, res) => {
  const docentes = await Docente.find().sort({ createdAt: "desc" });
  res.render("docentes/all-docentes", { docentes });
};

docentesCtrl.renderEditForm = async (req, res) => {
  const docente = await Docente.findById(req.params.id);
  res.render("docentes/edit-docentes", { docente });
};

docentesCtrl.updateDocente = async (req, res) => {
  const { nombre, email, phone, grado} = req.body;
  await Docente.findByIdAndUpdate(req.params.id, {
    nombre,
    email,
    phone,
    grado,
  });
  req.flash("success_msg", "Docente actualizado correctamente");
  res.redirect("/docentes");
};

docentesCtrl.deleteDocente = async (req, res) => {
  await Docente.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Docente eliminado correctamente");
  res.redirect("/docentes");
};

module.exports = docentesCtrl;
