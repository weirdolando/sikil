import styled from "styled-components";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard/ShoeCard";

export default function ShoeGrid(): React.ReactElement {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShoeWrapper = styled.div`
  flex: 1 1 275px;
`;
