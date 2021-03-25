import React from 'react';

function Row(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.employee.login.uuid.slice(0.6)}</th>
                <td>{props.employee.name.first}</td>
                <td>{props.employee.name.last}</td>
                <td>{props.employee.gender}</td>
                <td>{props.employee.email}</td>
                <td>{props.employee.login.username}</td>
             </tr>
        </>
    );
}

export default Row;