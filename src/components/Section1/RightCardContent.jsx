const RightCardContent = (props) => {
  return (
    <div className="p-8 absolute top-0 left-0 h-full w-full flex flex-col justify-between">
      <h2 className="bg-white h-12 rounded-full w-12 flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid
          qui vel quibusdam minus cumque. Odio similique alias a ullam?
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-semibold text-md cursor-pointer tracking-widest px-4 py-3 rounded-full pr-14 ">
            {props.users.tag}
          </button>
          <button className="bg-blue-600 hover:bg-gray-400 text-white font-semibold text-xl cursor-pointer px-4 py-1 rounded-full">
            <i className="ri-arrow-right-line "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
