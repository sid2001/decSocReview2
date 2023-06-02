const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shopOwner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);

// const getDb = require("../util/database").getDb;
// const ObjectId = require("mongodb").ObjectId;
// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//         console.log(this);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static findById(id) {
//     const db = getDb();
//     //const o_id = new ObjectId(id);
//     // console.log(new ObjectId(id));
//     return db
//       .collection("products")
//       .findOne({ _id: new ObjectId(id) })
//       .then((product) => {
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .findOne({ _id: new ObjectId(prodId) })
//       .then((product) => {
//         db.collection("users")
//           .findOne({ _id: product.userId })
//           .then((user) => {
//             const updatedCartItems = user.cart.items.filter((p) => {
//               return prodId.toString() !== p.productId.toString();
//             });

//             return updatedCartItems;
//           })
//           .then((items) => {
//             return db
//               .collection("users")
//               .updateOne(
//                 { _id: product.userId },
//                 { $set: { cart: { items: items } } }
//               );
//           })
//           .then(() => {
//             return db
//               .collection("products")
//               .deleteOne({ _id: new ObjectId(prodId) })
//               .then((result) => {
//                 console.log(result);
//               });
//           });
//       })
//       .then((result) => {
//         return result;
//       })
//       .catch((err) => console.log(err));
//   }
// }

// module.exports = Product;
