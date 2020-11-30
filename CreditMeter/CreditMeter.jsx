import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Container, Segment } from 'semantic-ui-react';
import { progressWrapper, progress } from './CreditMeter.module.scss';

const ProgressBar = ({ totalCredits, used, size, classN, labelClass }) => {
  let remainingCredit = totalCredits - used;
  const percentage = (remainingCredit / totalCredits) * 100;

  return (
    <Segment className={progressWrapper}>
      <Progress
        size={size}
        color="orange"
        percent={percentage}
        className={progress}
      >
        {/* <p>{remainingCredit} Remaining credits   {used} Used</p> */}
      </Progress>
      <label className={labelClass}>
        {remainingCredit} Remaining Credits {used} Used
      </label>
      {/* <div className={labelClass}> */}
      {/* <p className={label}>{remainingCredit} Remaining credits</p> */}
      {/* <p className={label}>{used} Used</p> */}
      {/* </div> */}
    </Segment>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  totalCredits: PropTypes.number,
  used: PropTypes.number,
  size: PropTypes.string,
  classN: PropTypes.string,
  labelClass: PropTypes.string,
};
