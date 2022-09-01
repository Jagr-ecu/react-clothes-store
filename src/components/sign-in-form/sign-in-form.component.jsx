import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormField();
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert(alert("Contraseña incorrecta"))
          break;
        case 'auth/user-not-found':
          alert(alert("No se ha encontrado usuario asociado a esta cuenta"))
          break;
        default:
          console.log(error)
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
    <div className="sign-in-container">
      <h2>Tienes una cuenta?</h2>
      <span>Inicia Sesión</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Entrar</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Entrar con Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

//con redirect auth
// useEffect(() => {
//   async function redirectResult(){
//     const response = getRedirectResult(auth)
//     if (response){
//       const userDocRef = await createUserDocumentFromAuth(response.user)
//     }
//   }
//   redirectResult()
// }, [])

/** con redirect
     *  <button onClick={signInWithGoogleRedirect}>
          Iniciar Sesion
      </button>
     */
