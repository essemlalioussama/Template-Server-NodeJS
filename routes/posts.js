import express from "express";
import jwt from 'jsonwebtoken';
import {
  getPosts
} from "../controllers/posts.js";
const router = express.Router();

let accessTokenSecret = 'secret';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('x-auth-token');
  if (authHeader) {
      const token = authHeader.split(' ')[0];
      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};
router.get("/",authenticateJWT,getPosts);

export default router;
