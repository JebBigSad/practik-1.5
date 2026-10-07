import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          коллекция посуды
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="bg-blue-900 text-white uppercase rounded-full px-10 py-3 text-sm tracking-wide transition-colors duration-200 hover:bg-blue-800"
          >
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}