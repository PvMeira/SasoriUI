import { Grid } from "@material-ui/core";
import React from "react";
import {Paragraf} from './styles';

const Filter = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item >
          <Paragraf>Localizar</Paragraf>
      </Grid>
      {children}
    </Grid>
  );
};

export default Filter;
