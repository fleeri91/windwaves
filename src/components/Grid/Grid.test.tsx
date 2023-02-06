import React from "react";
import { render } from "@testing-library/react";

import { Grid, Cell } from "./Grid";

describe("Grid", () => {
  test("renders the Button component", () => {
    render(
      <Grid>
        <Cell>{"Test"}</Cell>{" "}
      </Grid>
    );
  });
});
