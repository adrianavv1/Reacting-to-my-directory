import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import API from "../utils/API";

export default class GetUsers extends Component {
  state = {
    user: [],
  };

  columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 280,
    },
    { field: "phone", headerName: "Phone", width: 160 },
    { field: "username", headerName: "Username", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
  ];

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({
          user: res.data.results.map((e) => ({
            id: e.login.uuid,
            firstName: e.name.first,
            lastName: e.name.last,
            username: e.login.username,
            email: e.email,
            phone: e.phone,
          })),
        });
        // eslint-disable-next-line
        console.log(this.state.employee);
      })
      .catch((err) => {
        // eslint-disable-next-line no-unused-expressions
        err.message;
      });
  }

  render() {
    return (
      <>
        <DataGrid rows={this.state.user} columns={this.columns} pageSize={10} />
      </>
    );
  }
}

API.getUsers ().then (res => {
    console.log(res.data.results)
   
})


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default GetUsers