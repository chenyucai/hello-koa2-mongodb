import mongoose from '../dbHelper';
import { defaultSchemaExtend, defaultSchemaOptions } from "../config/index";

const Schema = mongoose.Schema;

const UserSchema = new Schema(Object.assign({
  userName: String,
  age: {
    type: Number,
    min: 18,
    max: 99
  },
  phone: String,
  tags: {
    type: Array
  }
}, defaultSchemaExtend), defaultSchemaOptions);

const User = mongoose.model('User', UserSchema, 'Users');

export default User