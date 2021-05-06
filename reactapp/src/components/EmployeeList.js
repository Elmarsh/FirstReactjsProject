import Employee from './Employee';
import AddForm from './AddForm';
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState, useEffect } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import Pagination from './Pagination'



const EmployeeList = () => {

    const { sortedEmployees } = useContext(EmployeeContext);




    // modal useState
    const [show, setShow] = useState(false);

    const handleShow = () => { setShow(true) };
    const handleClose = () => { setShow(false) };



    // alert useState
    const [showAlert, setShowAlert] = useState(false)
    // const handleShowAlert = () =>setShowAlert(true);


    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
    }





    useEffect(() => {
        handleClose()
        return () => {
            handleShowAlert(true)
        }
    }, [sortedEmployees])





    // pagination sayfalama useState

    const [currentPage, setcurrentPage] = useState(1);
    const [employeesPerPage] = useState(2);

     
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);






    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                Employee List successfully updated!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployees.map((employee) => (

                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>

                        ))
                    }
                </tbody>
            </table>

            <Pagination
             pages = {totalPagesNum} 
             setcurrentPage ={setcurrentPage}
            
             currentEmployees ={currentEmployees}
             sortedEmployees ={sortedEmployees}
            />


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Add Employee
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default EmployeeList;


// sort((a,b)=>a.name.localeCompare(b.name))  // 1.yol a-dan b-ye siralamaq 
// sort((a,b)=>a.name < b.name ? -1:1 )       // 2.yol