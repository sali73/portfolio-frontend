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

                    <form action="https://formspree.io/f/mknpbvdj" method="POST" >
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" name="name" /><br/>
                        </div>
                        <div class="form-group">
                            <label for="mail">E-mail:</label>
                            <input type="text" name="mail" /><br/>
                        </div>
                    
                        <input type='radio' name="gender" value="male" /> Male <br/>
                        <input type='radio' name="gender" value="female" /> Female <br/>

                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea name="comment" cols='30' rows='10' ></textarea><br/>
                        </div>
                         
                        <button type="submit" className="btn btn-primary"> Submit</button>
                        <button type="reset" className="btn btn-primary"> Reset </button>
                    </form>

                    </div>

                    <div>
                        <h3>Find me on social media by clicking on our Instagram, Facebook, or Twitter.</h3>
                        <ul>
                            <li> <a className='touch' href='https://www.hotmail.com'><img src= 'https://iconarchive.com/icons/custom-icon-design/mono-general-2/24/mail-icon.png' alt = ''/></a></li>
                            <li> <a className='touch' href='https://www.linkedin.com/in/sali-m-aa7a95b4/' ><img src= 'https://iconarchive.com/icons/graphics-vibe/purple-glossy-social/24/linkedin-icon.png' alt = ''/></a> </li>
                            <li> <a className='touch' href='https://github.com/sali73'><img src= 'https://iconarchive.com/icons/limav/flat-gradient-social/24/Github-icon.png' alt = ''/></a></li>
                            <li> <a className='touch' href='https://www.facebook.com/'><img src= 'https://iconarchive.com/icons/designbolts/pink-girly-social/24/Active-Facebook-icon.png' alt = ''/></a></li>
                        </ul>
                    </div>


                    {/* <ul className='contact-h5'>
                        <li><h5>E-mail: <a href='https://www.hotmail.com'> sally.elgendy@hotmail.com</a></h5></li>
                        <li><h5>LinkedIn: <a href='https://www.linkedin.com/in/sali-m-aa7a95b4/' >Sali Mohamed</a></h5></li>
                        <li><h5>Github: <a href='https://github.com/sali73'>sali73</a></h5></li>
                        <li><h5>Facebook: <a href='https://www.facebook.com/'>elgendy sally</a></h5></li>
                    </ul> */}
                    </div>
                </div>
            </Layout>
        </>
    )

}
export default Contact;