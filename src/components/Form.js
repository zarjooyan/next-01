import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import useHandler from "../containers/signup/hooks/use-fetch";
import Input from "./Input";
import { schema } from "../containers/signup/utils/Schema";

const FormComponent = ({ setShow }) => {
  const { isLoading, submitHandler } = useHandler(setShow);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const SignupHandler = (data) => {
    submitHandler(data);
  };

  return (
    <form
      id="signupForm"
      onSubmit={handleSubmit(SignupHandler)}
      className="row rounded-2 pt-2 "
    >
      <Input
        name="First Name"
        required="true"
        id="firstName"
        type="text"
        register={register}
        error={errors.firstName?.message}
      />
      <Input
        name="Last Name"
        required="true"
        id="lastName"
        type="text"
        register={register}
        error={errors.lastName?.message}
      />
      <Input
        name="Password"
        required="true"
        id="password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        name="Confirm Password"
        required="true"
        id="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Input
        name="Email"
        required="true"
        id="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        name="Phone Number"
        required=""
        id="phoneNumber"
        type="number"
        register={register}
        error={errors.phoneNumber?.message}
      />
      <Input
        name="Date of birth"
        required=""
        id="birthDate"
        type="date"
        register={register}
        error={errors.birthDate?.message}
      />
      <div className="col-sm-12 col-lg-6">
        <label htmlFor="gender" className="form-label ">
          Choose your gender
        </label>
        <select id="gender" className=" form-control dropdown">
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </div>
      <div>
        <label htmlFor="address" className="form-label ">
          Address
        </label>
        <textarea className="form-control" id="address" rows="3"></textarea>
        <p className="text-danger mt-1">{errors.address?.message}</p>
      </div>
      <div className="d-flex justify-content-center">
        <Button disabled={isLoading} color="primary" />
      </div>
    </form>
  );
};

export default FormComponent;
