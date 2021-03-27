import React, {useState, useEffect} from 'react';
import Row from '../Table/Row';
import Sort from '../Table/Sort';

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
    // eslint-disable-next-line 
    function filter(e) {
        let newList =employeeList.filter((employee) => {
            return employee.name.last.includes(e.target.value)
        })
        //Clue here? filter or sort not being called.
        setFilteredEmployeeList(newList);
    }

    
    return (
        <>
            <nav class="navbar navbar-light bg-light">
            <Sort filteredEmployeeList={filteredEmployeeList} setFilteredEmployee={setFilteredEmployeeList}/>
            </nav>
            <div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">City</th>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">User Name</th>
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