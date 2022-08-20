import React from 'react';
import * as h from '../../services/history.service';
import * as state from '../../services/state.service';

var clicked = (goToState) => () => {
  h.changePreviousIndex(h.getName());
  state.goto(goToState);
};

const Navbtn = (props) => {
  const { state: goToState, name, class: className } = props;
  return (
    <div
      className={'absolute width height rounded10 pointer ' + className}
      onClick={clicked(goToState)}
    >
      <div className="absolute center">{name}</div>
    </div>
  );
};

export default Navbtn;
