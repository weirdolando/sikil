import styled from "styled-components";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import { COLORS, WEIGHTS } from "../../constants";

const NAVIGATION: { name: string; href: `/${string}` }[] = [
  { name: "Sale", href: "/sale" },
  { name: "New Releases", href: "/new-releases" },
  { name: "Men", href: "/men" },
  { name: "Woman", href: "/woman" },
  { name: "Collections", href: "/collections" },
];

export default function Header(): React.ReactElement {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          {NAVIGATION.map((nav) => (
            <NavLink key={nav.href} href={nav.href}>
              {nav.name}
            </NavLink>
          ))}
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
}

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray["300"]};
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  display: flex;
  height: 72px;
  align-items: baseline;
  padding: 18px 32px;
  color: ${COLORS.gray["900"]};
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
