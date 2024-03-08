import { useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import { InputFormComponent } from "./InputFormComponent";
import { ButtonComponent } from "../../layout/Components/ButtonComponent";

export const FormComponent = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  useEffect(() => {}, []);
  useEffect(() => {}, [formState]);

  return (
    <>
      <form className="w-full px-10" action="">
        <div className="flex flex-col text-textColor my-3">
          <label className="text-lg mb-1 pl-2 text-4 font-light">Email</label>
          <InputFormComponent
            type="text"
            name={"email"}
            placeholder={"name@company.com"}
            value={email}
            change={onInputChange}
          />
        </div>
        <div className="flex flex-col text-textColor my-3">
          <label className="text-lg mb-1 pl-2 text-4 font-light">
            Password
          </label>
          <InputFormComponent
            type="password"
            name={"password"}
            placeholder={"*****"}
            value={password}
            change={onInputChange}
          />
        </div>
        <div className="flex flex-col items-start px-3 text-textColor my-3 mt-10">
          <ButtonComponent name="Sing in" />
        </div>
      </form>
    </>
  );
};
