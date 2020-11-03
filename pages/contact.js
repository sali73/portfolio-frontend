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
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input class="form-check-input" type='radio' name="gender" value="female" id="gridRadios1"  checked />
                                        <label class="form-check-label" for="gridRadios1">
                                        Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type='radio' name="gender" value="male" id="gridRadios2" />
                                        <label class="form-check-label" for="gridRadios2">
                                        Male
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                     
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea name="comment" className="form-control" rows='3' ></textarea><br/>
                        </div>
                         
                        <button type="submit" className="btn btn-danger"> Submit</button>
                        <button type="reset" className="btn btn-danger"> Reset </button>
                    </form>

                    </div>

                    <div>
                        <h5>Find me on social media by clicking on our Instagram, Facebook, or Twitter.</h5>
                        <ul>
                            <li> <a className='' href='https://www.instagram.com/elgendy.sally/'><img src= 'https://ga-instruction.s3.amazonaws.com/assets/myga-html-css/instagram.png' alt = ''/></a></li>

                            <li> <a className='' href='https://www.facebook.com/selgendy'><img src= 'https://iconarchive.com/icons/designbolts/pink-girly-social/24/Active-Facebook-icon.png' alt = ''/></a></li>
                        
                            <li> <a className='' href='https://twitter.com/salimoh25979'><img src= 'https://icons.iconarchive.com/icons/designbolts/pink-girly-social/72/Active-Twitter-icon.png' alt = ''/></a></li>
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