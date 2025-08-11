import React from "react";
import "./css/Home.css";
import "./components/MenuBar.css";
import CustomCursor from "./components/CustomCursor";

function Home() {
  return (
    <>
      <CustomCursor />
      <button className="floatingBtn" id="scrollBtn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 13L12 18L17 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6L12 11L17 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <nav className="main-nav">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="about.html" className="nav-home">
              HORTUS
            </a>
          </div>
          <div className="menu">
            <a href="about.html" className="nav-link active">
              About
            </a>
            <a href="project.html" className="nav-link">
              Project
            </a>
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="container">
        <section className="intro">
          {/* <!-- intro --> */}
          <div className="intro-content">
            <h1 className="main-title">
              안녕하세요,
              <br />
              디자이너 정희원입니다.
            </h1>

            <h2 className="subtitle">Detail makes the difference</h2>

            <div className="description">
              <p className="desc-intro">
                저는 작고 사소한 불편함들을 발견하는 걸 좋아하는 디자이너입니다.
              </p>

              <div className="desc-detail">
                <p>
                  앱을 쓰다가 "어? 이게 왜 이렇게?" 하고 멈칫하거나,
                  <br />
                  버튼을 눌렀는데 아무 반응이 없어서 당황스러웠던 경험이
                  모두에게 한 번쯤은 있잖아요.
                  <br />
                  그런 순간들을 포착하고 해결할 방법을 고민하게 됩니다.
                </p>
              </div>

              <div className="desc-philosophy">
                <p>
                  좋은 디자인은 작은 목소리도 놓치지 않아야 한다고 생각해요.
                  <br />
                  사소함의 소중함을 아는 사람이 좋은 디자이너라고 생각합니다.
                  <br />
                  제가 생각하는 디자이너의 역할은 모든 사람들에게 친절한
                  디자인을 하는 사람입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="background-gradient"></div>
          {/* <!-- animation --> */}
        </section>
      </div>
      <div className="container2">
        <h2 className="sectionTitle">work</h2>
        <section className="project-wrapper">
          <div className="project-grid">
            <div className="project-item" data-year="2025">
              <a href="https://github.com/WeCare-DeepDive">
                <img
                  className="project-img"
                  src="/source/img/project1.png"
                  alt="위케어 프로젝트"
                />
                <div className="overlay">
                  <div className="project-description">
                    <h2>위케어</h2>
                    <p>2025.07~2025.08 진행</p>
                    <br />
                    <p>기획/디자인/개발 참여 (기여도 50%)</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="project-item" data-year="2023">
              <a href="https://github.com/MuslingProject">
                <img
                  className="project-img"
                  src="/source/img/project2.png"
                  alt="Mus-ling 프로젝트"
                />
                <div className="overlay">
                  <div className="project-description">
                    <h2>Mus-ling</h2>
                    <p>2023.03~2023.12 진행</p>
                    <br />
                    <p>AI 개발/디자인 참여 (기여도 40%)</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="project-item" data-year="2023">
              <img
                className="project-img"
                src="/source/img/project1.png"
                alt="Project"
              />
              <div className="overlay">
                <div className="project-description">
                  <h2>Project</h2>
                  <p>Content</p>
                </div>
              </div>
            </div>
            <div className="project-item" data-year="2022">
              <img
                className="project-img"
                src="/source/img/project1.png"
                alt="Project"
              />
              <div className="overlay">
                <div className="project-description">
                  <h2>Project</h2>
                  <p>Content</p>
                </div>
              </div>
            </div>
            <div className="project-item" data-year="2021">
              <img
                className="project-img"
                src="/source/img/project1.png"
                alt="Project"
              />
              <div className="overlay">
                <div className="project-description">
                  <h2>Project</h2>
                  <p>Content</p>
                </div>
              </div>
            </div>
            <div className="project-item" data-year="2020">
              <img
                className="project-img"
                src="/source/img/project1.png"
                alt="Project"
              />
              <div className="overlay">
                <div className="project-description">
                  <h2>Project</h2>
                  <p>Content</p>
                </div>
              </div>
            </div>
            <div className="project-item" data-year="2019">
              <img
                className="project-img"
                src="/source/img/project1.png"
                alt="Project"
              />
              <div className="overlay">
                <div className="project-description">
                  <h2>Project</h2>
                  <p>Content</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;