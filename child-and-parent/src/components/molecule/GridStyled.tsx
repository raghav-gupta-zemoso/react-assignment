import {Grid} from "@mui/material";
import styled from "@emotion/styled"
export const GridStyled= styled(Grid)`
padding: 0 10px;
& .text {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 0 10px;
    margin-top: 1rem;
  }
& .time {
    display: flex;
    padding: 0 10px;
    margin-top: 1rem;
    color: #6d787e;
}

`;
