import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="flex w-1/2 flex-row items-center">
        <div className="sm flex w-1/2 justify-center">
          <Image src="/favicon.svg" alt="Logo" width={120} height={10} />
        </div>
        <h1>HEADER</h1>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </header>
  );
};

export default Header;
