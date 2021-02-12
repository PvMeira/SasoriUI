import { Divider, Grid } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../configuration/assets";

export const GridContainer = styled(Grid)`
  border-radius: 10px;
  border-color: ${colors.primary};
  border-width: 1px;
  border-style: solid;

  margin: 5px 5px 5px 5px;
`;

export const ItemTitle = styled.h4`
  text-align: center;
  color: ${colors.secondary};
`;

export const ItemDescription = styled.p`
  text-align: center;
  color: ${colors.black};
`;

export const TitleDivider = styled(Divider)`
  background-color: ${colors.primary};
`;
