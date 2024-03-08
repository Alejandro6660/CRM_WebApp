import { ButtonComponent, InputComponent } from "../../layout/Components";

export const FormComponent = () => {
  return (
    <>
      <form className="w-full px-10" action="">
        <div className="flex flex-col text-textColor my-3">
          <label className="text-lg mb-1 pl-2 text-4 font-light">Email</label>
          <InputComponent
            type="email"
            name="email"
            placeholder="name@company.com"
          />
        </div>
        <div className="flex flex-col text-textColor my-3">
          <label className="text-lg mb-1 pl-2 text-4 font-light">
            Password
          </label>
          <InputComponent
            type="password"
            name={"password"}
            placeholder={"*****"}
          />
        </div>
        <div className="flex flex-col items-start px-3 text-textColor my-3 mt-10">
          <ButtonComponent>Sing in</ButtonComponent>
        </div>
      </form>
    </>
  );
};
