import { BiXCircle } from "react-icons/bi";

interface Props {
  setCreateProfile: () => void;
}

const CreateProfile = ({ setCreateProfile }: Props) => {
  return (
    <div className="mt-9 flex items-center justify-center">
      <form className="flex h-96 w-7/12 flex-col  rounded-2xl border-2 border-solid border-black bg-white">
        <div className="flex justify-end p-4">
          <button onClick={() => setCreateProfile()}>
            <BiXCircle size={30} color="red" />
          </button>
        </div>
        <div className="flex flex-col items-center ">
          <div>
            <input placeholder="Email" />
          </div>
          <div>
            <input placeholder="Senha" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
