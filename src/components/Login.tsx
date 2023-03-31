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
      <form className="flex h-96 w-5/12 flex-col rounded-2xl border-2 border-solid border-black bg-white bg-opacity-60">
        <div className="flex justify-end p-4">
          <button onClick={() => setCreateProfile()}>
            <BsXCircle size={30} color="red" />
          </button>
        </div>
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="h-12 text-3xl font-bold text-red-500">FAZER LOGIN</h1>
          <div className="flex h-full flex-col justify-center">
            <div className="relative group">
              <input className="mb-8 border-b-2 border-[#555] bg-inherit focus:border-red-500 focus:outline-none" />
              <label className="group-focus-within:-top-5 group-valid:-top-5 pointer-events-none absolute top-0 left-0 transition-all ease-in-out">
                Email
              </label>
            </div>
            <div className="relative group">
              <input className="mb-6 border-b-2 border-[#555] bg-inherit focus:border-red-500 focus:outline-none" />
              <label className="group-focus-within:-top-5 pointer-events-none absolute top-0 left-0 transition-all ease-in-out">
                Senha
              </label>
            </div>
            <button className="bg-red-500 rounded-lg text-white mb-5">
              <div className="flex items-center justify-center">
                <BsBoxArrowInRight className="mr-2"/>
                ENTRAR
              </div>
            </button>
          </div>
        </div>
        <div className="flex h-20 flex-col  items-center justify-center">
          <h2 className="mb-4 text-lg text-red-500">
            FAZER LOGIN COM MINHAS REDES SOCIAIS
          </h2>
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
      </form>
    </div>
  );
};

export default Login;
