"use client";
import { Box, Container } from "@mui/material";
import { CasesTable } from "@/components/CasesTable";
import { getCases } from "@/services/cases";
import { useEffect, useState } from "react";

export default function Home() {
  const [cases, setCases] = useState([]);
  
  useEffect(() => {
    getCases().then((cases) => setCases(cases));
  }, []); 

  return (
      <Container>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CasesTable cases={cases} />
        </Box>
      </Container>
    
  );
}
