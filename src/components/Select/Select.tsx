import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import Icon from "../Icon/Icon";

interface Props {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactElement[];
}

export default function Select({
  label,
  value,
  onChange,
  children,
  ...delegated
}: Props): React.ReactElement {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => {
    if (React.isValidElement<{ value: number }>(child))
      return child.props.value === value;
  });

  const displayedValue =
    (selectedChild as React.ReactElement<{ children: React.ReactNode }>)?.props
      .children || "";

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <NativeSelect value={value} onChange={onChange} {...delegated}>
          {children}
        </NativeSelect>

        <DisplayedBit>
          <ArrowIcon id="chevron-down" size={24} strokeWidth={1.5} />
          {displayedValue}
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.label``;

const VisibleLabel = styled.span`
  margin-right: 16px;
  color: ${COLORS.gray[700]};
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  color: ${COLORS.gray[900]};
  background-color: ${COLORS.gray[100]};
  padding: 12px 42px 12px 16px;
  border-radius: 8px;
  pointer-events: none;
  font-weight: ${WEIGHTS.medium};

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ArrowIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 9px;
  width: 24px;
  height: 24px;
  margin: auto;
`;
