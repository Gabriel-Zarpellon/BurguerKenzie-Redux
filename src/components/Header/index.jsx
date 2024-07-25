import { StyledBox, StyledButton, StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";
import { StyledContainer } from "../../styles/grid";
import { MdSearch } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchProductThunk } from "../../store/modules/products/thunks";
import { useEffect } from "react";

export function Header({ setSearch, setIsOpen }) {
  const { cart } = useSelector((state) => state);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const cartProducts = cart.reduce((prevValue, product) => {
    return prevValue + product.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cart));
  }, [cart]);

  function submit(formData) {
    setSearch(formData.name);
    dispatch(searchProductThunk(formData.name));
    reset();
  }
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledBox>
          <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />

            <form onSubmit={handleSubmit(submit)}>
              <input
                type="text"
                placeholder="Pesquisar..."
                {...register("name")}
              />
              <button aria-label="search" title="Pesquisar" type="submit">
                <MdSearch size={21} />
              </button>
            </form>

            <div>
              <StyledButton onClick={() => setIsOpen(true)}>
                <span>{cartProducts}</span>
              </StyledButton>
            </div>
          </div>
        </StyledBox>
      </StyledContainer>
    </StyledHeader>
  );
}
