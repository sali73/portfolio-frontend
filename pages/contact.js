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
                        <p><i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> I am available for hire and open to any ideas of cooperation <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> </p>
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
                                <label class="showOverlay" for="check">Show mask </label>
<input id="check" class="check" type="checkbox" />
<div class="containerOuter">
  <div class="container">
    <input type="radio" class="hidden" id="input1" name="inputs" />
    <label class="entry" for="input1"><div class="circle" >
 </div>
    <div class="entry-label">Mele</div></label>
    <input type="radio" class="hidden" id="input2" name="inputs" />
    <label class="entry" for="input2"><div class="circle"></div><div class="entry-label">Famle</div></label>
    <input type="radio" class="hidden" id="input3" name="inputs" />
    <label class="entry" for="input3"><div class="circle"></div><div class="entry-label">Computer</div></label>
    <div class="highlight"></div>
    <div class="overlay"></div>
  </div>
</div>
<svg width="0" height="0" viewBox="0 0 40 140">
  <defs>
    <mask id="holes">
      <rect x="0" y="0" width="100" height="140" fill="white" />
      <circle r="12" cx="20" cy="20" fill="black"/>
      <circle r="12" cx="20" cy="70" fill="black"/>
      <circle r="12" cx="20" cy="120" fill="black"/>
    </mask>
  </defs>
</svg>

                                </div>
                            </div>
                        </fieldset>
                     
                        <div class="form-group">
                            <label for="comment">Comment: </label>
                            <textarea name="comment" placeholder="Comment....." className="form-control" rows='3' ></textarea><br/>
                        </div>
                         
                        <button type="submit" className="btn btn-danger btn-md btn-block" style={{color:'white'}}> Submit</button>
                        <button type="reset" className="btn btn-danger btn-md btn-block" style={{color:'white'}}> Reset</button>
                    </form>
                    </div>

                    <div className='social-media'>
                        <p><i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> Find me on social media by clicking on our Instagram, Facebook, or Twitter <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> <i class="em em-star" aria-role="presentation" aria-label="WHITE MEDIUM STAR"></i> </p>
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