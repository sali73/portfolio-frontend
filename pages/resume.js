import Layout from "../components/Layout";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Layout>
          <div className="jumbotron">
            <div className="resumeTop">
              <a
                className="frame"
                href={
                  "https://docs.google.com/document/d/1kTaH2bQx2KFEzSY1lM1ujMioQ3JcHNy_LVszurmZByY/edit?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button class="custom-btn btn-11">
                  <i className="fas fa-download" />
                  Download
                  <div class="dot"></div>
                </button>
              </a>
              <hr />
              <h3>Sali Mahmoud</h3>
              <h5>SOFTWARE ENGINEER</h5>
              <h6>
                Sally.elgendy@hotmail.com || www.github.com/sali73 ||
                www.linkedin.com/in/salimohamed
              </h6>
            </div>
            <hr />

            <div style={{ paddingTop: "10px" }} className="resume">
              <h5>SUMMARY</h5>
              <p>
                I am a strong foundation in software engineering and programming
                principles across multiple platforms. Experienced in
                object-oriented programming, developing, testing/debugging code,
                and designing interfaces.Quick learner and a successful master
                of new technologies.
              </p>
              <h5>SKILLS</h5>
              <p>
                <big>PROGRAMING LANGUAGES: </big>
                <br /> Server-Side design patterns and continuous delivery
                principles, development concepts and SDLC methodologies, Mobile
                Design, Cross-Browser Development, Content Management Systems,
                HTML, CSS, SASS, Modern UI frameworks ( Material UI, Bootstrap
                ), Javascript, Object Oriented JavaScript, JQuery, ReactJS,
                Node, Json, Express, Redux, workflow / build systems( webpack,
                npm ), Python, Django, Restful APIS, SQL, MySQL, RubyOn Rails,
                Go, Angular, Typescript, git/github, Trello, Debugging issues
                using Postman...
                <br />
                <br />
                <big>TECHNICAL SKILLS:</big> <br /> Microsoft Word, Microsoft
                Excel, Microsoft PowerPoint, Google Drive .
              </p>
              <div className="resumeEx">
                <h5>EXPERIENCE</h5>
                <div>
                  <big className="exTaitel">Coursera ( volunteer ):</big>
                  <h6 className="exTaitelInFo">
                    Python Mentor - June 2020 to Present - New York
                  </h6>
                  <ul>
                    <li>
                      Respond to questions from current Python Data Structures
                      learners and assist students in debug/solve problems.
                    </li>
                  </ul>
                </div>
                <div>
                  <big className="exTaitel">
                    General Assembly ( volunteer ):
                  </big>
                  <h6 className="exTaitelInFo">
                    Software Engineering Mentor - September 2020 to Present -
                    New York
                  </h6>
                  <ul>
                    <li>
                      Assisting students in understanding/creating/debugging
                      code, also provide technical support to solve problems.{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <big className="exTaitel">General Assembly :</big>
                  <h6 className="exTaitelInFo">
                    Software Engineering Fellow - April 2020 to Dec 2020 - New
                    York
                  </h6>
                  <ul>
                    <li>
                      12-weeks of software engineering impressive training
                      fellowship
                    </li>
                    <li>
                      {" "}
                      Build a series of development projects including Front-end
                      client pages, and Back-end database and server architect,
                      and full-stack web applications.{" "}
                    </li>
                    <li>
                      Programming languages and toolsets covered include:
                      Git/Github, HTML, CSS, SASS, javaScript, Express/Node,
                      jQuery, MongoDB, SQL, React, Python/Django, RESTful APIs,
                      SASS, Ruby on Rails, Go.
                    </li>
                  </ul>
                </div>
                <div>
                  <big className="exTaitel">Freelance :</big>
                  <h6 className="exTaitelInFo">
                    Full Stack Engineering - December 2017 to July 2018
                  </h6>
                  <ul>
                    <li>
                      Build a series of development projects full-stack web
                      applications.
                    </li>
                  </ul>
                </div>
                <div>
                  <big className="exTaitel">Record Media :</big>
                  <h6 className="exTaitelInFo">
                    Front-end Developer - Aug 2018 to Oct 2019 - Remote
                  </h6>
                  <ul>
                    <li>
                      Use markup languages like HTML, CSS, JavaScript, jQuery,
                      React, Redux, Node, RESTful APIs to create user friendly
                      web pages, Maintain and improve website, Design
                      mobile-based features, and Get feedback from, and build
                      solutions for, users and customers for
                      http://www.recordmediaeg.com
                    </li>
                  </ul>
                </div>
                <div>
                  <big className="exTaitel">El Marwa Food Industries :</big>
                  <h6 className="exTaitelInFo">
                    Junior Front-end Developer - May 2012 to September 2016 -
                    Cairo,Egypt
                  </h6>
                  <ul>
                    <li>
                      As a front-end developer, I work closely with designers,
                      producers, and our offshore teams in a global effort to
                      roll out a refresh of the company website. My
                      responsibilities include, but are not limited to,
                      maintaining and updating our codebase, as well as
                      incorporating new, rich interactive experiences into the
                      website. Functionalities include writing code in React,
                      Redux, Node, Express, API, MongoDB, HTML, CSS, Javascript,
                      JQuery, and JSP making use of the bootstrap framework.
                      Developing highly modularized and advanced object-oriented
                      (oop) design in javascript to ensure reusability,
                      extensibility, and ease of maintenance. Helping develop a
                      responsive framework that worked on a smartphone as well
                      as it did on tablets and desktops.
                      <a href="http://www.elmarwa.com">
                        <b>LINK </b>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h5>EDUCATION</h5>
              <ul className="edu">
                <li>
                  <big>Software Engineering Immersive : </big>
                  <br /> General Assembly
                  <a href="https://generalassemb.ly/">
                    {" "}
                    <b>LINK </b>{" "}
                  </a>{" "}
                  - NY,USA -2020
                </li>
                <li>
                  <big>Financial Management Master’s Degree :</big>
                  <br /> Arab Academy for Banking and Financial Sciences
                  <a href="https://www.aambfs.org/">
                    {" "}
                    <b>LINK </b>{" "}
                  </a>{" "}
                  - Cairo,Egypt - 2009
                </li>
                <li>
                  <big>Information Systems Foundation Degree :</big> <br />{" "}
                  Thebes Academy of science and Technology{" "}
                  <a href="http://www.thebesacademy.org/en/page.php?id=3">
                    {" "}
                    <b>LINK </b>{" "}
                  </a>
                  - Cairo,Egypt - 2005{" "}
                </li>
                <li>
                  <big>Computer Science Bachelor Degree :</big>
                  <br /> Thebes Academy of science and Technology{" "}
                  <a href="http://www.thebesacademy.org/en/page.php?id=3">
                    <b>LINK </b>{" "}
                  </a>
                  - Cairo,Egypt - 2004
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
export default Resume;
