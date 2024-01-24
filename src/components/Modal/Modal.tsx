interface ModalProps {
  handleCloseModal: () => void
}

const Modal = ({handleCloseModal}:ModalProps) => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black h-screen bg-opacity-50 z-50 p-5">
      <div className="bg-white h-96 w-96 rounded p-10 relative">
        <h1 className="text-xl md:text-3xl font-semibold text-center">Aqui um modal</h1>

        <p className="text-slate-500 font-normal leading-7 mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem at est odit numquam tempore quae facilis ad vel et rem repellat, iure quidem? Et, dolorem. Non et velit quidem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nemo dicta blanditiis adipisci hic repudiandae veniam libero</p>

        <button
          onClick={handleCloseModal}
          className="absolute right-2 top-2 bg-red-500 text-white w-7 h-7 text-center font-semibold rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
