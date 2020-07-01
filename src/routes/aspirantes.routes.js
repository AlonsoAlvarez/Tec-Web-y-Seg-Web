const { Router } = require("express");
const router = Router();

const {
  renderAspiranteForm,
  createAspirante,
  renderAspirantes,
  renderEditForm,
  updateAspirante,
  deleteAspirante,
} = require("../controllers/aspirantes.controller");

const { isAuthenticate } = require("../helpers/auth");

router.get("/aspirantes/add", isAuthenticate, renderAspiranteForm);
router.post("/aspirantes/new-aspirante", isAuthenticate, createAspirante);
router.get("/aspirantes", isAuthenticate, renderAspirantes);
router.get("/aspirantes/edit/:id", isAuthenticate, renderEditForm);
router.put("/aspirantes/edit/:id", isAuthenticate, updateAspirante);
router.delete("/aspirantes/delete/:id", isAuthenticate, deleteAspirante);

module.exports = router;
