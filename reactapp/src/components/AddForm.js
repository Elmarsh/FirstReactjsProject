import { Form, Button } from 'react-bootstrap';
import {EmployeeContext} from '../context/EmployeeContext';
import {useContext,useState} from 'react';

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext)

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");

    

    const [newEmployee, setnewEmployee] = useState({
        name:"",email:"", address:"",phone:""
    });




    const {name,email,address, phone} = newEmployee;

    const onInputChange = (e) =>{
        setnewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }




    const handleSubmit =(e)=>{

        e.preventDefault();

        addEmployee(name, email, address, phone)
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    name ="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name ="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    ass="address"
                    placeholder="address *"
                    name ="address"
                    value={address}
                    onChange={(e)=>onInputChange(e)}
                    row={3}
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="phone"
                    placeholder="phone"
                    name ="phone"
                    value={phone}
                    onChange={(e)=>onInputChange(e)}
                />
            </Form.Group>

            <Button type="submit" block variant="success">
                Add New Employee
            </Button>



        </Form>
    )
}


export default AddForm;