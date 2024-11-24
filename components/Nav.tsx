import Image from 'next/image';
import logo from '../public/logo_transparent.png';
import profile from '../public/default_profile.png';
import alarm from '../public/Alarm.png';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className=" flex justify-center border-b border-[#ccc] h-18">
      <div className=" flex justify-between items-center  w-[80%]">
        <Image
          src={logo}
          alt="Go GYM Logo"
          width={120}
          height={60}
          className="m-2 ml-8 cursor-pointer"
        />
        <div className=" flex gap-4 items-center mr-8">
          <Link href={'/'} className="font-semibold">
            양도 게시판
          </Link>
          <Link href={'/'} className="font-semibold">
            채팅방
          </Link>
          <Image
            src={alarm}
            alt="alarm"
            width={40}
            className=" cursor-pointer"
          />
          <Image
            src={profile}
            alt="profile"
            width={40}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
