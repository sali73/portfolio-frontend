import Head from "next/head";
import "../assets/css/style.css";
import Index from "../pages/index";
import Contact from "../pages/contact";
import Offer from "../pages/my_offer";
import Resume from "../pages/resume";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>portfoilio</title>
        <link
          rel="stylesheet"
          media="screen and (min-width: 701px) and (max-width: 900px)"
          href="css/medium.css"
        />
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
      </Head>
      <div className="grid ">
        <nav className="background">
          <div className="transbox">
            <div className="navTop">
              <img
                className="myimg"
                src="https://imgur.com/Ghlpeff.jpg"
                alt=""
              />
              <span class="back">
                <span>
                  <h4>SALI MOHAMED</h4>
                </span>
              </span>
              <h6> SOFTWEAR ENGINEERING </h6>
            </div>
            <div className="navMid">
              <a class="btn btn-2 " href={"/"}>
                PORTFOLIO >
              </a>
              <a class="btn btn-2 " href={"/my_offer"}>
                What I Offer
              </a>
              <a class="btn btn-2 " href={"/Resume"}>
                My Resume
              </a>
              <a class="btn btn-2 " href={"/contact"}>
                Contact Me
              </a>

              {/* <a class="btn btn-2 " href={'https://docs.google.com/document/d/e/2PACX-1vQn7QWbTkiiFuM5f3oYoWdod-uufQcF-dDOT_-LDZE7w5wOwKh1iF4q5JOq3d0mHaRtpLvW3pIaJUJ6/pub'}>My Resume</a> */}
            </div>
            <div className="navBottom">
              <ul>
                <h6>GIT IN TOUCH</h6>
                <li>
                  {" "}
                  <a className="touch" href="https://www.hotmail.com">
                    <img
                      src="https://iconarchive.com/icons/custom-icon-design/mono-general-2/24/mail-icon.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="touch"
                    href="https://www.linkedin.com/in/sali-m-aa7a95b4/"
                  >
                    <img
                      src="https://iconarchive.com/icons/graphics-vibe/purple-glossy-social/24/linkedin-icon.png"
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="touch" href="https://github.com/sali73">
                    <img
                      src="https://iconarchive.com/icons/limav/flat-gradient-social/24/Github-icon.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="touch" href="https://www.facebook.com/">
                    <img
                      src="https://iconarchive.com/icons/designbolts/pink-girly-social/24/Active-Facebook-icon.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </nav>
        <main>{props.children}</main>
      </div>
    </div>
  );
};
export default Layout;
