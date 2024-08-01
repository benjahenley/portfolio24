import Image from "next/image";
type Props = {
  userName: string;
  interaction: string;
  followButton?: any;
  icon: any;
  time: any;
};

export const NotificationCardSC = ({
  userName,
  interaction,
  followButton,
  icon,
}: Props) => {
  return (
    <div className="">
      <div>
        <span>
          {userName}
          <br />
          <br />
          {interaction}
        </span>
      </div>
    </div>
  );
};
