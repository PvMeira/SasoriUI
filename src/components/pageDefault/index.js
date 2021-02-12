import React from "react";
import { Breadcrumbs, Grid, Tooltip } from "@material-ui/core";
import { Title, GridItemTitle, GridItemBody, LinkBreadcrumb , Container, CustomDivider} from "./styles";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

const PageDefault = ({ title, children, paths = [], description }) => {
  let history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <Breadcrumbs separator="›">
            {paths.map((a) => (
              <LinkBreadcrumb href={a.path} onClick={() => handleClick(a.path)}>
                {a.name}
              </LinkBreadcrumb>
            ))}
          </Breadcrumbs>
        </Grid>

        <GridItemTitle item md={12} container>
          <Grid item>
            <Title>{title}</Title>
          </Grid>
          <Grid item>
          <Tooltip title={description}>
            <InfoIcon fontSize={"small"} />
            </Tooltip>
          </Grid>
          <Grid xs={12}>
            <CustomDivider/>
          </Grid>
        </GridItemTitle>
        <GridItemBody item>{children}</GridItemBody>
      </Grid>
    </Container>
  );
};

export default PageDefault;
