import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";
import { Component } from "react";

export default class Index extends Component {
  state = {
    projects: [],
  };
  static async getInitialProps() {
    let res, data, projects;
    try {
      res = await fetch(
        "https://new-portfolio-django-backend.herokuapp.com/api/v1/project/"
      );
      data = await res.json();
      projects = data.objects;
    } catch (error) {
      console.error(error);
    }
    return {
      projects: projects,
    };
  }
  async componentDidMount() {
    let res, data, projects;
    try {
      res = await fetch(
        "https://new-portfolio-django-backend.herokuapp.com/api/v1/project/"
      );
      data = await res.json();
      projects = data.objects;
      this.setState([projects]);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <Layout>
        <div className="portfolio">
          <div className="port">
            <h1> PORTFOLIO</h1>
            <div className="my-offer" style={{ marginLeft: "80px" }}>
              <p>
                <big>About me </big> I am a strong foundation in software
                engineering and programming principles across multiple
                platforms. Experienced i object-oriented programming,
                developing, testing/debugging code, and designing interfaces.
                Quick learner and a successful master of new technologies. See
                my works below
                <span className="icon">
                  <i
                    className="em em-point_down "
                    aria-role="presentation"
                    aria-label="WHITE DOWN POINTING BACKHAND INDEX"
                  ></i>
                </span>
              </p>
            </div>
          </div>
          <div className="portfolio2">
            <div className="part-one">
              <small>
                Now
                <br />
                <br />
                <br />
                <br />
                <br />
                2020
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Projects
              </small>
            </div>
            <div className="part-two">
              <h6 style={{ marginRight: "50px", marginTop: "60px" }}>
                <big>
                  Currently open to co-operation on new and existing projects.
                </big>
                <br />
                Looking for a Software Engineer, Frontend or Full-stack willing
                to join your team?
                <Link href={"/contact"}>
                  <b> Contact me.</b>
                </Link>{" "}
                I will answer you in ~24 hours.
              </h6>
              <div className="line"> </div>
              <h6 style={{ marginRight: "55px" }}>
                I had 12 Weeks Of Software Engineering Impressive Training
                Create Apps Using Front-end and Back-end Tools.This gave me a
                lot of experience and hindsight on how a proper team
                collaboration, recruitment, and project management process
                should look like. Also I graduated of{" "}
                <span style={{ color: "#B31D72" }}>
                  Computer Science Bachelor Degree
                </span>
                <Link href={"/Resume"}>
                  <b> My Resume </b>
                </Link>
                for more details.
              </h6>
              <div className="line"> </div>
              <ul>
                {this.props.projects
                  ? this.props.projects.map((index, key) => {
                      return (
                        <>
                          <div className="card ">
                            <div className="row no-gutters">
                              <div className="col-md-4" key={key}>
                                <img
                                  className=" projects_img "
                                  src={index.image}
                                  alt="photo"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">{index.title}</h4>
                                  <div className="bottoms">
                                    <button
                                      type="button"
                                      className="btn btn-light"
                                    >
                                      <a href={index.frontend}>
                                        <h6> Frontend Code</h6>{" "}
                                      </a>
                                    </button>

                                    <button
                                      type="button"
                                      className=" btn btn-light"
                                    >
                                      <a href={index.backend}>
                                        <h6> Backend Code</h6>{" "}
                                      </a>
                                    </button>
                                    <button
                                      type="button"
                                      className=" btn btn-light"
                                    >
                                      <a href={index.deployment}>
                                        <h6>Deployment </h6>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer">
                                <h6> Technologies : {index.details}</h6>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : this.state.projects.map((index, key) => {
                      return (
                        <>
                          <div
                            className="card mb-3"
                            style={{ maxWidth: "850px", height: "280px" }}
                          >
                            <div className="row no-gutters">
                              <div className="col-md-4" key={key}>
                                <img
                                  className=" projects_img"
                                  src={index.image}
                                  alt="photo"
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">{index.title}</h4>
                                  <div className="bottoms">
                                    <button
                                      type="button"
                                      className=" btn btn-secondary"
                                    >
                                      <a href={index.frontend}>
                                        <h6> Frontend Code</h6>{" "}
                                      </a>
                                    </button>
                                    <button
                                      type="button"
                                      className=" btn btn-secondary"
                                    >
                                      <a href={index.backend}>
                                        <h6> Backend Code</h6>{" "}
                                      </a>
                                    </button>
                                    <button
                                      type="button"
                                      className=" btn btn-secondary"
                                    >
                                      <a href={index.deployment}>
                                        <h6>Deployment </h6>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
