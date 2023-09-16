import styled from "styled-components";
import { Search, Menu, ShoppingBag, ChevronDown } from "react-feather";

interface Props {
  id: keyof typeof icons;
  color?: string;
  size: string | number;
  strokeWidth: string | number;
}

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
};

export default function Icon({
  id,
  color,
  size,
  strokeWidth,
  ...delegated
}: Props): React.ReactElement {
  const Component = icons[id];

  if (!Component) throw new Error(`Unknown id provided to Icon: ${id}`);

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ strokeWidth: string | number }>`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;
