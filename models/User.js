const { Schema, model, Model, models } = require("mongoose");

const userSchema = new Schema({
   name: {
      type: String,
      minLength: 3,
      require: true,
   },
   email: String,
   age: {
      type: Number,
      min: 10,
      max: 50,
   },
   address: {
      county: String,
      street: String,
   },
   courses: [String],
   createdAt: {
      type: Date,
      // default: new Date.now()
      default: () => Date.now(),
   },
});

const User = models.User || model("User", userSchema);

export default User;
