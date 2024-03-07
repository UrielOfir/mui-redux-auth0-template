import { Box, Card, Container, Typography } from "@mui/material";

interface Params {
  id: string;
}

interface CasePageProps {
  params: Params;
}

export default function CasePage({ params }: CasePageProps) {
  const { id } = params;
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <Card>
          <Typography variant="h5">שם זוכה</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">שם חייב</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">עיכוב הליכים</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">תאריך פתיחה</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">רשם</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">תפקידי בתיק</Typography>
          <Typography>{id}</Typography>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <Card>
          <Typography variant="h5">הליכים</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">הגבלות</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">צווי מידע</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">פעילות שבוצעה בתיק</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">סך הכל החוב העדכני</Typography>
          <Typography>{id}</Typography>
        </Card>
        <Card>
          <Typography variant="h5">לתשומת לבך</Typography>
          <Typography>{id}</Typography>
        </Card>
      </Box>
    </Container>
  );
}
