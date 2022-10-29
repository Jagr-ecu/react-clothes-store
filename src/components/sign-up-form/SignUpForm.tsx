import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from "react-redux";

import { signUpStart } from '../../store/user/UserAction';
import Button from "../button/Button"; 
import FormInput from "../form-input/FormInput";
import './signUpForm.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert("Las contraseñas no son las mismas");
      return;
    }

    try {   
      dispatch(signUpStart(email, password, displayName));
      resetFormField();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email ya esta en uso");
      } else {
        console.log("Error creando el usuario con correo: ", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
    <h2>No tienes una cuenta?</h2>
      <span>Registrate con tu email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nombre de usuario"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Contraseña"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirmar Contraseña"
          type="password"
          required
          onChange={handleChange}
          name="confirmedPassword"
          value={confirmedPassword}
        />

        <Button type="submit">Registrarse</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
