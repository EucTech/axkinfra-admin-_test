"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "country",
    headerName: "Country",
    type: "string",
    width: 160,
  },
  {
    field: "city",
    headerName: "City",
    type: "string",
    width: 160,
  },
  {
    field: "District",
    headerName: "District",
    type: "string",
    width: 160,
  },
];

const rows = [
  {
    id: "AXKINFRA-933838",
    lastName: "Mugisha",
    firstName: "Shaffi",
    country: "Rwanda",
    city: "Kigali",
    District: "Nyarugenge",
  },
  {
    id: "AXKINFRA-933839",
    lastName: "Aline",
    firstName: "Shyaka",
    country: "Rwanda",
    city: "Kigali",
    District: "Gasabo",
  },
  {
    id: "AXKINFRA-933840",
    lastName: "Uwase",
    firstName: "Claire",
    country: "Rwanda",
    city: "Kigali",
    District: "Kicukiro",
  },
  {
    id: "AXKINFRA-933841",
    lastName: "Niyonzima",
    firstName: "Eric",
    country: "Rwanda",
    city: "Butare",
    District: "Huye",
  },
  {
    id: "AXKINFRA-933842",
    lastName: "Mukamana",
    firstName: "Jeanne",
    country: "Rwanda",
    city: "Ruhengeri",
    District: "Musanze",
  },
  {
    id: "AXKINFRA-933843",
    lastName: "Habimana",
    firstName: "Paul",
    country: "Rwanda",
    city: "Gisenyi",
    District: "Rubavu",
  },
  {
    id: "AXKINFRA-933844",
    lastName: "Ishimwe",
    firstName: "Alice",
    country: "Rwanda",
    city: "Kigali",
    District: "Nyarugenge",
  },
  {
    id: "AXKINFRA-933845",
    lastName: "Nshimiyimana",
    firstName: "Jean",
    country: "Rwanda",
    city: "Kigali",
    District: "Gasabo",
  },
  {
    id: "AXKINFRA-933846",
    lastName: "Uwitonze",
    firstName: "Marie",
    country: "Rwanda",
    city: "Kigali",
    District: "Kicukiro",
  },
  {
    id: "AXKINFRA-933847",
    lastName: "Mutesi",
    firstName: "Sandrine",
    country: "Rwanda",
    city: "Butare",
    District: "Huye",
  },
  {
    id: "AXKINFRA-933848",
    lastName: "Kayitesi",
    firstName: "Aline",
    country: "Rwanda",
    city: "Ruhengeri",
    District: "Musanze",
  },
  {
    id: "AXKINFRA-933849",
    lastName: "Bizimana",
    firstName: "Emmanuel",
    country: "Rwanda",
    city: "Gisenyi",
    District: "Rubavu",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function UsersTable() {
  return (
    <Paper sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
