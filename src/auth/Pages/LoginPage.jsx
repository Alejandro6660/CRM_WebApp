export const LoginPage = () => {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-primaryColor"></div>
        <div className="relative z-10 bg-blueColor w-[40%] mx-auto py-3 px-6 rounded-md bg-opacity-[.30] border-[thin] border-blueColor">
          <section className="w-full text-textColor text-xl text-center p-2">
            <h2>Sign in to your account</h2>
          </section>
          <form className="w-full px-10" action="">
            <div className="flex flex-col text-textColor">
              <label htmlFor="" className="text-lg mb-1 pl-2">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="txtEmail"
                className="rounded-md border-[thin] border-[transparent] outline-none px-3 py-1  focus:border-blueColor"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
