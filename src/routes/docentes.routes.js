const { Router } = require("express");
const router = Router();

const {
  renderDocenteForm,
  createDocente,
  renderDocentes,
  renderEditForm,
  updateDocente,
  deleteDocente,
} = require("../controllers/docentes.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/docentes/add", isAuthenticate, renderDocenteForm);
router.post("/docentes/new-docente", isAuthenticate, createDocente);
router.get("/docentes", isAuthenticate, renderDocentes);
router.get("/docentes/edit/:id", isAuthenticate, renderEditForm);
router.put("/docentes/edit/:id", isAuthenticate, updateDocente);
router.delete("/docentes/delete/:id", isAuthenticate, deleteDocente);

module.exports = router;
