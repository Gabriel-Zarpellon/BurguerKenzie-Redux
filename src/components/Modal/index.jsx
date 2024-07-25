import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { MdClose } from "react-icons/md";
import { StyledModal } from "./style";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/modules/cart/actions";

export function Modal({ children, setIsOpen, total }) {
  const dispatch = useDispatch();
  return (
    <StyledModal>
      <div>
        <div>
          <StyledTitle color="white">Carrinho de compras</StyledTitle>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div>{children}</div>
        <div>
          <div>
            <StyledParagraph color="black" weight={600}>
              Total
            </StyledParagraph>
            <StyledParagraph>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </StyledParagraph>
          </div>
          <button onClick={() => dispatch(clearCart())}>Remover todos</button>
        </div>
      </div>
    </StyledModal>
  );
}
