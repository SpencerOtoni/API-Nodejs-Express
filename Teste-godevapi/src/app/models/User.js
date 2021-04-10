import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: Number,
      index: { unique: true },
      required: true,
    },
    password_hash: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


UserSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
    });

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    this.password_hash = await bcrypt.hash(this._password, 8);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(password) {
  return bcrypt.compare(password, this.password_hash);
};

export default mongoose.model('User', UserSchema);