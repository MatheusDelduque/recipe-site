import Image from "next/image";
import { BiSearchAlt, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="flex flex-row items-center">
        <div className="ml-20 flex w-1/2">
          <Image src="/favicon.jpeg" alt="Logo" width={120} height={10} />
        </div>
        <div className="mr-20 flex w-1/2 flex-row-reverse">
          <BiUser size={30} color="red" />
          <form className="mr-10 flex flex-row rounded-3xl bg-white">
            <input
              className="rounded-3xl indent-3"
              type="search"
              placeholder="Buscar"
            />
            <BiSearchAlt size={30} color="red" className="absolute ml-[9.5rem]"/>
          </form>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </header>
  );
};

export default Header;
