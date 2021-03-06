import Layout from  '../components/Layout'
import Link from "next/link";
const Offer = () => {
    return (
            <Layout>

                <div className='offer'>
                    <div className="port ">
                        <h1>MY OFFER </h1>
                    </div>
                </div>
                <div className='offerPage'>
                <div style={{height:'700px'}} className='my-offer'>
                        <p>I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end code bases.
                        My current toolset includes Elixir Language Ruby, React,Redux and all the other various frameworks, libraries and technologies related to them.
                        </p>
                        <h5>
                            <i class="em em-first_place_medal" aria-role="presentation" aria-label="FIRST PLACE MEDAL"></i>
                            I can help you with all the sides of your project :</h5>
                        <ul >
                            <li><h6>leading/co-developing the back-end and front-end.</h6></li>
                            <li><h6>leading, launching and monitoring the project.</h6></li>
                            <li><h6>researching possible techs.</h6></li>
                            <li><h6>mentoring the team.</h6></li>
                            <li><h6>estimating tasks.</h6></li>
                        </ul>
                    {/* <div className='line'> </div> */}
                    <div>
                        <h5><img src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/24/Other-html-5-icon.png'/> FRONT-END ENGINEERING:</h5>
                        <div className="my-offer-header">
                            <h6>My current experience and skills in front-end includes:</h6>
                        </div>
                        <ul style={{display:'flex' , justifyContent: 'space-between'}}>
                            <div>
                            <li><h6> HTML, CSS, SASS</h6></li>
                            <li><h6> javascript, ES6, jQuery</h6></li>
                            <li><h6> Angular, TypeScript</h6></li>
                            <li><h6> Ruby on Rails</h6></li>
                            <li><h6> Express/Node</h6></li>
                            </div>
                            <div >
                            <li><h6> webpack, npm</h6></li>
                            <li><h6> React, Next</h6></li>
                            <li><h6> Django</h6></li>
                            <li><h6> Redux</h6></li>
                            <li><h6> AJAX</h6></li>
                            </div>
                        </ul>
                    </div>
                    {/* <div className='line'> </div> */}
                    <div>
                        <h5><img src='https://icons.iconarchive.com/icons/thehoth/seo/24/seo-web-code-icon.png'/> BACK-END ENGINEERING:</h5>
                        <div className="my-offer-header">
                            <h6>What I can do for you at that side is :</h6>
                        </div>
                        <ul>
                            <div>
                                <li><h6> using different types of databases (PostgreSQL, MySQL, MongoDB).</h6></li>
                                <li><h6> lead development of backends in Elixir/Ruby.</h6></li>
                                <li><h6> cooperation with APIs. </h6></li>
                            </div>
                            <div>
                                <li><h6> python </h6></li>

                            </div>

                        </ul>
                    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    {/* <span style={{color:'#7c8591', width:'1200px'}}>
                        <h6>
                        <hr/> If your initial thought is that I can’t be the best in everything, it's okay. Send the design job to someone else, and I will take care of all the code development, or whatever other role you see me best in.
                        In cases when you already have an existing team, but you would still use some help, <Link href={'/contact'}> Contact me. </Link> as well. I’ll fit in very quickly, I promise.</h6>
                    </span> */}
                </div>
                </div>
            </Layout>
    )
}
export default Offer;
