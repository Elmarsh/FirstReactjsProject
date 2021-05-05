import Employee from './Employee';
import AddForm from './AddForm';
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext, useState, useEffect } from 'react';
import { Button, Modal,Alert } from 'react-bootstrap';


const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);




    // modal setState
    const [show, setShow] = useState(false);

    const handleShow = () => { setShow(true) };
    const handleClose = () => { setShow(false) };



    // alert setState
    const [showAlert, setShowAlert] = useState(false)








    // komponentde bir deyisiklik olsa modul tekrar baglansin (render edir);
    useEffect(() => {
        return () => {
            handleClose()
        }
    }, [employees])


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

            <Alert show={showAlert} variant="success" onClose={() => setShow(false)} dismissible>
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
                        employees.sort((a,b)=>a.name.localeCompare(b.name)).map((employee) => (

                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>

                        ))
                    }
                </tbody>
            </table>



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