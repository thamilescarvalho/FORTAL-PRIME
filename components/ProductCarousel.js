import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProductCarousel() {
  const products = [
    { imageSrc: '/images/camisa.jpg', name: 'Camisa de Time', price: 99.9 },
    { imageSrc: '/images/oculos.jpg', name: 'Óculos de Sol', price: 149.9 },
    { imageSrc: '/images/relogio.jpg', name: 'Relógio Esportivo', price: 199.9 },
  ];

  return (
    <div className="mt-8">
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}>
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 bg-gray-800 rounded-lg">
              <img src={product.imageSrc} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p>R$ {product.price.toFixed(2)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
