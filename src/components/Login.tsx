import {
  BsDiscord,
  BsFacebook,
  BsGoogle,
  BsXCircle,
  BsBoxArrowInRight,
} from "react-icons/bs";

interface Props {
  setCreateProfile: () => void;
}

const Login = ({ setCreateProfile }: Props) => {
  return (
    <div className="mt-9 flex items-center justify-center">
      <form className="flex flex-col rounded-2xl border-2 border-solid border-black bg-white bg-opacity-60 md:w-5/12">
        <div className="flex justify-end p-4">
          <button onClick={() => setCreateProfile()}>
            <BsXCircle size={30} color="red" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-3 h-12 text-lg font-bold text-red-500 md:text-3xl">
            FAZER LOGIN
          </h1>
          <div className="flex flex-col justify-center">
            <div className="group relative">
              <input
                className="mb-8 border-b-2 border-[#555] bg-inherit focus:border-red-500 focus:outline-none"
                type="mail"
                required
              />
              <label className="pointer-events-none absolute top-0 left-0 transition-all ease-in-out group-valid:-top-5 group-focus-within:-top-5">
                Email
              </label>
            </div>
            <div className="group relative">
              <input
                className="mb-6 border-b-2 border-[#555] bg-inherit focus:border-red-500 focus:outline-none"
                type="password"
                required
              />
              <label className="pointer-events-none absolute top-0 left-0 transition-all ease-in-out group-focus-within:-top-5">
                Senha
              </label>
            </div>
            <button className="rounded-lg bg-red-500 text-white" type="submit">
              <div className="flex items-center justify-center">
                <BsBoxArrowInRight className="mr-2" />
                ENTRAR
              </div>
            </button>
            <a className="mt-1 mb-3 flex cursor-pointer justify-end text-xs">
              Esqueceu a senha?
            </a>
          </div>
        </div>
        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <div className="mt-5 flex flex-col items-center justify-center">
          <span className="mb-4 text-[10px] font-bold text-red-500 lg:text-lg md:text-sm">
            FAZER LOGIN COM MINHAS REDES SOCIAIS
          </span>
          <div className="mb-3 space-x-14">
            <button>
              <BsFacebook size={30} color="blue" />
            </button>
            <button>
              <BsGoogle size={30} color="red" />
            </button>
            <button>
              <BsDiscord size={30} color="blue" />
            </button>
          </div>
        </div>
        <div className="mb-2 flex justify-center space-x-1 text-xs lg:text-lg md:text-sm">
          <span>Novo por aqui?</span>
          <button className="font-bold text-red-500 underline">
            CADASTRE-SE
          </button>
        </div>
      </form>
    </div>
  );
  }

export default Login; 
