import express from "express"
import RestaurantCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"
const router = express.Router()

router.route("/").get(RestaurantCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantCtrl.apiGetRestaurantsById)
router.route("/cuisines").get(RestaurantCtrl.apiGetRestaurantsByCuisine)


router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router