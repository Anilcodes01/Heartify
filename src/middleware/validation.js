import Joi from "joi";

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    role: Joi.string().valid("doctor", "nurse", "admin"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validatePatient = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    gender: Joi.string.valid("male", "female", "other").required(),
    contactNumber: Joi.string().required(),
    address: Joi.string().required(),
    assignedDoctor: Joi.string().required(),
    medicalHistory: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default {
  validateUser,
  validatePatient,
};
