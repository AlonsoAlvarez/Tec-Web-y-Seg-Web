const pagosCtrl = {};
const Pago = require("../models/Pago");

pagosCtrl.renderPagoForm = (req, res) => {
  res.render("pagos/new-pago");
};

pagosCtrl.createPago = async (req, res) => {
  const { concepto, precio, aspirante } = req.body;
  const newPago = new Pago({ concepto, precio, aspirante });
  await newPago.save();
  req.flash("success_msg", "Pago agregada correctamente");
  res.redirect("/pagos");
};

pagosCtrl.renderPagos = async (req, res) => {
  const pagos = await Pago.find().sort({ createdAt: "desc" });
  res.render("pagos/all-pagos", { pagos });
};

pagosCtrl.renderEditForm = async (req, res) => {
  const pago = await Pago.findById(req.params.id);
  res.render("pagos/edit-pago", { pago });
};

pagosCtrl.updatePago = async (req, res) => {
  const { concepto, precio, aspirante } = req.body;
  await Pago.findByIdAndUpdate(req.params.id, { concepto, precio, aspirante });
  req.flash("success_msg", "Pago actualizada correctamente");
  res.redirect("/pagos");
};

pagosCtrl.deletePago = async (req, res) => {
  await Pago.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Pago eliminada correctamente");
  res.redirect("/pagos");
};

module.exports = pagosCtrl;
