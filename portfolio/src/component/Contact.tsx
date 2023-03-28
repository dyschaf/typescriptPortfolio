import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact (){
    return(
    <div className='background'>
        <h1 className="center" id={"contact"}>Contact</h1>
        <hr />
        <p className="center">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form action="https://formsubmit.co/dovidschaffel@gmail.com" method="POST">
        <Form className='form'action="https://formsubmit.co/schaffeldovid@gmail.com" method="POST">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control className="grey" type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="grey"type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control  className="grey" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        <input type="submit" name="" id="" />
        </form>
    </div>
    )
}
export default Contact