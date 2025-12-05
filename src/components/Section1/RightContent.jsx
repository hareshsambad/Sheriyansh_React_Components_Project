import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="rightCards"
      className=" h-full rounded-4xl overflow-auto w-2/3 p-6 flex"
    >
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} users={elem} />;
      })}
    </div>
  );
};

export default RightContent;
