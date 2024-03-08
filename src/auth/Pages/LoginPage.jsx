import { FormComponent } from "../Components/FormComponent";

export const LoginPage = () => {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
        <div className="relative z-10 bg-primaryColor w-[40%] mx-auto py-5 px-6 border-[thin] border-primaryColor shadow-2xl min-h-72 ">
          <section className="w-full text-textColor text-xl p-2 px-5">
            <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl">
              Sign in to your account
            </h2>
          </section>
          <FormComponent />
        </div>
      </main>
    </>
  );
};
