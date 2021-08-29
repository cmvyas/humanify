import React from "react";
import "./humanifymain/new.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='oss'>
      <div id='home'>
        Welcome to the <p>Humanify,</p>A Platform To Break The Taboo And To Help
        You Fight Your <p>Mental Health,</p>We Believe In Unity And Helping Each
        Other As "Together We Can Do Wonders"
        <Link to='/humanify'>
          <h1 className='r'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default Home;
