import React, {useState, useEffect} from 'react';
import Row from '../Table/Row';


function Table(props) {
    const [employeeList, setEmployeeList] = useState([])
    const [filteredEmployeeList, setFilteredEmployeeList] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(res => {
            console.log(res)
            setEmployeeList(res.results);
            setFilteredEmployeeList(res.results)
        })
    }, [])

    function filter(e) {
        let newList =employeeList.filter((employee) => {
            return employee.name.last.includes(e.target.value)
        })

        setFilteredEmployeeList(newList);
    }

    return (
        <>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={filter}/>
            </div>
            </nav>
            <div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEmployeeList.map((employee) => <Row employee={employee} />)
                    }
                </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;