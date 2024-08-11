import Image from "next/image";

export const FollowCountSC = () => {
  return (
    <div className="flex flex-row mb-2 justify-center text-gray-400 dark:text-slate-50 w-full xl:p-0 lg:w-full xl:w-full p-4 text-center lg:text-left xl:text-left">
      <div className="flex flex-col w-full border-r justify-center px-2">
        <p>Followers</p>
        <p className="text-3xl lg:text-4xl">159</p>
      </div>
      <div className="flex flex-col w-full border-r justify-center px-2">
        <p>Following</p>
        <p className="text-3xl lg:text-4xl">171</p>
      </div>
      <div className="flex flex-col w-full pl-4 justify-center px-2">
        <p>Tracks</p>
        <p className="text-3xl lg:text-4xl">20</p>
      </div>
    </div>
  );
};
