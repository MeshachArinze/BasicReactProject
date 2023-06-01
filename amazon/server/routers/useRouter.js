import express from "express";
import expressAsynxHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken, isAdmin, isAu } from "../utils";

const userRouter = express.Router();

userRouter.get(
  "/top-sellers",
  expressAsynxHandler(async (req, res) => {
    const topSellers = await User.find({ isSeller: true })
      .sort({ "seller.rating": -1 })
      .limit(3);

    res.send(topSellers);
  })
);


userRouter.get(
    '/seed',

    expressAsynxHandler(async (req, res) => {
        const createdUsers = await User.insertMany(data.users);
        res.send
    })
)