const { Router } = require("express");
const router = Router();

const {
  renderHorarioForm,
  createHorario,
  renderHorarios,
  renderEditForm,
  updateHorario,
  deleteHorario,
} = require("../controllers/horarios.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/horarios/add", isAuthenticate, renderHorarioForm);
router.post("/horarios/new-horario", isAuthenticate, createHorario);
router.get("/horarios", isAuthenticate, renderHorarios);
router.get("/horarios/edit/:id", isAuthenticate, renderEditForm);
router.put("/horarios/edit/:id", isAuthenticate, updateHorario);
router.delete("/horarios/delete/:id", isAuthenticate, deleteHorario);

module.exports = router;
