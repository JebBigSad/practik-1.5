import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full bg-white rounded-3xl p-4 shadow-sm">
      <div className="relative bg-slate-100 rounded-2xl aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </div>

      <h3 className="text-xl font-bold mt-4 text-gray-900">
        {product.title}
      </h3>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {product.description}
      </p>

      <div className="flex flex-col items-start mt-4">
        <span className="text-sm text-gray-900">{product.price} ₽</span>
        <button
          type="button"
          className="mt-4 bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs tracking-wide transition-colors duration-200 hover:bg-blue-800"
        >
          в корзину
        </button>
      </div>
    </article>
  );
}