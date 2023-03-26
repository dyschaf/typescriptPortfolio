function Contact (){
    return(
        <>
        <h1 id={"contact"}>Contact</h1>
        <hr />
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form action="" method="get">
            <label>Name:
                <input name="name" type="text" />
            </label>
            <label>Email:
                <input name="email" type="email" />
            </label>
            <label>Message:
                <input name="message" type="text" />
            </label>
            <input type="submit"/>
        </form>
        </>
    )
}
export default Contact