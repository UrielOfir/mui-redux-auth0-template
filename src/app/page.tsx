"use client";
import { Box, Container } from "@mui/material";
import { CasesTable } from "@/components/CasesTable";
import casesJson from '../../cases/cases.json';

export default function Home() {

  return (
      <Container>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CasesTable cases={casesJson} />
        </Box>
      </Container>
    
  );
}
