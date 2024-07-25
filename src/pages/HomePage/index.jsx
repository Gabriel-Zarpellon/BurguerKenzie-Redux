import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { CartModal } from "../../components/CartModal";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setSearch={setSearch} setIsOpen={setIsOpen}/>
      <ProductsList search={search} setSearch={setSearch}/>
      {isOpen ? <CartModal setIsOpen={setIsOpen}/> : null}
    </>
  );
}
