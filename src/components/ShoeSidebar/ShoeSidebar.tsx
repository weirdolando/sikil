import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

const LINKS = [
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Jordan", href: "/jordan" },
  { name: "Running", href: "/running" },
  { name: "Basketball", href: "/basketball" },
  { name: "Training & Gym", href: "/training" },
  { name: "Football", href: "/football" },
  { name: "Skateboarding", href: "/skateboarding" },
  { name: "American Football", href: "/us-football" },
  { name: "Baseball", href: "/baseball" },
  { name: "Golf", href: "/golf" },
  { name: "Tennis", href: "/tennis" },
  { name: "Athletics", href: "/athletics" },
  { name: "Walking", href: "/walking" },
];

export default function ShoeSidebar(): React.ReactElement {
  return (
    <Wrapper>
      {LINKS.map((link) => (
        <LinkText href={link.href} key={link.href}>
          {link.name}
        </LinkText>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.aside``;

const LinkText = styled.a`
  display: block;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  line-height: 2;

  &:nth-of-type(3) {
    color: ${COLORS.secondary};
  }
`;
