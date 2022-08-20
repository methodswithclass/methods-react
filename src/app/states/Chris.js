import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Resume from '../components/resume/Resume';
import * as u from '../services/utility.service';
import * as data from '../services/data.service';
import bioPhoto from '../../assets/img/bio-photo3.jpg';
import linkedin from '../../assets/img/linkedin.png';
import resumeDoc from '../../assets/img/cpolito_201810.docx';

const hidebutton = () => {
  u.hideMenuButton('chrisbody');
};

const email = () => {
  console.log('clicked email');

  window.location.href = 'mailto:chris@methodswithclass.com';
};

const resume = () => {
  console.log('clicked resume');

  window.location.href = resumeDoc;
};

const Card = () => {
  var emailme = u.makeTitle('email me\nchris@methodswithclass.com', '\n');

  return (
    <div className="relative width-300 hcenter cutoff">
      <div className="relative width pointer margin-v-20" onClick={email}>
        <div className="relative width height-100 hcenter rounded-top-10 black-back white">
          <div className="absolute center text-center">{emailme}</div>
        </div>

        <div>
          <img className="relative width height-auto hcenter" src={bioPhoto} />
        </div>
      </div>

      <div className="relative width height-200">
        <div className="relative width-200 height-200 center">
          <a
            className="relative nolink"
            href="https://www.linkedin.com/pub/christopher-polito/28/6b6/460"
            target="_blank"
          >
            <img className="width height-auto" src={linkedin} />
          </a>
        </div>
      </div>

      <div
        className="relative width80 height-50 raised hcenter margin-v-50 black-back white pointer rounded10"
        onClick={resume}
      >
        <div className="absolute center">resume.doc</div>
      </div>
    </div>
  );
};

const Chris = () => {
  return (
    <div
      className="relative width height cutoffX scrollY scroll-vertical-dark-wide"
      onScroll={hidebutton}
      id="chrisbody"
    >
      <Navbar />

      <Header />

      <div className="relative width teal-back">
        <div className="relative width80 hcenter">
          {u.checkMobile() ? (
            <div className="relative width">
              <div className="relative width padding-v-50">
                <Card />
              </div>

              <div className="relative width padding-v-50">
                <div className="relative width90 hcenter margin-v-100 border white-back raised">
                  <Resume
                    contact={data.all.contact}
                    textfont="font-30"
                    title1font="font-50"
                    title2font="font-40"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative width">
              <div className="relative inline width50">
                <div className="relative width80 hcenter margin-v-100 border white-back raised">
                  <Resume
                    contact={data.all.contact}
                    textfont="font-15"
                    title1font="font-40"
                    title2font="font-30"
                  />
                </div>
              </div>

              <div className="relative inline width40 margin-v-100 cell-top">
                <Card />
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chris;
