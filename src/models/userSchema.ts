import mongoose, { Schema, models } from 'mongoose';

interface IUserSchema extends mongoose.Document {
  email: string;
  fullName: string;
  image?: string;
  phoneNumber: string;
}

const userSchema = new Schema<IUserSchema>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      // eslint-disable-next-line no-useless-escape
      match: /.+\@.+\..+/,
    },
    fullName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    image: {
      type: String,
      required: true,
      default: ' '

    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      default: '0000000000',
      validate: {
        validator: (v: string) => {
          return /^\d{10}$/.test(v);
        },
        message: (props) => {
          return `${props.value} is not a valid phone number!`;
        },
      },
    },
  },
  { timestamps: true },
);

const User = models.User<IUserSchema> || mongoose.model<IUserSchema>('User', userSchema);
export default User;
