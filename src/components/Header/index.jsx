import { Container, Navigation, LinkItem } from "./styled-components";

const Header = () => (
  <Container>
    <Navigation>
      <LinkItem to="/">HOMEPAGE</LinkItem>
      <LinkItem to="/findArtist">FIND AN ARTIST</LinkItem>
      <LinkItem to="/contacts">ABOUT US</LinkItem>
    </Navigation>
  </Container>
);

export default Header;
