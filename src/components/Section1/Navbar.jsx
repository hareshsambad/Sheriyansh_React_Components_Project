const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between items-center px-16 py-6 mt-6">
        <h4 className="bg-black text-white px-6 py-2 uppercase tracking-widest rounded-full cursor-pointer">
          Target Audience
        </h4>
        <button className="tracking-widest bg-gray-200 text-black uppercase px-6 py-2 font-bold rounded-full">
          Digital Banking Platform
        </button>
      </div>
    </>
  );
};

export default Navbar;
