import styled from "styled-components";
import { colors } from "../../util/design";
import { Link } from "react-router-dom";

export const FooterBackground = styled.footer`
  display: flex;
  position: relative;
  bottom: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 12rem;
  background-color: ${colors.black};
  z-index: 99;
`;

export const FooterInfoArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 8;
  width: 100%;
`;

export const FooterCopyrightArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CopyText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
`;

export const Text = styled.span`
  font-size: 0.9;
  font-weight: 300;
  color: ${colors.white};
`;

export const StyledAnchor = styled(Link)`
  font-size: 0.9;
  font-weight: 300;
  color: ${colors.white};
  text-decoration: underline;
`;

export const StyledLink = styled(Link)`
  font-size: 0.9;
  font-weight: 700;
  color: ${colors.white};
  list-style-type: disc;
`;
