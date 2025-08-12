import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "../css/MySwiper.css";

// 사진 import
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.jpeg";

function MySwiper() {
  const [activeYear, setActiveYear] = useState("all");

  const projects = [
    {
      year: "2025",
      title: "위케어",
      period: "2025.07~2025.08 진행",
      contribution: "기획/디자인/개발 참여 (기여도 60%)",
      image: project1,
      link: "https://github.com/WeCare-DeepDive",
    },
    {
      year: "2023",
      title: "Mus-ling",
      period: "2023.03~2023.12 진행",
      contribution: "AI 개발/디자인 참여 (기여도 40%)",
      image: project2,
      link: "https://github.com/MuslingProject",
    },
    {
      year: "2023",
      title: "언제만나 WhentoMeet",
      period: "2022.12~2023.01 진행",
      contribution: "효율적인 약속 잡기 서비스 (기여도 50%)",
      image: project3,
      link: "https://github.com/when-we-meet/DontLate",
    },
    {
      year: "2022",
      title: "BLIND",
      period: "2022.05~2022.12 진행",
      contribution: "횡스크롤 로그라이크 RPG",
      image: project4,
      link: "https://github.com/GAMPOT-DEV/Project_Blind",
    },
    {
      year: "2021",
      title: "Project",
      period: "Content",
      contribution: "",
      image: "../source/img/project1.png",
      link: null,
    },
    {
      year: "2020",
      title: "Project",
      period: "Content",
      contribution: "",
      image: "../source/img/project1.png",
      link: null,
    },
    {
      year: "2019",
      title: "Project",
      period: "Content",
      contribution: "",
      image: "../source/img/project1.png",
      link: null,
    },
  ];

  const years = ["all", "2025", "2024", "2023", "2022", "2021", "2020", "2019"];

  const filteredProjects =
    activeYear === "all"
      ? projects
      : projects.filter((project) => project.year === activeYear);

  const ProjectItem = ({ project }) => (
    <div className="project-item">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            className="project-img"
            src={project.image}
            alt={project.title}
          />
          <div className="overlay">
            <div className="description">
              <h2>{project.title}</h2>
              <p>{project.period}</p>
              {project.contribution && (
                <>
                  <br />
                  <p>{project.contribution}</p>
                </>
              )}
            </div>
          </div>
        </a>
      ) : (
        <>
          <img
            className="project-img"
            src={project.image}
            alt={project.title}
          />
          <div className="overlay">
            <div className="description">
              <h2>{project.title}</h2>
              <p>{project.period}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="project-container">
      {/* 연도 탭 */}
      <div className="year-tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`year-tab ${activeYear === year ? "active" : ""}`}
            onClick={() => setActiveYear(year)}
          >
            {year === "all" ? "All" : year}
          </button>
        ))}
      </div>

      {/* 프로젝트 스와이퍼 */}
      <section className="project-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Grid]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2} // 한 번에 넘길 슬라이드 개수
          grid={{
            rows: 2,
            fill: "row",
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2, // 2열 x 2행 = 4개
              grid: {
                rows: 2,
              },
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3, // 3열 x 2행 = 6개
              grid: {
                rows: 2,
              },
            },
          }}
          className="project-swiper"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectItem project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 네비게이션 */}
        <div className="pagination">
          <button className="pagination-btn swiper-button-prev">&lt;</button>
          <div className="swiper-pagination page-numbers"></div>
          <button className="pagination-btn swiper-button-next">&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default MySwiper;
