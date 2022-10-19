const { validationResult } = require("express-validator"),
  User = require("../models/user");


module.exports = {
    registerUser: async function (req, res) {
        const {userName, password} = req.body;
        //check for errors that happened in the fields of the request, by the parameters that decided in the route
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        //check if user is not already exist - what to do with same name


        // let exist = await User.exists({ name: userName });
        // if (exist) {
        //   return res.status(400).send("user already register");
        // }
    
        //If media is series, checks the validation of details
        
    
        const user = new User(req.body);
        user
          .save()
          .then((user) => {
            console.log(`user ${user.username} saved to the DB`);
            res.status(201).send("new user added");
          })
          .catch((e) => {
            res.status(400).send(e);
          });
      },


};