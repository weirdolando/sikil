import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

export default function SearchInput({ ...delegated }): React.ReactElement {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input type="text" {...delegated} />
      <SearchIcon id="search" size={16} strokeWidth={1} />
    </Label>
  );
}

const Label = styled.label`
  position: relative;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: ${COLORS.gray["100"]};
  border-bottom: 1px solid ${COLORS.gray["300"]};
  color: inherit;
  padding-left: 24px;
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray["500"]};
  }
`;
