import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" overflow-hidden h-full shrink-0 relative w-80 rounded-4xl p-4">
      <img
        className="h-full w-full object-cover rounded-2xl"
        src={props.users.img}
      />
      <RightCardContent id={props.id} users={props.users} />
    </div>
  );
};

export default RightCard;
