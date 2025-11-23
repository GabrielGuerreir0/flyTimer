import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="logo.png" alt="flytimer logo" />
      <nav>
        <a href="">timer</a>
        <a href="">history</a>
      </nav>
    </HeaderContainer>
  );
}
