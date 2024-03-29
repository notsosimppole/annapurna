// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require("mongoose");
const Company = require("./model/Company");

const companyMaker = (name, slots, lat, lng) => {
  mongoose
    .connect(
      "mongodb+srv://root:toor@cluster0.uv1pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
  const temp = new Company({
    name,
    uid:
      ((Math.floor(Math.random() * 100000) *
        Math.floor(Math.random() * 100000)) %
        10000) *
      Math.floor(Math.random() * 100000),
    slots,
    lat,
    lng,
  });
  temp
    .save()
    .then((item) => {
      console.log(item);
    })
    .catch((err) => console.log(err));
};

export default function handler(req, res) {
  companyMaker("dhruv", 22, 33, 33);
  res.status(200).json({ status: "Done" });
}
