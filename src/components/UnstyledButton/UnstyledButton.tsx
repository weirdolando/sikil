import styled from "styled-components";

interface Props {
  display?: string;
}

export default styled.button<Props>`
  display: ${(props) => props.display || "block"};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  /* Only when focus style is not mandatory, remove the outline (when the user clicks on it, some browsers show the outline, and we don't want that).
    :focus-visible pseudo-class is used to identify when an element is focused and the focus style should be applied based on user intent.
     Elements that are focused through keyboard navigation or similar means should receive a focus style,
     but elements that are focused due to a mouse click or touch should not.
  */
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
