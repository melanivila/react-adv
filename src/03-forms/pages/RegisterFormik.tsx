import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormik = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener al menos 2 carateres")
            .max(15, "Debe tener menos de 15 caracteres")
            .required("Requerido"),

          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),

          password: Yup.string()
            .required("Este campo es necesario")
            .min(8, "Debe tener al menos 8 carateres")
            .max(15, "Debe tener menos de 15 caracteres"),

          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
            .required("Este campo es necesario"),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <MyTextInput label="Name" name="name" placeholder="Name" />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email adress"
              type="email"
            />

            <MyTextInput
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />

            <MyTextInput
              label="Confirm password"
              name="passwordConfirmation"
              placeholder="********"
              type="password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
