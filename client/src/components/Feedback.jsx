import React from "react";

const Feedback = () => {
  return (
    <>
      <div class="container">
        <div class="mb-3+ mt-5">
          <label for="feedbackEmail" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="feedbackEmail"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="FeedbackTextarea" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="FeedbackTextarea"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Feedback;