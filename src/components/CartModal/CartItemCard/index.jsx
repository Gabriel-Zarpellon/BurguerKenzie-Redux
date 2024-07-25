import { useDispatch } from "react-redux";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { removeProductThunk } from "../../../store/modules/cart/thunks";
import { MdDelete } from "react-icons/md";
import { StyledListItem } from "./style";

export function CartItemCard({ product }) {
  const dispatch = useDispatch();
  return (
    <StyledListItem>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <StyledTitle color="black">{product.name}</StyledTitle>
        <StyledParagraph>x{product.quantity}</StyledParagraph>
        <StyledParagraph color="green" weight={600}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
      </div>
      <div>
        <button aria-label="delete" title="Remover item"
          onClick={() => {
            dispatch(removeProductThunk(product));
          }}
        >
          <MdDelete size={21} />
        </button>
      </div>
    </StyledListItem>
  );
}
