const aulasCtrl = {};
const Aula = require("../models/Aula");

aulasCtrl.renderAulaForm = (req, res) => {
  res.render("aulas/new-aula");
};

aulasCtrl.createAula = async (req, res) => {
  const { nombre} = req.body;
  const newAula = new Aula({nombre});
  await newAula.save();
  req.flash("success_msg", "Aula agregada correctamente");
  res.redirect("/aulas");
};

aulasCtrl.renderAulas = async (req, res) => {
  const aulas = await Aula.find().sort({createdAt: "desc",});
  res.render("aulas/all-aulas", { aulas });
};

aulasCtrl.renderEditForm = async (req, res) => {
  const aula = await Aula.findById(req.params.id);
  res.render("aulas/edit-aula", { aula });
};

aulasCtrl.updateAula = async (req, res) => {
  const { nombre } = req.body;
  await Aula.findByIdAndUpdate(req.params.id, {nombre});
  req.flash("success_msg", "Aula actualizada correctamente");
  res.redirect("/aulas");
};

aulasCtrl.deleteAula = async (req, res) => {
  await Aula.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Aula eliminada correctamente");
  res.redirect("/aulas");
};

module.exports = aulasCtrl;
