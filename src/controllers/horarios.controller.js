const horariosCtrl = {};
const Horario = require("../models/Horario");

horariosCtrl.renderHorarioForm = (req, res) => {
  res.render("horarios/new-horario");
};

horariosCtrl.createHorario = async (req, res) => {
  const { nombre } = req.body;
  const newHorario = new Horario({ nombre });
  await newHorario.save();
  req.flash("success_msg", "Horario agregada correctamente");
  res.redirect("/horarios");
};

horariosCtrl.renderHorarios = async (req, res) => {
  const horarios = await Horario.find().sort({ createdAt: "desc" });
  res.render("horarios/all-horarios", { horarios });
};

horariosCtrl.renderEditForm = async (req, res) => {
  const horario = await Horario.findById(req.params.id);
  res.render("horarios/edit-horario", { horario });
};

horariosCtrl.updateHorario = async (req, res) => {
  const { nombre } = req.body;
  await Horario.findByIdAndUpdate(req.params.id, { nombre });
  req.flash("success_msg", "Horario actualizada correctamente");
  res.redirect("/horarios");
};

horariosCtrl.deleteHorario = async (req, res) => {
  await Horario.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Horario eliminada correctamente");
  res.redirect("/horarios");
};

module.exports = horariosCtrl;
