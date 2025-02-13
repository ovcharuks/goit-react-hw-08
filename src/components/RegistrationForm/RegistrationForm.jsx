import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

function RegistrationForm() {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-brown rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-3/2">
          <h3 className="text-center font-bold">Register</h3>
          <label className="flex flex-col gap-2 ">
            <span>Name:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="name"
            />
          </label>
          <label className="flex flex-col gap-2 ">
            <span>Email:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="email"
            />
          </label>
          <label className="flex flex-col gap-2 ">
            <span>Password:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="password"
              type="password"
            />
          </label>
          <button
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 cursor-pointer hover:bg-teal-500"
            type="submit"
          >
            Register
          </button>
          <p>
            Do you alredy have account?<Link to="/login">Login</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
