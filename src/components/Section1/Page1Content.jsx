import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="flex  items-center px-4 pb-2 gap-5 h-[90vh]">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
