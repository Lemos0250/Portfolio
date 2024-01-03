import { useState } from "react";

export default function MobileMenu() {
  const [visible, setVisible] = useState(false);

  const handleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <button
        onClick={handleMenu}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        {visible ? "Fechar" : "Abrir"}
      </button>

      {visible && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-md py-2">
          <a
            href="#Home"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Home
          </a>
          <a
            href="#About"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Sobre
          </a>
          <a
            href="#Portifolio"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Projetos
          </a>
          <a
            href="#Tecnologias"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Tecnologias
          </a>
          <a
            href="#Contatos"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Contato
          </a>
        </div>
      )}
    </div>
  );
}