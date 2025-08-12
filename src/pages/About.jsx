import React from "react";
import "../css/Home.css";
import FloatingBtn from "../components/FloatingBtn";
import MySwiper from "../components/MySwiper";

function About() {
  return (
    <>
      <FloatingBtn />
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
      <div className="container">
        <MySwiper />
      </div>
    </>
  );
}

export default About;
