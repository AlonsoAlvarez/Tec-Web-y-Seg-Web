const { Router } = require("express");
const router = Router();

const {
  renderEdificioForm,
  createEdificio,
  renderEdificios,
  renderEditForm,
  updateEdificio,
  deleteEdificio,
} = require("../controllers/edificios.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/edificios/add", isAuthenticate, renderEdificioForm);
router.post("/edificios/new-edificio", isAuthenticate, createEdificio);
router.get("/edificios", isAuthenticate, renderEdificios);
router.get("/edificios/edit/:id", isAuthenticate, renderEditForm);
router.put("/edificios/edit/:id", isAuthenticate, updateEdificio);
router.delete("/edificios/delete/:id", isAuthenticate, deleteEdificio);

module.exports = router;
