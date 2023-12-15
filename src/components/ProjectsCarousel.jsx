import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import MyDoc1 from '../img/mydoc1.webp';
import DscCvrgu from '../img/dsccvrgu1.webp';
import Mysuru from '../img/mysuru1.webp';
import Vps from '../img/vps1.webp';
import SpendInsight from '../img/spend-insight2.png';
import MusicPlayer from '../img/musicplayer.png';
import '../css/style.css';

function ProjectCarousel() {
  return (
    <div id="projects" className="section-margin-padding">
      <div className="container px-0">
        <h2 className="text-center text-e0e0e0 h2 pb-2">Projects</h2>
        <Carousel className='px-4 py-5 my-5'>
          <Carousel.Item className='px-3'>
            <Card className='carousel-card'>
              <Card.Img variant="top" src={DscCvrgu} />
              <Card.Body>
                <Card.Title>DSC CVRGU</Card.Title>
                <ul className='card-ul'>
                  <li>Developed the official website for Google DSC C V Raman Global University.</li>
                  <li>Provides features like information about Events, Teams, Authentication mechanism and many more. </li>
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
              <Card.Img variant="top" src={SpendInsight} />
              <Card.Body>
                <Card.Title>Spend Insight</Card.Title>
                <ul className='card-ul'>
                  <li>Developed a React/Redux spend tracker app for budget control, leveraging Node.js and MongoDB for backend data management. </li>
                  <li>Deployed on Netlify for frontend and Vercel for backend.</li>
                  <li>It has expense categorization and spending summaries.</li>
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
                  <li>Developed "MyDoc" project integrating MongoDB, Express, React, and Node.js.</li>
                  <li>Features include country, state, and district-specific COVID-19 data, appointment scheduling, a chatbot, and an e-commerce platform for purchasing COVID-19 essentials.</li>
                  <li>Utilized SendGrid for communication and deployed the application on Heroku.</li>
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
                  <li>Hosted the application on Heroku for seamless accessibility and integration of diverse features.</li>
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
              <Card.Img variant="top" src={MusicPlayer} />
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

export default ProjectCarousel;