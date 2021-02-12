import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SCard from "../../components/card";

const Dashboard = () => {
  const [items] = useState([
    {
      name: "Card A",
      description: "This is a simple Card with Title and Description",
    },
    {
      name: "Card B",
      description: "This is a simple Card with Title and Description",
      
    },
    {
      name: "Card C",
      description: "This is a simple Card with Title and Description",
    },
    {
      name: "Card D",
      description: "This is a simple Card with Title and Description",
      custom: true,
    },
  ]);

  return (
    <div>
      <Grid container direction={"row"} justify={"center"} spacing={3}>
        {items.map((a) => (
          <Grid item xs={3} style={{ margin: "5px 5px 5px 5px" }}>
            {a.custom ? (
              <SCard title={a.name} custom key={a.name}>
                <p>
                  This is a custom component, that you can use inside this card
                </p>
              </SCard>
            ) : (
              <SCard title={a.name} description={a.description} key={a.name} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
