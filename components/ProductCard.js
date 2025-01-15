export default function ProductCard({ imageSrc, name, price }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-4 max-w-sm">
        <img src={imageSrc} alt={name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-xl font-semibold text-white mt-4">{name}</h3>
        <p className="text-gray-400 mt-2">R$ {price.toFixed(2)}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
          Comprar
        </button>
      </div>
    );
  }
  