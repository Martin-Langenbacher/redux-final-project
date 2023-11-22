const PollResults = ({ optionOneAmount, optionTwoAmount }) => {
  const totalAmount = optionOneAmount + optionTwoAmount;

  

  const percentOne = calculatePercentage(optionOneAmount, totalAmount);
  const percentTwo = calculatePercentage(optionTwoAmount, totalAmount);
  // const percentOne = Math.round(1000 * (optionOneAmount / totalAmount)) / 10;
  // const percentTwo = Math.round(1000 * (optionTwoAmount / totalAmount)) / 10;

  /*
  module.exports = {
    calculatePercentage,
  };
  */

  return (
    <>
      <div className="poll-result-distance"></div>

      <div className="line"></div>
      <div className="center">
        <h2 className="poll-result-title">Poll Results:</h2>
      </div>
      <div>
        <div className="center">
          <div className="container-poll-page">
            <div className="poll-text-left">
              <div className="poll-result">{optionOneAmount}</div>
            </div>
            <div className="poll-text-right">
              <div className="poll-result">{optionTwoAmount}</div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="container-poll-page">
            <div className="poll-text-left">
              <div className="poll-result">{percentOne}%</div>
            </div>
            <div className="poll-text-right">
              <div className="poll-result">{percentTwo}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function  calculatePercentage (amount, totalAmount) {
  return Math.round(1000 * (amount / totalAmount)) / 10;
};

export default PollResults;
