import React, { useState } from "react";
import "./PriceRange.css";
import TextField from "@mui/material/TextField";

export default function PriceRange(props) {
  return (
    <>
      <label>
        <div className="container">
          <div className="range">
            <TextField
              id="from"
              type="number"
              onChange={(event) =>
                event.target.value < 0
                  ? (event.target.value = 0)
                  : event.target.value
              }
              onBlur={props.filter}
              label="From:"
              variant="standard"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </div>
          <div className="range">
            <TextField
              id="to"
              type="number"
              onChange={(event) =>
                event.target.value < 0
                  ? (event.target.value = 0)
                  : event.target.value
              }
              onBlur={props.filter}
              label="To:"
              variant="standard"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </div>
        </div>
      </label>
    </>
  );
}
