import styled from "styled-components";
import Spacer from "../Spacer/Spacer";
import { formatPrice, isNewShoe, pluralize } from "../../utils";
import { COLORS, WEIGHTS } from "../../constants";
import { Shoe } from "../../data";

export default function ShoeCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}: Shoe): React.ReactElement {
  const variant =
    typeof salePrice === "number"
      ? "on-sale"
      : isNewShoe(releaseDate)
      ? "new-release"
      : "default";

  return (
    <LinkWrapper href={slug}>
      <Wrapper>
        <ImageWrapper>
          <Image src={imageSrc} />
          {variant === "on-sale" && <SaleFlag>Sale</SaleFlag>}
          {variant === "new-release" && <NewFlag>Just Released!</NewFlag>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              "--color": variant === "on-sale" ? COLORS.gray[700] : undefined,
              "--text-decoration":
                variant === "on-sale" ? "line-through currentColor" : undefined,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" && (
            <SalePrice>{salePrice && formatPrice(salePrice)}</SalePrice>
          )}
        </Row>
      </Wrapper>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px 16px 4px 4px;
`;

const Image = styled.img`
  border-radius: inherit;
`;

const Flag = styled.div`
  padding: 8px;
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  border-radius: 4px;
  position: absolute;
  top: 12px;
  right: -4px;
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;
