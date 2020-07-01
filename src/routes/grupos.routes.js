const { Router } = require("express");
const router = Router();

const {
  renderGrupoForm,
  createGrupo,
  renderGrupos,
  renderEditForm,
  updateGrupo,
  deleteGrupo,
} = require("../controllers/grupos.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/grupos/add", isAuthenticate, renderGrupoForm);
router.post("/grupos/new-grupo", isAuthenticate, createGrupo);
router.get("/grupos", isAuthenticate, renderGrupos);
router.get("/grupos/edit/:id", isAuthenticate, renderEditForm);
router.put("/grupos/edit/:id", isAuthenticate, updateGrupo);
router.delete("/grupos/delete/:id", isAuthenticate, deleteGrupo);

module.exports = router;
