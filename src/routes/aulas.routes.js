const { Router } = require("express");
const router = Router();

const {
  renderAulaForm,
  createAula,
  renderAulas,
  renderEditForm,
  updateAula,
  deleteAula,
} = require("../controllers/aulas.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/aulas/add", isAuthenticate, renderAulaForm);
router.post("/aulas/new-aula", isAuthenticate, createAula);
router.get("/aulas", isAuthenticate, renderAulas);
router.get("/aulas/edit/:id", isAuthenticate, renderEditForm);
router.put("/aulas/edit/:id", isAuthenticate, updateAula);
router.delete("/aulas/delete/:id", isAuthenticate, deleteAula);

module.exports = router;
