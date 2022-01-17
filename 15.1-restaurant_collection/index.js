const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createRestaurant = async ({
  name = "",
  address = {
    city = "",
    street = "",
    coordinates = []
  } = {},
  cuisineType = "",
  isKosher = false,
  reviews = []
} = {}) => {
  try {
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisineType,
      isKosher,
      reviews
    });
  
    console.log(restaurant)
    // await restaurant.save();
  } catch (err) {
    console.log(err.message);
  }
}

createRestaurant({
  name: "Daniel's Restaurant",
  address: {
    city: "Gevim",
    street: "Jordan",
    coordinates: [-77,564, 40.67]
  },
  cuisineType: "meat",
  isKosher: true,
  reviews: [[new Date('December 17, 1995 03:24:00'), 1], [new Date('December 18, 1993 02:24:00'), 2], [new Date('December 18, 1993 02:24:00'), 3]]
})

