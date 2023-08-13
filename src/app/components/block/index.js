import React from 'react';
import { checkMobile } from '../../services/utility.service';

const getId = (name, info) => {
  return `${name}${info.id}`;
};

const clicked = (info) => {
  console.log('clicked', info.id);

  window.open(`https://${info.url}`, '_blank', 'noopener,noreferrer');
};

const Element = (props) => {
  const { info } = props;
  const isMobile = checkMobile();
  if (info.id === 'gravity') {
    return (
      <>
        {isMobile ? (
          <div
            className="absolute left-100 width-300 height-50 top60 black-back white rounded10 border-white pointer"
            onClick={() => clicked(info)}
          >
            <div className="absolute center font-20">
              click here to play gravity
            </div>
          </div>
        ) : (
          <div className="absolute left-100 width-500 height-100 top60 white-back rounded20 border">
            <div className="absolute center font-25">
              use on a mobile device
            </div>
          </div>
        )}
      </>
    );
  } else if (info.id === 'evolve') {
    return (
      <>
        {isMobile ? (
          <div
            className="absolute left-100 width-300 height-50 top60 black-back white rounded10 border-white pointer"
            onClick={() => clicked(info)}
          >
            <div className="absolute center font-20">click here to evolve</div>
          </div>
        ) : (
          <div
            className="absolute left-100 width-500 height-100 top60 black-back white rounded20 border-white pointer"
            onClick={() => clicked(info)}
          >
            <div className="absolute center font-25">click here to evolve</div>
          </div>
        )}
      </>
    );
  }
};

const Html = (props) => {
  const { html } = props;
  return (
    <div>
      {html.split('<br>').map((i, key) => {
        return <div key={key}>{i}</div>;
      })}
    </div>
  );
};

const Block = (props) => {
  const { info } = props;

  console.log('info', info);

  const isMobile = checkMobile();

  return (
    <div className="relative width">
      <div
        className={`relative width ${
          isMobile ? 'height-200' : 'height-300'
        } cutoff noedge`}
        id={getId('sep', info)}
      >
        <div
          className={`relative width60 ${
            isMobile ? 'font-20' : 'font-30'
          } text-center center`}
          id={getId('desc', info)}
        >
          {<Html html={info.description} />}
        </div>
      </div>

      <div
        className={`relative width ${
          isMobile ? 'height-400' : 'height-800'
        } cutoff noedge`}
      >
        <div>
          <div className={`absolute width height`}>
            <img
              className={`absolute ${
                isMobile ? 'width-auto height120' : 'width120 height-auto'
              } center`}
              src={info.back}
              alt={info.alt}
            />
          </div>
          {<Element info={info} />};
        </div>
      </div>
    </div>
  );
};

export default Block;
