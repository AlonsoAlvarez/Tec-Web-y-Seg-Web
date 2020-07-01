const { Router } = require("express");
const router = Router();

const {
  renderPagoForm,
  createPago,
  renderPagos,
  renderEditForm,
  updatePago,
  deletePago,
} = require("../controllers/pagos.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/pagos/add", isAuthenticate, renderPagoForm);
router.post("/pagos/new-pago", isAuthenticate, createPago);
router.get("/pagos", isAuthenticate, renderPagos);
router.get("/pagos/edit/:id", isAuthenticate, renderEditForm);
router.put("/pagos/edit/:id", isAuthenticate, updatePago);
router.delete("/pagos/delete/:id", isAuthenticate, deletePago);

module.exports = router;
