import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Feedback = () => {
  const feedbacksData = [
    {
      id: 1,
      name: 'Rakul jay',
      feedback: 'Im so satisfied with their service',
    },
    {
      id: 2,
      name: 'Abhishek Roy',
      feedback: 'They have decent service policies',
    },
    
    {
        id: 3,
        name: 'Sujoy Bhattacharya',
        feedback: '7 out of 10 star',
      },

      {
        id: 4,
        name: 'Bijay Atul',
        feedback: 'Got my right prodduct',
      },
  ];

  return (
    <div className="feedbacks">
      <h1 >Feedbacks</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        stopOnHover={false}
      >
        {feedbacksData.map((feedback) => (
          <div key={feedback.id} className="feedback">
            <p>{feedback.feedback}</p>
            <span>- {feedback.name}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Feedback;
