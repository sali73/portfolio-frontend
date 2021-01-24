import Layout from  '../components/Layout'

const Resume = () => {
    console.log('this is the contact page ')
    return (
        <>
            <Layout>
                <div className= 'jumbotron'>
                    <div className='resumeTop'>
                        <h3>Sali Samir Mahmoud</h3>
                        <h5>SOFTWARE ENGINEER</h5>
                        <h6>Sally.elgendy@hotmail.com  |  Yonkers, New York |  https://github.com/sali73  |  https://www.linkedin.com/in/salimohamed</h6>
                    </div><hr/>
                    
                    <div className='resume'>
                        <h5>SUMMARY</h5>
                        <p>I am a strong foundation in software engineering and programming principles across multiple platforms. Experienced in object-oriented programming, developing, testing/debugging code, and designing interfaces.Quick learner and a successful master of new technologies.</p>
                        <h5>SKILLS</h5>
                        <p><big>PROGRAMING LANGUAGES: </big><br/>  Software development lifecycle (SDLC), HTML5, CSS3, SASS, JavaScript, ES6, jQuery, workflow / build systems ( webpack, npm ), RESTful APIs, JSON, Modern UI frameworks ( Material UI, Bootstrap ), React, Next.js, Angular, TypeScript, Redux, AJAX, Python/Django, Ruby, Ruby on Rails, Express/Node, Databases( MongoDB / PostgreSQL / SQL ), Source code version control systems ( Git, Github ), Trello, Debugging issues using Postman..<br/><br/>
                        <big>TECHNICAL SKILLS:</big> <br/> Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Google Drive .</p>
                        <div className='resumeEx'>
                        <h5>EXPERIENCE</h5>
                        <div>
                            <big className='exTaitel'>General Assembly ( volunteer ):</big>
                            <h6 className='exTaitelInFo'>Software Engineering Mentor - September 2020 to Present  - New York</h6>
                           <ul>
                               <li>Assisting students in understanding/creating/debugging code, also provide technical support to solve problems. </li>
                            </ul> 
                        </div>
                        <div>
                            <big className='exTaitel'>Coursera ( volunteer ):</big>
                            <h6 className='exTaitelInFo'>Python Mentor - June 2020 to Present - New York</h6>
                            <ul>
                                <li>Respond to questions from current Python Data Structures learners and assist students in debug/solve problems.</li>
                            </ul>
                        </div>
                        <div>
                            <big className='exTaitel'>General Assembly :</big>
                            <h6 className='exTaitelInFo'>Software Engineering Fellow - April 2020 to Current - New York</h6>
                            <ul>
                                <li>12-weeks of software engineering impressive training fellowship</li>
                                <li> Build a series of development projects including Front-end client pages, and Back-end database and server architect, and full-stack web applications. </li>
                                <li>Programming languages and toolsets covered include:
                                    Git/Github, HTML, CSS, SASS, javaScript, Express/Node, jQuery, MongoDB, SQL, React, Python/Django, RESTful APIs, SASS, Ruby on Rails.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <big className='exTaitel'>Freelance :</big>
                            <h6 className='exTaitelInFo'>Full stack Engineering - December 2017 to July 2018</h6>
                            <ul>
                                <li>Build a series of development projects full-stack web applications.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <big className='exTaitel'>El Marwa Food Industries :</big>
                            <h6 className='exTaitelInFo'>Junior front end developer - May 2012 to September 2016 - Cairo,Egypt</h6>
                            <ul>
                                <li>Implemented web designs and outlook through programming languages HTML, CSS , jQuery and JavaScript frameworks to renew and update the industrie website <a href='http://www.elmarwa.com'>elmarwa</a></li>

                            </ul>
                        </div>
                    </div>
                        <h5>EDUCATION</h5>
                        <ul className='edu'>
                            <li><big>Software Engineering Immersive : </big><br/> General Assembly - NY,USA -2020 <a href='https://generalassemb.ly/'> LINK </a></li>
                            <li><big>Financial Management Master’s Degree :</big><br/> Arab Academy for Banking and Financial Sciences<a href='https://www.aambfs.org/'> LINK </a> -  Cairo,Egypt - 2009</li>
                            <li><big>Information Systems Foundation Degree :</big> <br/> Thebes Academy of science and Technology <a href='http://www.thebesacademy.org/en/page.php?id=3'> LINK </a>-  Cairo,Egypt - 2005 </li>
                            <li><big>Computer Science Bachelor Degree :</big><br/> Thebes Academy of science and Technology <a href='http://www.thebesacademy.org/en/page.php?id=3'> LINK </a>- Cairo,Egypt - 2004</li>
                        </ul>
                </div>
            </div>
            </Layout>
        </>
    )
}
export default Resume;