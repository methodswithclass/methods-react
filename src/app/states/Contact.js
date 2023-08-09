import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Resume from '../components/resume';
import { checkMobile, makeTitle } from '../services/utility.service';
import { all } from '../services/data.service';

const email = () => {
  console.log('clicked email');

  window.location.href = 'mailto:chris@methodswithclass.com';
};

const resume = () => {
  console.log('clicked resume');

  window.location.href = '/assets/img/cpolito_202308.docx';
};

const Card = () => {
  var emailme = makeTitle('email me\nchris@methodswithclass.com', '\n');

  return (
    <div className="relative width-300 hcenter cutoff">
      <div className="relative width pointer margin-v-20" onClick={email}>
        <div className="relative width height-100 hcenter rounded-top-10 black-back white">
          <div className="absolute center text-center">{emailme}</div>
        </div>

        <div>
          <img
            className="relative width height-auto hcenter"
            src={`/assets/img/bio-photo3.jpg`}
          />
        </div>
      </div>

      <div className="relative width height-200">
        <div className="relative width-200 height-200 center">
          <a
            className="relative nolink"
            href="https://www.linkedin.com/in/cpolito"
            target="_blank"
          >
            <img
              className="width height-auto"
              src={'/assets/img/linkedin.png'}
            />
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

const Contact = () => {
  return (
    <div className="relative width height" id="chrisbody">
      <Navbar />

      <div className="relative width">
        <div className="relative width80 hcenter">
          {checkMobile() ? (
            <div className="relative width">
              <div className="relative width padding-v-50">
                <Card />
              </div>

              <div className="relative width padding-v-50">
                <div className="relative width90 hcenter margin-v-100 border white-back raised">
                  <Resume
                    contact={all.contact}
                    textfont="font-10"
                    title1font="font-30"
                    title2font="font-20"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative width">
              <div className="relative inline width50">
                <div className="relative width80 hcenter margin-v-100 border white-back raised">
                  <Resume
                    contact={all.contact}
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

export default Contact;
