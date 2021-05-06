import { useContext, useState, useEffect } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';



const Employee = ({ employee }) => {


    // delete employeContext
    const { deleteEmployee } = useContext(EmployeeContext)


    const [show, setShow] = useState(false);

    const handleShow = () => { setShow(true) };
    const handleClose = () => { setShow(false) };


    useEffect(() => {
        return () => {
            handleClose()
        }
    }, [employee])

    return (
        <>



            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>

                <OverlayTrigger
                    overlay={
                        <Tooltip id='tooltip-on-top'>
                            EditX
                        </Tooltip>
                    }
                >
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" >&#xE254;</i></button>
                </OverlayTrigger>

                <OverlayTrigger
                    overlay={
                        <Tooltip id='tooltip-on-top'>
                            DeleteX
                        </Tooltip>
                    }
                >
                     <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>

               
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    Edit Employee
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee} />
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



export default Employee;