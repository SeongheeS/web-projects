export type Product = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
    description: string;
};

export const products: Product[] = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 153.33,
        imageUrl: "/headphones.jpg",
        inStock: true,
        description: "Experience the freedom of wireless audio with our premium headphones. Enjoy crystal-clear sound quality, long battery life, and a comfortable fit for all-day listening.",
    },
    {
        id: 2,
        title: "Wireless Keyboard",
        price: 79.99,
        imageUrl: "/keyboard.jpg",
        inStock: true,
        description: "Enhance your productivity with our sleek wireless keyboard. Featuring responsive keys, a compact design, and seamless connectivity, it's perfect for both work and play.",
    },
    {
        id: 3,
        title: "Wireless Mouse",
        price: 109.99,
        imageUrl: "/mouse.jpg",
        inStock: false,
        description: "Navigate with precision using our ergonomic wireless mouse. With customizable buttons, smooth tracking, and a comfortable grip, it's designed for both casual and professional use.",
    }
];