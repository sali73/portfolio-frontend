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

                    <form action="https://formspree.io/f/mknpbvdj" method="POST" className='connect-form'>
                        <div className='form-row'>
                            <div class="form-group col-md-6">
                                <label for="name"> <h6 style={{paddingRight:'10px'}}>Name: </h6></label>
                                <input type="text" name="name" className="form-control" placeholder="Name"/><br/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="mail"><h6 style={{paddingRight:'10px'}}>E-mail: </h6></label>
                                <input type="text" name="mail" className="form-control" placeholder='E-mail'/><br/>
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0"><h6 style={{ paddingBottom:'20px'}}>Gender: </h6></legend>
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
                            <label for="comment">Comment: </label>
                            <textarea name="comment" className="form-control" rows='3' ></textarea><br/>
                        </div>
                         
                        <button type="submit" className="btn btn-danger btn-block" style={{color:'white'}}> Submit</button>
                        <button type="reset" className="btn btn-danger btn-block" style={{color:'white'}}> Reset</button>
                    </form>
                    </div>

                    <div className='social-media'>
                        <p>Find me on social media by clicking on our Instagram, Facebook, or Twitter.</p>
                        <ul>
                            <li> <a className='' href='https://www.instagram.com/elgendy.sally/'><img src= 'https://icons.iconarchive.com/icons/uiconstock/socialmedia/48/Instagram-icon.png' alt = ''/></a></li>

                            <li> <a className='' href='https://www.facebook.com/selgendy'><img src= 'https://icons.iconarchive.com/icons/designbolts/pink-girly-social/48/Active-Facebook-icon.png' alt = ''/></a></li>
                        
                            <li> <a className='' href='https://twitter.com/salimoh25979'><img src= 'https://icons.iconarchive.com/icons/designbolts/pink-girly-social/48/Active-Twitter-icon.png' alt = ''/></a></li>
                        </ul>
                    </div>

                    </div>
                </div>
            </Layout>
        </>
    )

}
export default Contact;