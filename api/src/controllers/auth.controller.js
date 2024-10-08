import { where } from "sequelize";
import { user } from "../models/users.js";

export const registerUser = async (req, res) => {
  const { nombre1, nombre2, apellido1, apellido2, documento, password } =
    req.body;

  try {
    const newUser = await user.create({
      nombre1,
      nombre2,
      apellido1,
      apellido2,
      documento,
      password,
    });

    console.log("Usuario: ", nombre1, " registrado con exito");
    return res.send(true);
  } catch (error) {
    return res.send(false);
  }
};

export const loginUser = async (req, res) => {
  console.log("Entra al login");

  const { documento, pass } = req.body;

  try {
    const existingUser = await user.findOne({ where: { documento } });

    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Documento o contraseña incorrectos" });
    }

    if (pass !== existingUser.pass) {
      return res
        .status(400)
        .json({ message: "Documento o contraseña incorrectos" });
    }

    return res.send(true);
  } catch (error) {
    // Manejo de errores
    console.error("Error during login:", error);
    return res.send(false);
  }
};
