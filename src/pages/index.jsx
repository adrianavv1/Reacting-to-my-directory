import React from 'react';
import GetUsers from '../components/GetUsers';
// import { DataGrid } from '@material-ui/data-grid';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';



// function Index() {
//     // eslint-disable-next-line no-undef
//     const { data } = useGetUsers({
//       rowLength: 6,
//       maxColumns: 10,
//     });

//     return (
//       <div style={{ height: 400, width: '100%' }}>
//         <div style={{ display: 'flex', height: '100%' }}>
//           <div style={{ flexGrow: 1 }}>
//             <DataGrid {...data} />
//           </div>
//         </div>
//       </div>
//     );
//   }






function Index() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>

          <GetUsers />
        </div>
      </div>
    </div>
  );
}

export default Index 