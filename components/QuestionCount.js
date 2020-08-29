import React from 'react';
import PropTypes from 'prop-types';
function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
       {props.counter === 5 ? (<a className="result-link" href="" onClick={props.viewreults}>View Results</a>) : (<div></div>)}
    </div>
  );

}
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
export default QuestionCount;
