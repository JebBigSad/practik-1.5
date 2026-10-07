export interface Product{
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
}

export const products: Product[] = [
    {
      id: 1,
      image: '/images/tarelka-glubokay.jpg',
      title: 'тарелка глубокая',
      description: 'тарелка диаметром 30 см с высокими бортиками',
      price: 2500,
    },
    {
      id: 2,
      image: '/images/plate-deep.jpg',
      title: 'кружка',
      description: '350 мл для самого вкусного кофе',
      price: 2000,
    },
    {
      id: 3,
      image: '/images/vaza.jpg',
      title: 'ваза',
      description: '2 литра для ваших ярких букетов',
      price: 4000,
    },
    {
      id: 4,
      image: '/images/tarelka-obemnay.jpg',
      title: 'тарелка объемная',
      description: 'блюдце 20 см под разные вкусности',
      price: 3500,
    },
  ];