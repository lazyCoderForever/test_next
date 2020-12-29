import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function MyWonderfulComponent({
  id,
  options,
  children,
  count,
  logging,
}) {
  const [summ, setSumm] = useState(count);
  const classes = useStyles();
  useEffect(() => {
    if (
      id &&
      options &&
      options.params &&
      options.params.fields &&
      options.params.fields.isDynamic
    ) {
      setSumm(summ + 1);
    }
  }, []);

  return (
    <React.Fragment>
      <h1 className={classes.title}>Hello World!</h1>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  title: {
    color: "red",
  },
});
