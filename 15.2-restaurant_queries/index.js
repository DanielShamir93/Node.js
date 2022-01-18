const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const sendQuery = async () => {
  // 1.1
  // const query = await Restaurant.find();
  // 1.2
  // const query = await Restaurant.findOne({cuisine: "meat"});
  // 1.3
  // const query = await Restaurant.findOne({isKosher: true});
  // 1.4
  // const query = await Restaurant.where("address.city").equals("Tel-Aviv");
  // 1.5
  // const query = await Restaurant.where("address.city").equals("Tel-Aviv").select('address');
  // 1.6
  // const query = await Restaurant.where("address.city").equals("Tel-Aviv").select("address.coordinates");
  // 1.7
  // const query = await Restaurant.find().sort({name: 1});
  // 1.8
  // const query = await Restaurant.find().sort("address.city");
  // 1.9
  // const query = await Restaurant.findOneAndUpdate({ name: "Daniel's Restaurant" } , { name: "Shahars's Restaurant" });

  // 2.1
  // for await (const restaurant of Restaurant.find()) {
  //   console.log(restaurant.name);
  // }
  // 2.2
  // for await (const restaurant of Restaurant.find()) {
  //   console.log(restaurant.address.city);
  // }
  // 2.3
  // for await (const restaurant of Restaurant.find()) {
  //   console.log(restaurant.address.coordinates);
  // }

  // 3.1
  // const query = await Restaurant.find({name: /^E/g});
  // 3.2
  // const query = await Restaurant.find().count();

  // 4.1
  Restaurant.aggregate(
    [{ $group: { _id: "name", average: { $avg: "$rating" } } }],
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );

};

sendQuery();
