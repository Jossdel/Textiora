import argon2 from "argon2";
import prisma from "../lib/prisma.js";
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const hashedPAssword = await argon2.hash(password);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res
    .status(201)
    .json({ id: newUser.id, name: newUser.name, email: newUser.email });
};
