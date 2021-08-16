import React, { useEffect } from "react";
import video from "./video.mp4";
import "./new.css";
import alone from "./images/alone.jpg";
import food from "./images/foodd.jpg";
import kind from "./images/kind.jpg";
import connect from "./images/connect1.png";
import grate from "./images/grateful.jpeg";
import sleep from "./images/sleep.jpg";
import trust from "./images/trust.png";
import moment from "./images/moment.jpg";

import over from "./images/over.jpg";
import stress from "./images/stress.jpg";
import anger from "./images/anger.jpg";
import anxiety from "./images/anxiety.jpg";
import bipolar from "./images/bipolar.jpg";
import dip from "./images/dipression.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

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
          <h2 className='logo'>Travel</h2>
          <div className='toggle '></div>
        </header>
        <video src={video} muted loop autoPlay></video>
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
          <a href='#'>Explore</a>
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
            <img className='i1' src={dip} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>OVERTHINKING</h1>
            <img src={over} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>STRESS</h1>
            <img src={stress} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>ANXIETY</h1>
            <img src={anxiety} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>BIPOLAR</h1>
            <img src={bipolar} alt='' />
          </div>
          <div className='image' data-aos='zoom-in'>
            <h1>ANGER</h1>
            <img src={anger} alt='' />
          </div>
        </div>
      </div>

      {/*story*/}
      <div className='story'>
        <div className='formheading'>
          <h3>Let's Break The Taboo</h3>
        </div>
        <div className='storyform'>
          <div className='form'>
            <div>
              <input placeholder='Name'></input>
            </div>
            <div>
              <textarea
                placeholder='Share Your Story...'
                rows='16'
                cols='100'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanifyFrontPage;
