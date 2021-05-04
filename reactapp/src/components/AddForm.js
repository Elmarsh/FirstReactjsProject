import { Form, Button } from 'react-bootstrap';

const AddForm = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name *"
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="email *"
                    required
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    ass="address"
                    placeholder="address *"
                    row={3}
                />
            </Form.Group>


            <Form.Group>
                <Form.Control
                    type="phone"
                    placeholder="phone"
                />
            </Form.Group>

            <Button type="submit" block variant="success">
                Add New Employee
            </Button>



        </Form>
    )
}


export default AddForm;