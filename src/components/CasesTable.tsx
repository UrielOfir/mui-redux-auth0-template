import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Case } from "../../types";

interface CasesTableProps {
  cases?: Case[];
}

export const CasesTable: React.FC<CasesTableProps> = ({ cases }) => {

  return (
    <TableContainer>
      <Typography variant="h4" gutterBottom>
        תיקים
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>סטטוס</TableCell>
            <TableCell>מספר תיק</TableCell>
            <TableCell>יתרת חוב</TableCell>
            <TableCell>סוג תיק</TableCell>
            <TableCell>חייב</TableCell>
            <TableCell>זוכה</TableCell>
            <TableCell>פעילות אחרונה בתיק</TableCell>
            <TableCell>תאריך פעילות</TableCell>
            <TableCell>לשכה</TableCell>
            <TableCell>תפקידי בתיק</TableCell>
            <TableCell>מועדפים</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases?.map((caseItem, index) => (
            <TableRow key={index}>
              <TableCell>{caseItem.statusName}</TableCell>
              <TableCell>{caseItem.cseId}</TableCell>
              <TableCell>{caseItem.balance}</TableCell>
              <TableCell>{caseItem.caseType}</TableCell>
              <TableCell>{caseItem.debtorName}</TableCell>
              <TableCell>{caseItem.creditorName}</TableCell>
              <TableCell>{caseItem.lastActivity}</TableCell>
              <TableCell>{new Date(caseItem.laDate).toDateString()}</TableCell>
              <TableCell>{caseItem.office}</TableCell>
              <TableCell>{caseItem.myRole}</TableCell>
              <TableCell>{caseItem.isFavorite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
