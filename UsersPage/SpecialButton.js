import React, { useState } from 'react';
import propTypes from 'prop-types';

const SpecialButton = ({ element }) => {
  const [active, setActive] = useState(false);
  const handleSelection = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={handleSelection}
      style={active ? { backgroundColor: '#06CE77' } : {}}
    >
      <div style={active ? { backgroundColor: '#06CE77' } : {}}>
        {element.name}
      </div>
      <div style={active ? { backgroundColor: '#06CE77' } : {}}>
        {element.contacts}
      </div>
    </div>
  );
};

SpecialButton.propTypes = {
  element: propTypes.object,
};

export default SpecialButton;
