export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Fortal Prime</h1>
          <ul className="flex space-x-4">
            <li className="text-gray-300 hover:text-white"><a href="#">Início</a></li>
            <li className="text-gray-300 hover:text-white"><a href="#">Produtos</a></li>
            <li className="text-gray-300 hover:text-white"><a href="#">Contato</a></li>
          </ul>
        </div>
      </nav>
    );
  }