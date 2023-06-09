import Image from "next/image";
import { BsSearch, BsPerson } from "react-icons/bs";

interface Props {
  setCreateProfile: () => void;
}

const Header = ({ setCreateProfile }: Props) => {
  return (
    <header className="w-full ">
      <div className="flex flex-row items-center">
        <div className="ml-20 flex w-1/2">
          <Image src="/favicon.jpeg" alt="Logo" width={120} height={10} />
        </div>
        <div className="mr-20 flex w-1/2 flex-row-reverse">
          <button onClick={() => setCreateProfile()}>
            <BsPerson size={30} color="red" />
          </button>
          <form className="mr-10 flex flex-row rounded-3xl bg-white">
            <input
              className="rounded-3xl indent-3"
              type="text"
              placeholder="Buscar"
            />
            <button className="absolute ml-[9.5rem] mt-1">
              <BsSearch size={22} color="red" />
            </button>
          </form>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </header>
  );
};

export default Header;
