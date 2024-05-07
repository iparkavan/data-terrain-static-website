import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { totalmem } from "os";
import { GrFormView } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { IconType } from "react-icons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5f5f5",
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  job: string,
  name: string,
  position: string,
  level_1: string,
  level_2: string,
  level_3: string | any,
  level_4: string | any,
  TotalMarks: string,
  status: any,
  action: any
) {
  return {
    job,
    name,
    position,
    level_1,
    level_2,
    level_3,
    level_4,
    TotalMarks,
    status,
    action,
  };
}

const rows = [
  createData(
    "#001",
    "John Doe",
    "Designer",
    "6/10",
    "7/10",
    "3/10",
    "...",
    "...",
    <div className="bg-[#fff9ec] p-2 text-[#f5c961] flex items-center justify-center rounded-md">
      Active
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
  createData(
    "#002",
    "John smith",
    "Angular Developer",
    "6/10",
    "5/10",
    "5/10",
    "8/10",
    "24/40",
    <div className="bg-[#dbf3db] p-2 text-[#108f0e] flex items-center justify-center rounded-md">
      Hired
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
  createData(
    "#003",
    "Johnson Smith",
    "Python Developer",
    "6/10",
    "7/10",
    "3/10",
    "...",
    "...",
    <div className="bg-[#fff9ec] p-2 text-[#f5c961] flex items-center justify-center rounded-md">
      Active
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
  createData(
    "#004",
    "Stella",
    "Android Developer",
    "6/10",
    "2/10",
    <div className="flex items-center justify-center  ">
      <IoClose
        className="w-6 h-6 p-1 rounded-full bg-[#fce2e2]"
        color="#d12323"
      />
    </div>,
    <div className="flex items-center justify-center">
      <IoClose
        className="w-6 h-6 p-1 rounded-full bg-[#fce2e2]"
        color="#d12323"
      />
    </div>,
    "8/40",
    <div className="bg-[#fce2e2] p-2 text-[#d12323] flex items-center justify-center rounded-md">
      Reject
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
  createData(
    "#005",
    "Randy",
    "IOS Developer",
    "6/10",
    "7/10",
    "3/10",
    "...",
    "...",
    <div className="bg-[#fff9ec] p-2 text-[#f5c961] flex items-center justify-center rounded-md">
      Active
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
  createData(
    "#006",
    "John Doe",
    "Junior Designer",
    "6/10",
    "7/10",
    "3/10",
    "...",
    "...",
    <div className="bg-[#fff9ec] p-2 text-[#f5c961] flex items-center justify-center rounded-md">
      Active
    </div>,
    <div className="flex items-center justify-center">
      <GrFormView className="w-6 h-6" />
    </div>
  ),
];


export default function CandidateStatusTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Job ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">1st Level</StyledTableCell>
            <StyledTableCell align="center">2nd Level</StyledTableCell>
            <StyledTableCell align="center">3rd Level</StyledTableCell>
            <StyledTableCell align="center">4nd Level</StyledTableCell>
            <StyledTableCell align="center">Total Marks</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.job}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.position}</StyledTableCell>
              <StyledTableCell align="center">{row.level_1}</StyledTableCell>
              <StyledTableCell align="center">{row.level_2}</StyledTableCell>
              <StyledTableCell align="center">{row.level_3}</StyledTableCell>
              <StyledTableCell align="center">{row.level_4}</StyledTableCell>
              <StyledTableCell align="center">{row.TotalMarks}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
