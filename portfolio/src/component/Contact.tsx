import Form from 'react-bootstrap/Form';
function Contact (){
    return(
    <>
        <h1 id={"contact"}>Contact</h1>
        <hr />
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

        <Form className='form'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
    </>
    )
}
export default Contact