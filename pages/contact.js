import Layout from  '../components/Layout'

const Contact = () => {
    return (
        <>
            <Layout>
                <div className='contact'>
                    <div className="port">
                        <h1>CONTACT ME</h1>
                    </div>   

                    {/* <div className='my-offer'>
                        <p><i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> I am available for hire and open to any ideas of cooperation <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> </p>
                    <div> */}

                    <form action="https://formspree.io/f/mknpbvdj" method="POST" >
                        <h1> I am available for hire and open to any ideas of cooperation</h1>
                        <div className='form-row'>
                            <div class="form-group col-md-6">
                                {/* <label for="name"> <h6 style={{paddingRight:'10px'}}>Name: </h6></label> */}
                                <input type="text" name="name"  placeholder="Name"/><br/>
                            </div>
                            <div class="form-group col-md-6">
                                {/* <label for="mail"><h6 style={{paddingRight:'10px'}}>E-mail: </h6></label> */}
                                <input type="text" name="mail" placeholder='E-mail'/><br/>
                            </div>
                        </div>
                        <fieldset class="form-group">
                            <div class="row">
                                <legend style={{paddingLeft:'35px'}} className="col-form-label col-sm-2 pt-0">Gender:</legend>
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
                            <textarea style={{ width:'650px', padding:'20px' , margin:'20px'}} name="comment" placeholder="Comment....." className="form-control" rows='4' ></textarea><br/>
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