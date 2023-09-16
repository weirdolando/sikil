import styled from "styled-components";
import { WEIGHTS } from "../../constants";

export default function Logo(
  props: React.HTMLProps<HTMLAnchorElement>
): React.ReactElement {
  return (
    <LinkText href="/" {...props}>
      <Text>Sikil👣</Text>
    </LinkText>
  );
}

const LinkText = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;
