const { Router } = require("express");
const router = Router();

const {
  renderMateriaForm,
  createMateria,
  renderMaterias,
  renderEditForm,
  updateMateria,
  deleteMateria,
} = require("../controllers/materias.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/materias/add", isAuthenticate, renderMateriaForm);
router.post("/materias/new-materia", isAuthenticate, createMateria);
router.get("/materias", isAuthenticate, renderMaterias);
router.get("/materias/edit/:id", isAuthenticate, renderEditForm);
router.put("/materias/edit/:id", isAuthenticate, updateMateria);
router.delete("/materias/delete/:id", isAuthenticate, deleteMateria);

module.exports = router;
