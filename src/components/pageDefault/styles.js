import { Divider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../configuration/assets";

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.h3`
  font-size: 22px;
  margin-top: 6px;
  display: block;
  color: ${colors.titlePage};
  text-transform: capitalize;
`;

export const GridItemTitle = styled(Grid)`
  text-align: start;
`;

export const GridItemBody = styled(Grid)`
  background-color: white;
  width: 100%;
`;

export const LinkBreadcrumb = styled(Link)`
  font-size: 9px;
  text-decoration: none;
  color: ${colors.primary};
`;

export const CustomDivider = styled(Divider)`
  margin-bottom: 10px;
`;
