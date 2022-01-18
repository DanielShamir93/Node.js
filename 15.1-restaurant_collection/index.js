const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema");
const restaurantsArray = require("./restaurants");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createRestaurant = async (restaurantsArray) => {
  try {
    const restaurant = await Restaurant.create(restaurantsArray);
    console.log(restaurant);
  } catch (err) {
    console.log(err.message);
  }
}


createRestaurant(restaurantsArray)
