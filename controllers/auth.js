// app.use(bodyParser.urlencoded({ extended: false }));
const User = require("../models/user");
exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get("Cookie").split(";")[3].split("=")[1] === "true";
  console.log(req.session);
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User.findById("646d205e55e0fdee49164a47")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
