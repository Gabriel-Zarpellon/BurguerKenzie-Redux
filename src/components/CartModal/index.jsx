import { useSelector } from "react-redux";
import { Modal } from "../Modal";
import { StyledParagraph } from "../../styles/typography";
import { CartItemCard } from "./CartItemCard";
import { StyledEmptyCard } from "./style";
import { useEffect } from "react";

export function CartModal({ setIsOpen }) {
  const { cart } = useSelector((state) => state);

  const total = cart.reduce((prevValue, product) => {
    return prevValue + product.price * product.quantity;
  }, 0);


  return (
    <Modal setIsOpen={setIsOpen} total={total}>
      <ul>
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartItemCard key={product.id} product={product} />
          ))
        ) : (
          <StyledEmptyCard>
            <StyledParagraph color="black">
              Seu carrinho está vazio.
            </StyledParagraph>
          </StyledEmptyCard>
        )}
      </ul>
    </Modal>
  );
}
