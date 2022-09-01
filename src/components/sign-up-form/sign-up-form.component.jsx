import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert("Las contraseñas no son las mismas");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName });

      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email ya esta en uso");
      } else {
        console.log("Error creando el usuario con correo: ", error.message);
      }
    }
  };

  const handleChange = (event) => {
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
