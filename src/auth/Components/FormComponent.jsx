import { useForm } from "react-hook-form";
import {
  ButtonComponent,
  InputComponent,
  LabelComponent,
} from "../../layout/Components";
import { validationRules } from "../../layout/Helpers/validationRules";

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const { email, password } = validationRules;

  return (
    <>
      <form className="w-full px-10" action="" onSubmit={onSubmit}>
        <div className="flex flex-col text-textColor my-3">
          <LabelComponent textSize={"md"}>Email</LabelComponent>
          <InputComponent
            type="email"
            name="email"
            placeholder="name@company.com"
            errors={errors.email}
            {...register("email", email)}
          />
          {errors.email && (
            <LabelComponent textSize={"sm"} errors={errors.email}>
              {errors.email.message}
            </LabelComponent>
          )}
        </div>
        <div className="flex flex-col text-textColor my-3">
          <LabelComponent textSize={"md"}>Password</LabelComponent>
          <InputComponent
            type="password"
            name={"password"}
            placeholder={"*****"}
            errors={errors.password}
            {...register("password", password)}
          />
          {errors.password && (
            <LabelComponent textSize={"sm"} errors={errors.password}>
              {errors.password.message}
            </LabelComponent>
          )}
        </div>
        <div className="flex flex-col items-start px-3 text-textColor my-3 mt-10">
          <ButtonComponent>Sing in</ButtonComponent>
        </div>
      </form>
    </>
  );
};
