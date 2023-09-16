import styled from "styled-components";
import SearchInput from "../SearchInput";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export default function SuperHeader(): React.ReactElement {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput placeholder="Search..." />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <VisuallyHidden>Cart</VisuallyHidden>
        <Icon id="shopping-bag" size={16} strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 32px;
  height: 40px;
  background-color: ${COLORS.gray["900"]};
  color: ${COLORS.gray["300"]};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
