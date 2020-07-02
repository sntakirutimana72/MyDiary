import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const user = {
  firstname: 'Ntakirutimana',
  lastname: 'Steven',
  email: 'sntakirutimana72@my-diary.it',
  gender: 'male',
  dateOfB: '1993-01-01',
  password: 'Mukamanata3'
};

const SECRET_KEY = process.env.SECRET_KEY;

export const client = jwt.sign(
  {data: {
    email: user.email, 
    password: user.password
  }}, SECRET_KEY, {expiresIn: '3h'}
);
