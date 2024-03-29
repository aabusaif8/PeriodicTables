/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./reservations.controller");

router
  .route("/:reservation_Id/status")
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/:reservation_Id")
  .get(controller.read)
  .put(controller.changeRes)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .put(controller.update)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
