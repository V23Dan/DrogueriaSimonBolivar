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
    return res.status(200).message("Registrado con exito");
  } catch (error) {
    return res.status(500).message("Error en el registro del usuario");
  }
};
