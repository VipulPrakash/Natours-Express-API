const express = require("express");
const tourController = require("../controllers/tourController");
const router = express.Router();

router.param("id", tourController.checkID); //you can add a middleware for specific params. Will be only sent when id is sent in params.

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour); //root route
  
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
