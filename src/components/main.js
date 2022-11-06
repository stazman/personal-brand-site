import React from "react"
import CurrProfPhoto from "../images/new-best-pro-photo.jpg"
import { device } from "./device"
import styled from 'styled-components'

const MediaQueries = styled.div`

  @media ${device.laptopL} {
    .grid-item-line-space {
      padding-top: 1.5rem!important;
      padding-bottom: 1.5rem!important;
  }

  @media ${device.mobileL} {
    img {
      height: 10rem!important;
      width: 8rem!important;
    }
    .grid-item-left {
      width: 5rem!important;
    }
    .grid-item-center {
      width: 8rem!important;
    }
    .grid-item-right {
      width: 5rem!important;
    }
    p > a {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
      padding-right: 1rem!important;
      padding-left: .6rem!important;
    }
    .grid-item-line-space {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
    }
  }
  `

  const Main = () => (
  <MediaQueries>
    <main
      style={{background: `#efefef`,
        marginTop: `1%`,
        padding: 0
      }}
    >

      <div className='flex-container'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        <div class='flex-item'
          style={{
            display: 'flex',
            width: '34rem',
            marginLeft: '1rem'
          }}
        >
          <div
            className='grid-container'
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto',
              marginLeft: '2rem',
              marginRight: '1.5rem',
              marginTop: 0
            }}
          >
            <div
              className="grid-item"
              style={{
                fontFamily: 'arial',
                textAlign: 'center',
                paddingBottom: '1.1rem',
                justifyContent: 'center'
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  padding: 0,
                  margin: 0,
                  justifyContent: 'center'
                }}
              >
                Christopher DiStasio,
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  padding: 0,
                  margin: 0,
                  justifyContent: 'center'
                }}
              >
                Web Developer
              </p>
            </div>
            <div className="grid-item">
              <div
                className='grid-container'
                style={{
                  display: 'grid',
                  justifyContent: 'center',
                  gridTemplateColumns: '25% 50% 25%'
                }}
              >
                <div
                  className='grid-item-left'
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left'
                    }}
                  >
                    <a
                      href='https://resume-christopher-distasio.s3.filebase.com/Current-Resume-Christopher-DiStasio.pdf'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingRight: '1.8rem'
                      }}
                    >
                      Resume
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left'
                    }}
                  >
                    <a
                      href='https://github.com/stazman'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingRight: '1.8rem'
                      }}
                    >
                      Github
                    </a>
                  </p>
                </div>
                <div className='grid-item-center'
                  style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    style={{
                      border: '1px solid',
                      padding: 0,
                      margin: 0,
                      height: '100%',
                      width: '70%',
                      borderRadius: '50%'
                    }}
                    src={CurrProfPhoto}
                    alt="Christopher DiStasio"
                  />
                </div>
                <div
                  className='grid-item-right'
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'right',
                      justifyContent: 'right',
                      paddingRight: 0,
                      marginRight: 0
                    }}
                  >
                    <a
                      href='https://medium.com/commcodia'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingLeft: '1.8rem'
                      }}
                    >
                      Blog
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'right',
                      justifyContent: 'right',
                    }}
                  >
                    <a
                      href='https://www.linkedin.com/in/christopher-distasio-8b035444/'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingLeft: '1.8rem'
                      }}
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>

              <div className="grid-item"
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '1rem'
                }}
              >
                <a
                  href='mailto:cadistasio@gmail.com'
                  style={{
                    textDecoration: 'none'
                  }}
                >
                    cadistasio@gmail.com
                </a>
              </div>

              <div class="grid-item-line-space"
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 0,
                  paddingBottom: '1.5rem',
                  display: 'flex'
                }}
              >
              </div>

            </div>
          </div>

        <div
          className='flex-item'
          style={{
            display: 'flex',
            width: '34rem'
          }}
        >
          <article
            style={{
              borderWidth: '2px',
              borderStyle: 'solid',
              height: '30rem',
              overflow: 'scroll',
              marginRight: '2rem',
              marginLeft: '3rem',
              marginBottom: '2%'
            }}
          >
            <p
              style={{
                padding: '5%',
                paddingBottom: '2%',
                fontFamily: 'arial',
                fontSize: '20px',
                lineHeight: '120%',
                margin: 0
              }}
            >
              I’m Christopher, a marketing content creator and editor with substantial experience in the crypto and blockchain space, as well as a software developer and instructor with the knowledge and skill to tackle any programming or educational need.
              <br></br><br></br>
              I code to create great user experiences, learn continuously about code, and help others learn to code as well. And I'm passionate about solving coding and business challenges quickly, from strong foundational programming skills and effective development processes gained from the Flatiron Software Engineering Bootcamp, Revature, and freelance clients. Whether it's working with a team programmers or communicating with my own freelance clients, I approach all involved with a total customer service mindset.
              <br></br><br></br>
              Not only am I equipped with years of programming knowledge and experience, my passion for teaching code stems from a disposition and passion to care gained from working with language students from a diverse range of backgrounds, skill levels, and cultures. Furthermore, when teaching, I've served as a strong leader as well as team member, with extensive experience working among diverse teams of colleagues and presenting about successful classroom experiences.
              <br></br><br></br>
              Technical Skills: AJAX, Amazon Web Services, Angular 10, APIs, ASP.NET, Axios, Bootstrap, Capybara, cPanel, CSS, DBeaver, Eclipse, ERB, Faraday, Express.js, Gatsby, Git, Github, Heroku, Hibernate, HTML, Intellij, Java (EE8), JavaScript, JBoss, JDBC, Jenkins, jQuery, JSON, JSP, JSTL, JUnit, Linux, Maven, MongoDB, MySQL, Netlify, Node.js, OmniAuth, PgAdmin, PLSQL, PostgreSQL, Postman, React, React-Bootstrap, Redux, REST, RSpec, Ruby on Rails, SEO, Servlets, Sessions, Sqlite3, Spring, styled-components, TDD, Tomcat Catalina, TypeScript, Webpack, WildFly
            </p>
          </article>
        </div>

      </div>

    </main>
  </MediaQueries>
)

export default Main