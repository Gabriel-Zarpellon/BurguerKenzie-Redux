import { useDispatch } from "react-redux";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { addProductThunk } from "../../../store/modules/cart/thunks";
import { StyledListItem } from "./style";

export function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <StyledListItem>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <StyledTitle>{product.name}</StyledTitle>
        <StyledParagraph>{product.category}</StyledParagraph>
        <StyledParagraph color="green" weight={600}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledParagraph>
        <button onClick={() => dispatch(addProductThunk(product))}>
          Adicionar
        </button>
      </div>
    </StyledListItem>
  );
}
