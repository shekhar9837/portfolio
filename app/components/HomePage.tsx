export const HomePage = () => {
  return (
    <div className="py-24 w-full max-w-7xl z-50 flex flex-row items-center justify-between">
      <div className="w-full max-w-[50%] px-  ">
        <h1 className="text-[9.2rem] pl-6 font-semibold -mb-8 tracking-tight font-hentaigana">
          Shekhar
        </h1>
        <div className="w-full  flex items-end  justify-end">
          <div className="flex   items-start justify-between w-full max-w-md  ">

          <h1 className="font-medium tracking-tight font-hentaigana">
            {`[INTRO] `}
          </h1>
          <p className="pl-20  w-[] font-hentaigana font-semibold text-[1rem]
           ">
            Creating innovative digital experiences, brand identities, and art
            direction.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
