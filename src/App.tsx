import { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [modal, setModal] = useState<boolean>(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button
        onClick={handleModal}
        className="border p-2 bg-emerald-500 rounded font-medium text-white m-3"
      >
        Abrir modal
      </button>

      {modal && <Modal handleCloseModal={handleModal} />}
    </div>
  );
};

export default App;
