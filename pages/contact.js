import Layout from  '../components/Layout'

const Contact = () => {
    return (
        <>
            <Layout>
                <div className='contact'>
                    <div className="port">
                        <h1>CONTACT ME</h1>
                    </div>  
                    <form action="https://formspree.io/f/mknpbvdj" method="POST" >
                        <h1> I am available for hire and open to any ideas of cooperation</h1>
                        <div className='form-row'>
                            <div class="form-group col-md-6">
                                <input type="text" name="name"  placeholder="Enter Your Name"/><br/>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" name="mail" placeholder='What is your email?'/>
                                <br/>
                            </div>
                        </div>
                        <fieldset class="form-group " >
                            <div class="row">
                            <section class="light">
                                <legend style={{ marginLeft:'80px' , color: '#B31D72', fontSize: '22px'}}>Gender:</legend>
                                <div class="col-sm-10">
                                    <div class="form-check">
                                    <label for="gridRadios1">
                                        <input  type='radio' name="gender" value="female" id="gridRadios1"  checked />
                                        <span class="design"></span>
                                         <span class="text">Female</span>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="gridRadios2" >
                                        <input class="form-check-input" type='radio' name="gender" value="male" id="gridRadios2" />
                                        <span class="design"></span>
                                        <span class="text"> Male</span>
                                       
                                        </label>
                                    </div>
                                </div>
                                </section>
                            </div>
                        </fieldset>
                     
                        <div class="form-group">
                            <textarea style={{ width:'550px', padding:'20px' , margin:'50px 20px 0px'}} name="comment" placeholder="Comment....." className="form-control" rows='5' ></textarea><br/>
                        </div>
                        <hr/>
                         <div style={{ textAlign:'center'}}>   
                            <button type="submit" > Submit</button>
                            <button type="reset"> Reset</button>
                        </div>                          
                    </form>
                    </div>
                    <div className='social-media'>
                        <h4> Find me on social media!</h4>
                        <ul>
                            <li> <a className='' href='https://www.instagram.com/elgendy.sally/'><img src= 'https://icons.iconarchive.com/icons/uiconstock/socialmedia/48/Instagram-icon.png' alt = ''/></a></li>

                            <li> <a className='' href='https://www.facebook.com/selgendy'><img src= 'https://icons.iconarchive.com/icons/designbolts/pink-girly-social/48/Active-Facebook-icon.png' alt = ''/></a></li>
                        
                            <li> <a className='' href='https://twitter.com/salimoh25979'><img src= 'https://icons.iconarchive.com/icons/designbolts/pink-girly-social/48/Active-Twitter-icon.png' alt = ''/></a></li>
                        </ul> 
                        
                    </div>
            </Layout>
        </>
    )

}
export default Contact;