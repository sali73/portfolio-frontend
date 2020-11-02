import Layout from  '../components/Layout'

const Contact = () => {
    return (
        <>
            <Layout>
                <div className='contact'>
                    <div className="port">
                        <h1>CONTACT ME</h1>
                    </div>    
                    <div className='my-offer'>
                        <p>I am available for hire and open to any ideas of cooperation.</p>
                    <div>
                    <form action="MAILTO:sally.elgendy@hotmail.com" method="post" enctype="text/plain">
                            Name:<br/>
                            <input type="text" name="name" /><br/>
                            E-mail:<br/>
                            <input type="text" name="mail" /><br/>
                            <input type='redio' name="gender" value="male" /> Male <br/>
                            <input type='redio' name="gender" value="female" /> Female <br/>
                            Comment:<br/>
                            <input type="text" name="comment" size="50" /><br/><br/>
                            <input type="submit" value="Send" />
                            <input type="reset" value="Reset" />
                    </form>

                    </div>
                    <ul className='contact-h5'>
                        <li><h5>E-mail: <a href='https://www.hotmail.com'> sally.elgendy@hotmail.com</a></h5></li>
                        <li><h5>LinkedIn: <a href='https://www.linkedin.com/in/sali-m-aa7a95b4/' >Sali Mohamed</a></h5></li>
                        <li><h5>Github: <a href='https://github.com/sali73'>sali73</a></h5></li>
                        <li><h5>Facebook: <a href='https://www.facebook.com/'>elgendy sally</a></h5></li>
                    </ul>
                    </div>
                </div>
            </Layout>
        </>
    )

}
export default Contact;