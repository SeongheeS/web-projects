import "./App.css";
import ProductCard from "./components/ProductCard";

export default function App() {

 return (

  <main className="page">

   <h1>나의 쇼핑몰</h1>

   <p>첫 번째 React 화면입니다.</p>

   <ProductCard />
   <ProductCard />

  </main>

 );

}