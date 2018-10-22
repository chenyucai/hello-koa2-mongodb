import User from "../model/user";
import ApiError from "../error/ApiError";
import ApiErrorNames from "../error/ApiErrorNames";

class UserController {

  static async getAllUser(ctx) {
    ctx.body = await User.find({})
  }

  static async getUserById(ctx) {
    let id = ctx.query.id;
    let user = await User.findOne({id: id});
    if (user) {
      ctx.body = user;
    } else {
      throw new ApiError(ApiErrorNames.UserNotExist);
    }
  }

  static async saveUser(ctx) {
    let request = ctx.request.body;
    if (!request.userName) {
      throw new ApiError(ApiErrorNames.UserNameNotNull);
    }
    let user = new User({
      userName: request.userName,
      age: request.age,
      tags: request.tags
    });
    user = await user.save();
    ctx.body = user;
  }
}

export default UserController