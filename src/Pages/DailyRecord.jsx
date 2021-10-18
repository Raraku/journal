import React, { useState, useEffect } from "react";
import ToolBar from "./../Components/Toolbar";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Record from "./../Components/Record";

export const RecordWrapper = styled.div`
  font-size: 22px;
  margin: 0em 3em;
  textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    font-size: inherit;
  }
`;

export default function DailyRecord() {
  const [currentRecord, setCurrentRecord] = useState({});
  // useEffect(()=>{
  //   setCurrentRecord
  // },[])
  return (
    <RecordWrapper>
      <Grid className="gr" container spacing={1}>
        <Grid className="gr-1" item xs={8}>
          <Record />
        </Grid>
        <Grid className="gr-2" item xs={4}></Grid>
      </Grid>
    </RecordWrapper>
  );
}

// const item = {
//   type: "textarea",
//   id: "some-id",
//   content: "some-content"
// };
