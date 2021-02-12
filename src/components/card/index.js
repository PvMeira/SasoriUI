import { Grid} from "@material-ui/core";
import React from "react";
import { GridContainer, ItemTitle, ItemDescription, TitleDivider } from "./styles";

const SCard = (props) => {
  return (
    <GridContainer container direction={"row"} justify={"center"} spacing={3}>
      <Grid item xs={12}>
        <ItemTitle>{props.title}</ItemTitle>
        {props.divider && <TitleDivider variant={"fullWidth"} />}
      </Grid>
      {props.custom ? (
        <Grid item xs={12}>
          {props.children}
        </Grid>
      ) : (
        <Grid item xs={12}>
          <ItemDescription>{props.description}</ItemDescription>
        </Grid>
      )}
    </GridContainer>
  );
};

SCard.defaultProps = {
  title: "Title",
  description: "",
  custom: false,
  divider: true,
};
export default SCard;
