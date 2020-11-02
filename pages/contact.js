import Layout from  '../components/Layout'

const Contact = () => {
    return (
        <>
            <Layout>
                <div className='contact'>
                    <div className="port">
                        <h1>CONTACT ME</h1>
                    </div>
                    <form action="action_page.php">

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name..">

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                        <label for="country">Country</label>
                        <select id="country" name="country">
                        <option value="australia">USA</option>
                        <option value="canada">Egypt</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                        <input type="submit" value="Submit">

                    </form>
                    
                    <div className='my-offer'>
                        <p>I am available for hire and open to any ideas of cooperation.</p>
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