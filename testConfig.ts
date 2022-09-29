import dotenv from 'dotenv';
dotenv.config();

export const testConfig = {
  url: process.env.URL || "www.writeyoururl.com",
  userId: process.env.UserID || "abcde",
  userPass: process.env.UserPass || "12345" 
};
