import React, { useState } from "react";
import "./FundraiserProgress.css";

function FundraiserProgress() {
  const [currentAmount] = useState(0);
  const goalAmount = 200000;
  const supporters = 0;
  const daysLeft = 23;

  const progressPercentage = (currentAmount / goalAmount) * 100;

  const formatCurrency = (amount) => {
    return `₹ ${amount.toLocaleString("en-IN")}`;
  };

  return (
    <div className="fundraiser-wrapper">
      <div className="fundraiser-card">
        <div className="fundraiser-amount">
          <span className="current-amount">
            {formatCurrency(currentAmount)}
          </span>
          <span className="goal-amount">
            of {formatCurrency(goalAmount)} collected
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="fundraiser-footer">
          <div className="supporters">
            <svg
              className="supporter-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>{supporters} supporters</span>
          </div>

          <div className="days-left">{daysLeft} days left</div>
        </div>
      </div>
    </div>
  );
}

export default FundraiserProgress;
