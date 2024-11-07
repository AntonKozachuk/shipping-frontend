import React from "react";
import { useTranslation } from "react-i18next";
import aboutImage from "../assets/img/about/about-men.png"; // Update the path as needed

const AboutContent = () => {
  const { t } = useTranslation();

  return (
    <div
      className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
      data-wow-delay=".3s"
    >
      <div className="info-content-area">
        <div className="section-title">
          <h6>{t("home.about.about")}</h6>
          <h2>{t("home.about.title")}</h2>
        </div>
        <p>{t("home.about.desc")}</p>
        <p className="highlight">{t("home.about.p1")}</p>
        <p className="highlight">{t("home.about.p2")}</p>
        <p className="highlight">{t("home.about.p3")}</p>
        <p className="highlight">{t("home.about.p4")}</p>
        <p className="highlight">{t("home.about.p5")}</p>

        <div className="row founded">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="years">
              <span>25</span> Years of Success
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-12">
            <div class="text">
              Since we established in 1995 experience &amp; still a growing
              protfolio day by day!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutImage = () => {
  return (
    <div
      className="col-lg-6 col-md-12 col-sm-12 wow fadeInUp"
      data-wow-delay=".4s"
    >
      <div className="info-img">
        <img src={aboutImage} alt="About us" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="about" className="about-area section-padding pb-0">
      <div className="container">
        <div className="row">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
