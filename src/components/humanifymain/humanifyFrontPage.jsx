import React, { useEffect } from "react";

import "./new.css";
import alone from "./images/alone.jpg";
import food from "./images/foodd.jpg";
import kind from "./images/good.jpg";
import connect from "./images/connect1.jpg";
import grate from "./images/grate.jpg";
import sleep from "./images/sleep.jpg";
import trust from "./images/trust.png";
import moment from "./images/moment.jpg";
import wall from "./images/wall.jpg";
import mood from "./images/mood1.gif";
import over from "./images/over.jpg";
import stress from "./images/stress.jpg";
import anger from "./images/anger.jpg";
import anxiety from "./images/anxiety.jpg";
import bipolar from "./images/bipolar.jpg";
import dip from "./images/dipression.jpg";
import videocall from "./images/sad.gif";
import chat from "./images/moodd.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HumanifyFrontPage() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div className='showcase '>
        {
          //home
        }
        <header>
          <h2 className='logo'></h2>
          <div className='toggle '></div>
        </header>
        {/* <img src={mood}></img> */}
        <div className='overlay'></div>
        <div className='text'>
          <h3>You Are</h3>
          <h2>Not Alone</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className='cate'>
        <div className='tips'>
          <h3 data-aos='fade-up'>Some Quick Tips</h3>
        </div>
        <div className='para' data-aos='fade-up'>
          <p>
            These are the few things which we all should take care of for our
            better mental health
          </p>
        </div>
        <div className='cate-home'>
          <div className='home'>
            <div className='img1' data-aos='slide-up'>
              <img src={trust} />

              <div className='text1'>
                <p>
                  Sharing what’s going on in your life, good and bad, with
                  people you trust is a great way to strengthen your support
                  network and get things of your chest when you need.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={sleep} />

              <div className='text1'>
                <p>
                  Sleep is one of the biggest influences of mental fitness, most
                  people need between 7-9 hours and there are so many ways to
                  help improve your sleep.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={food} />

              <div className='text1'>
                <p>
                  Fuel your body with the best hydration and food, fresh is
                  best. Try and limit sugary foods and drink where possible.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={grate} />
              <div className='text1'>
                <p>
                  Take time to notice the things you are grateful for. Doing
                  this daily can help train our brains to make focusing on the
                  positive a habit.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={connect} />
              <div className='text1'>
                <p>
                  Spending time connecting with friends and team mates helps
                  build our sense of belonging and makes it easier to reach out
                  when we need support.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={moment} />
              <div className='text1'>
                <p>
                  Mindfulness is a great way to give your mind a rest. Focusing
                  on your breath is a useful tool to bring your attention back
                  to the present.
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={alone} />
              <div className='text1'>
                <p>
                  Having time to rest is important. Block out time in advance
                  that is ‘protected time’ for you to spend doing something you
                  enjoy to re-energise.{" "}
                </p>
              </div>
            </div>
            <div className='img1' data-aos='slide-up'>
              <img src={kind} />
              <div className='text1'>
                <p>
                  Doing something nice for someone else is great for our mental
                  wellbeing. That could be volunteering your time or your
                  presence.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*common*/}
      <div className='container'>
        <div className='common'>
          <div>
            <div className='image'>
              <p className='somepara' data-aos='slide-right'>
                <h4 className='some' data-aos='fade-up'>
                  Some Common Issues
                </h4>
                <p className='margin' data-aos='fade-right'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident quia ab quod necessitatibus magnam aliquam alias
                  dolore aut accusantium? Libero tenetur expedita fugit tempora
                  accusantium odio porro nam officiis deserunt.
                </p>
              </p>
            </div>
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>DIPRESSION</h1>
            <h1 className='read'>
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
            <img className='i1' src={dip} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>OVERTHINKING</h1>
            <h1 className='read'>
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
            <img src={over} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>STRESS</h1>
            <h1 className='read'>
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
            <img src={stress} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>ANXIETY</h1>
            <h1 className='read'>
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
            <img src={anxiety} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>BIPOLAR</h1>
            <h1 className='read'>
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
            <img src={bipolar} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>ANGER</h1>
            <h1 className='read'>
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
            <img src={anger} alt='' />
          </div>
        </div>
      </div>
      {/* 
      chat and call */}
      <div className='vc'>
        <div className='chat '>
          <div className='chating' data-aos='slide-right'>
            <img src={chat} />
          </div>
          <div className='description' data-aos='slide-left'>
            <h3>Let's Chat</h3>
            <p>
              Hey, Do you feel like that you are alone? Or it is difficult for
              you to find the right person to talk to you at this time, Or you
              are scared that you are different? <br />
              Hey, you are not alone in this, Humanify is there for you, using
              our live chat feature you can find people who are facing similar
              issues and problems and can help each other in this fight, do try
              it once.
            </p>
            <Link to='/chat'>
              <button className='chatbutton' data-aos='zoom-in'>
                CHAT
              </button>
            </Link>
          </div>
        </div>
        <div className='chat'>
          <div className='description' data-aos='slide-right'>
            <h3>Let's Focus</h3>
            <p>
              Hey heard of the term "Meditation", yes it's a very, very helpful
              practice for fighting mental health, it helps in focusing,
              concentrating, bringing self to the moment over and over again,
              reduce stress anxiety, and depression, so let's do this for self.
            </p>
            <Link to='/meditate'>
              <button className='chatbutton'>FOCUS</button>
            </Link>
          </div>
          <div className='chating' data-aos='slide-left'>
            <img src={videocall} />
          </div>
        </div>
      </div>
      {/*story*/}
      <div className='story'>
        <div className='formheading'>
          <h4 data-aos='zoom-in'>Let's Break The Taboo</h4>
        </div>

        <div className='form'>
          <div>
            <button className='save'>save</button>
          </div>
          <div>
            <input placeholder='Name'></input>
          </div>
          <div>
            <textarea placeholder='Share Your Story...' rows='16' cols='100' />
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className='footer'>
        <div className='formheadingg'>
          <h4 data-aos='zoom-in'>" Toghter We Can Do Wonders ~ HUMANIFY "</h4>
        </div>
        <div className='cmvyas'>
          <p>Made With ❤️ By CM_Vyas</p>
        </div>
      </div>
    </div>
  );
}

export default HumanifyFrontPage;
