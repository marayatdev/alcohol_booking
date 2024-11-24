import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth";
import { Register } from "../models/auth";
import { TypedRequestBody } from "../utils/request";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export class AuthController {
  private authService = new AuthService();
  private jwtSecret: string;
  private refreshSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "default_secret";
    this.refreshSecret = process.env.REFRESH_SECRET || "default_refresh_secret";
  }
}
