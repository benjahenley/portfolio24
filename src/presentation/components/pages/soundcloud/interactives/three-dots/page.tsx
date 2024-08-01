import { NotificationCardSC } from "../../ui/notificationCard/page";

type Props = {
  userName: string;
  interaction: string;
  followButton?: any;
  icon: any;
  time: any;
};

const NOTIFICATIONS: Props[] = [
  {
    userName: "",
    interaction: "",
    followButton: "",
    icon: "",
    time: "",
  },
];

export const ThreeDots = () => {
  return (
    <div className="relative">
      <div>
        <h3>Notifications</h3>
        <div>
          {NOTIFICATIONS.map((item) => {
            return (
              <NotificationCardSC
                {...item}
                key={item.userName}></NotificationCardSC>
            );
          })}
        </div>
        <button></button>
      </div>
    </div>
  );
};
