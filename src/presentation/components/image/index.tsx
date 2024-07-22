import Image from "next/image";
import me from "@/media/me.png";

type Props = {
  className?: string;
  small?: any;
};

function ProfilePic({ className, small }: Props) {
  return (
    <div className={className}>
      <div
        className={`${
          small ? "w-10 h-10 border-transparent" : "w-22 h-22 border-4 "
        } rounded-full overflow-hidden`}>
        <Image
          src={me}
          alt="benja"
          className={`${small ? "w-10 h-10" : "w-20.5 h-20.5"}`}
        />
      </div>
    </div>
  );
}

export default ProfilePic;
