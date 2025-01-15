// Página Inicial

// Ajuste para a inclusão de Navbar e Footer em index.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Fortal Prime</h1>
        <p className="mt-4">Bem-vindo à loja virtual mais moderna e estilosa!</p>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Produtos em Destaque</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard imageSrc="/images/camisa.jpg" name="Camisa de Time" price={99.9} />
          <ProductCard imageSrc="/images/oculos.jpg" name="Óculos de Sol" price={149.9} />
          <ProductCard imageSrc="/images/relogio.jpg" name="Relógio Esportivo" price={199.9} />
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center py-8">Produtos em Destaque</h1>
      <ProductCarousel />
    </div>
  );
}

