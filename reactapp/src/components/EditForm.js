import { Form, Button } from 'react-bootstrap';
import {useContext,useState} from 'react';
import { EmployeeContext } from '../context/EmployeeContext';


const EditForm = ({theEmployee}) => {



    const {updateEmployee} = useContext(EmployeeContext);

    const employee=theEmployee;
    const id = employee.id;

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);


    const updatedEmployeee = {id,name,email,address,phone}

    
    const handleClick = (e) =>{
        e.preventDefault();
        updateEmployee(id,updatedEmployeee)
    }


    return (
        <Form onSubmit={handleClick}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    ass="address"
                    placeholder="address *"
                    name="address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    row={3}
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="phone"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </Form.Group>

            <Button type="submit" block variant="success">
                Edit Employee
            </Button>



        </Form>
    )
}


export default EditForm;