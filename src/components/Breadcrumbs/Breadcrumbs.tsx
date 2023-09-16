import styled from "styled-components";
import { COLORS } from "../../constants";

export default function Breadcrumbs({
  children,
}: {
  children: React.ReactElement[];
}): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb">
      <CrumbWrapper>{children}</CrumbWrapper>
    </nav>
  );
}

interface CrumbProps {
  children: React.ReactNode;
  href: `/${string}`;
}

Breadcrumbs.Crumb = ({ children, href, ...delegated }: CrumbProps) => {
  return (
    <Crumb>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </Crumb>
  );
};

const CrumbWrapper = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Crumb = styled.li`
  display: inline;

  &:not(:first-of-type)::before {
    content: "";
    display: inline-block;
    height: 0.8em;
    margin-inline: 8px;
    border-right: 1px solid currentColor;
    transform: rotate(15deg);
    color: ${COLORS.gray["300"]};
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray["700"]};
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;
