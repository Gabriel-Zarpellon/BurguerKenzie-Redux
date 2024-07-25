import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../store/modules/products/thunks";
import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph } from "../../styles/typography";
import { StyledList, StyledResult } from "./style";

export function ProductsList({ search, setSearch }) {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    function renderProducts() {
      dispatch(getProductsThunk());
    }
    renderProducts();
  }, []);

  function clearSearch() {
    setSearch("");
    dispatch(getProductsThunk());
  }

  return (
    <StyledContainer>
      <div>
        {search != "" ? (
          products.length > 0 ? (
            <StyledResult>
              <StyledParagraph color="black">
                Resultados da busca para <strong>{search}</strong>
              </StyledParagraph>
              <button onClick={clearSearch}>Limpar busca</button>
            </StyledResult>
          ) : (
            <StyledResult>
              <StyledParagraph color="black">
                Não foram encontrados resultados para <strong>{search}</strong>
              </StyledParagraph>
              <button onClick={clearSearch}>Limpar busca</button>
            </StyledResult>
          )
        ) : null}
        <StyledList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StyledList>
      </div>
    </StyledContainer>
  );
}
