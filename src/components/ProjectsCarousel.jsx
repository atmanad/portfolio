import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import MyDoc1 from '../img/mydoc1.png';
import DscCvrgu from '../img/dsccvrgu1.png';
import Mysuru from '../img/mysuru1.png';
import Vps from '../img/vps1.png';
import SpendInsight1 from '../img/spendInsight1.png';
import MusicPlayer1 from '../img/musicplayer1.png';
import TweetApp from '../img/tweetapp1.png';

import '../css/style.css';


export default function ProjectCarousel() {
  return (
    <div id="projects" className="section-margin-padding">
      <div className="container px-0">
        <h2 className="text-center text-e0e0e0 h2 pb-2">Projects</h2>
        <Carousel className='px-4 py-5 my-5'>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={TweetApp} />
              <Card.Body>
                <Card.Title>Tweet App</Card.Title>
                <ul className='card-ul'>
                  <li>Social media app using React, SQL, Redux, Docker and  Azure App services. </li>
                  <li>User centric functionalities like posting, viewing, liking, and replying to tweets.</li>
                </ul>
              </Card.Body>
              <a href="https://tweetapp-atman.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={DscCvrgu} />
              <Card.Body>
                <Card.Title>DSC CVRGU</Card.Title>
                <ul className='card-ul'>
                  <li>Official website for Google DSC C V Raman Global University.</li>
                  <li>Provides information about Events, Teams, Club etc.</li>
                  <li>Utilized React, Bootstrap, and Firebase in the development process.</li>
                </ul>
              </Card.Body>
              <a href="https://dsc-cvrgu.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={SpendInsight1} />
              <Card.Body>
                <Card.Title>Spend Insight</Card.Title>
                <ul className='card-ul'>
                  <li>Developed a React/Redux spend tracker app for budget control, leveraging Node.js and MongoDB for backend data management. </li>
                  <li>Deployed on Netlify for frontend and Vercel for backend.</li>
                </ul>
              </Card.Body>
              <a href="https://spend-insight.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={MyDoc1} />
              <Card.Body>
                <Card.Title>My Doc</Card.Title>
                <ul className='card-ul'>
                  <li>A website featuring country, state, and district-specific COVID-19 data, appointment scheduling, a chatbot, and an e-commerce platform for purchasing COVID-19 essentials.</li>
                  <li>Developed using MongoDB, Express, React, and Node.js, SendGrid, Heroku</li>
                </ul>
              </Card.Body>
              <a href='https://ad-mydoc.netlify.app/' target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={Mysuru} />
              <Card.Body>
                <Card.Title>Mysuru Tourism</Card.Title>
                <ul className='card-ul'>
                  <li>Developed a website to enhance tourists' experiences in Mysuru.</li>
                  <li>Utilized technologies including MERN stack, Firebase, OpenWeather API, Flask, DialogFlow, and Covid19 API for various functionalities.</li>
                </ul>
              </Card.Body>
              <a href="https://tourism-mysuru.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={Vps} />
              <Card.Body>
                <Card.Title>Virtual Police Station</Card.Title>
                <ul className='card-ul'>
                  <li>Offers features such as online complaint registration, NOC application, access to past crime data, real-time virtual assistance, and character certificate issuance.</li>
                  <li>Implemented using React.js, Bootstrap, Node.js, and deployed on Heroku and Firebase platforms. Integration of SendGrid for communication purposes.</li>
                </ul>
              </Card.Body>
              <a href="https://client-vps.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={MusicPlayer1} />
              <Card.Body>
                <Card.Title>Music Player</Card.Title>
                <ul className='card-ul'>
                  <li>Includes features like Audio Player, Song library, Search functionality, Responsive design, Audio controls and many more.</li>
                  <li>Developed using HTML, CSS, Js and Firebase</li>
                </ul>
              </Card.Body>
              <a href="https://musicdilchahe.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Card.Footer>
                  View
                </Card.Footer>
              </a>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}