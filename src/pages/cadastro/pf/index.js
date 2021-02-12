import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import Filter from "../../../components/filterTemplate";
import PageDefault from "../../../components/pageDefault";
import { CustomDivider } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";

const Principal = () => {
  const breadcrumbs = [
    { name: "Cadastro", path: "/home" },
    { name: "Sistema", path: "/home" },
  ];
  return (
    <PageDefault
      title={"Sistema"}
      paths={breadcrumbs}
      description="Pagina para listagem e cadastro de pessoas fisicas"
    >
      <Button variant="contained" color="primary">
        Novo Sistema
      </Button>
      <CustomDivider />
      <Filter>
        <Grid item xs={4} style={{ margin: "5px 5px 5px 5px" }}>
          <TextField
            id="filter-sigla"
            label="Sigla"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} style={{ margin: "5px 5px 5px 5px" }}>
          <TextField
            id="filter-situação"
            label="Situação"
            variant="outlined"
            fullWidth
          />
        </Grid>
            <Grid item xs={8} style={{ margin: "5px 5px 5px 5px" }}>
              <TextField
                id="filter-descricao"
                label="Descrição"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid sm={12} md={1} xs={1}>
              <Button variant="contained" color="primary">
                <DeleteIcon />
              </Button>
            </Grid>
            <Grid sm={12} md={1} xs={1}>
              <Button variant="contained" color="primary">
                <SearchIcon />
              </Button>
            </Grid>
      </Filter>
    </PageDefault>
  );
};

export default Principal;
