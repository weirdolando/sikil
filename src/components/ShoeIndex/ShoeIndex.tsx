import Breadcrumbs from "../Breadcrumbs";
import styled from "styled-components";
import ShoeSidebar from "../ShoeSidebar";
import Spacer from "../Spacer/Spacer";
import { COLORS, WEIGHTS } from "../../constants";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid/ShoeGrid";

interface Props {
  sortId: string;
  setSortId: (id: string) => void;
}

export default function ShoeIndex({
  sortId,
  setSortId,
}: Props): React.ReactElement {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(e) => setSortId(e.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/shoes" aria-current="page">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;
