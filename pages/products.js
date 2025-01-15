import ProductCard from '../components/ProductCard';

export default function Products() {
  const productList = [
    { imageSrc: '/images/camisa.jpg', name: 'Camisa de Time', price: 99.9 },
    { imageSrc: '/images/oculos.jpg', name: 'Óculos de Sol', price: 149.9 },
    { imageSrc: '/images/relogio.jpg', name: 'Relógio Esportivo', price: 199.9 },
    // Adicione mais produtos aqui...
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Produtos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productList.map((product, idx) => (
            <ProductCard
              key={idx}
              imageSrc={product.imageSrc}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
