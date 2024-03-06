"use client";
import styles from "./page.module.css";
import { Box, Container } from "@mui/material";
import { CasesTable } from "@/components/CasesTable";
import casesJson from '../../cases/cases.json';

export default function Home() {

  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", gap: "10px" }}>
          <CasesTable cases={casesJson} />
        </Box>
      </Container>
    </main>
  );
}
