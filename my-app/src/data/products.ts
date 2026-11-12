export type Product = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
};

export const products: Product[] = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 153.33,
        imageUrl: "/headphones.jpg",
        inStock: true,
    },
    {
        id: 2,
        title: "Wireless Keyboard",
        price: 79.99,
        imageUrl: "/keyboard.jpg",
        inStock: true,
    },
    {
        id: 3,
        title: "Wireless Mouse",
        price: 109.99,
        imageUrl: "/mouse.jpg",
        inStock: false,
    }
];