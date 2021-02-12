import React from "react";
import { Grid } from "@material-ui/core";
import { Title, GridItemTitle, GridItemBody } from "./styles";

const PageDefault = ({ title, children }) => {
  return (
    <Grid container>
      <GridItemTitle item md={12}>
        <Title>{title}</Title>
      </GridItemTitle>
      <GridItemBody item>{children}</GridItemBody>
    </Grid>
  );
};

export default PageDefault;