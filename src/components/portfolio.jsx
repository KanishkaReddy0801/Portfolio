import './portfolio.css'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import pic1 from '../assets/pic1.JPG'
import pic2 from '../assets/pic2.JPEG'
import pic3 from '../assets/pic3.JPG'

const Portfolio = () => {
    return (
        <div>
            <img className='background' src={pic3} alt="" />
            <div className='portfolio'>
            <h1>KANISHKA REDDY</h1>
            <div className='part1'>
                <img src={pic1} alt="My Pic" />
                <div className='aboutme'>
                    <h2>ABOUT ME</h2>
                    <p>I am a MERN Developer & UI/UX Designer <br /> from AP, INDIA. <br />
                        Born in 2001, now being 22, I completed my graduation in Computer 
                        Science Engineering from ICFAI University, Dehradun in 2022 with 7.84 
                        CGPA. I worked as a UI/UX and Graphic Designer in CodeStore Technologies.
                        I'm really Energetic and a great Communicator. I'm Punctual, Dependable,
                        can be counted upon to finish what I started. I consider myself Hard working,
                        Honest, Co-operative and Helpful.
                    </p>
                </div>
            </div>
            <div className='part2'>
                <h2>WHAT I DO?</h2>
                <p>In order to increase the User Experience, I design your <br />
                    Website/Application in <br />
                    accordance with the User Experience Research, at the same <br />
                    time, using MERN <br />
                    technologies, I bring your Website/Application to life. I deliver <br />
                    work with quality. <br />
                    Never ending Hunger to learn is my best Strength.
                </p>
            </div>
            <div className='part3'>
                <img src={pic2} alt="My pic" />
                <div className='passions'>
                    <h2>MY PASSIONS</h2>
                    <p>
                        DESIGN <br />
                        For me Designing is like a Fairy Tale. If a service or product is the
                        problem in the tale, the role of Designer is to act as a Fairy for the 
                        user to solve the problem. I try to create a "Magical FairyTale" suitable 
                        for the user everyday.
                    </p>
                    <p>
                        DEVELOP <br />
                        In the phrase "well-developed science and technology are
                        indistinguishable from magic", Technology has the power to change
                        the lives of the world and individuals. I want to be someone who can 
                        always catch up with the latest technology and respond to changes. I 
                        think it's the job of Designers as well as Engineers to encourage
                        Innovation.
                    </p>
                    <p>
                        BOOKS <br />
                        I love contents such as Novels, Movies, WebSeries. In particular,
                        Fantasies can add a lot of Imagination to people and make some 
                        things Creative, Beautiful and out of the Box. I believe there will be a 
                        great comeback if I examine all the patterns of the life story and can 
                        give a Great Output to my story.
                    </p>
                </div>
            </div>
            <div className='part4'>
                <h2>SKILLS</h2>
                <div className='skill'>
                    <div className='skills'>
                        <h5>FIGMA</h5>
                        <p>90%</p>
                    </div>
                    <div className='skills'>
                        <h5>HTML5</h5>
                        <p>90%</p>
                    </div>
                    <div className='skills'>
                        <h5>CSS3</h5>
                        <p>90%</p>
                    </div>
                    <div className='skills'>
                        <h5>REACT JS</h5>
                        <p>80%</p>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skills'>
                        <h5>NODE JS</h5>
                        <p>80%</p>
                    </div>
                    <div className='skills'>
                        <h5>MongoDB</h5>
                        <p>80%</p>
                    </div>
                    <div className='skills'>
                        <h5>ILLUSTRATOR</h5>
                        <p>80%</p>
                    </div>
                    <div className='skills'>
                        <h5>JAVASCRIPT</h5>
                        <p>80%</p>
                    </div>
                </div>
            </div>
            <div className='part5'>
                <h2>PROJECTS</h2>
                <div className='project'>
                    <h4>SurveyForm</h4>
                    <p>Developed this MERN stack project where users can login and signup, used JWT for 
                        Authenticating the user and bcrypt for hashing the user's password. Users can 
                        create a survey and questions and view them on the Website...
                    </p>
                    <a href="https://warm-halva-38237b.netlify.app/">View Project</a>
                </div>
                <div className='project'>
                    <h4>InstaClone</h4>
                    <p>Developed a two page MERN stack project where users can post and view their 
                       pictures with description. I used ReactJS as my frontend technology and NodeJS 
                       as my runtime environment and MongoDB for storing my Data in NoSQL format
                    </p>
                    <a href="https://instaclone-kanishka001.netlify.app/">View Project</a>
                </div>
                <div className='project'>
                    <h4>TicTacToe</h4>
                    <p>Developed this single page JavaScript application where two users can play 
                       Tic Tac Toe game and view their score on the screen.
                    </p>
                    <a href="https://kanishka-tictactoe.netlify.app/">View Project</a>
                </div>
                <div className='project'>
                    <h4>MW Website Design</h4>
                    <p>Designed this website in my free time, where users can buy and 
                        sell expensive Malt Whiskeys
                    </p>
                    <a href="https://www.figma.com/proto/5T4ZZwEo6LfDWDIa1w9xty/Untitled?node-id=5-40&starting-point-node-id=5%3A40&scaling=scale-down">View Project</a>
                </div>
                <div className='project'>
                    <h4>Travel Mobile App Design</h4>
                    <p>Designed this Mobile Application where users can mark their memories 
                        on the map with different colored pins and add photos and give rating 
                        of the places they visited.
                    </p>
                    <a href="https://www.figma.com/file/Db1qMOMckOgWzzI5JXQxMh/UI%2FUX-studio?node-id=0-1&t=QAW74TZ1HP8aj5I5-0">View Project</a>
                </div>
            </div>
            </div>
            <div className='part7'>
                <div className='info'>
                    <h2>CONTACT ME</h2>
                    <h4>Kanishka Reddy</h4>
                    <p>
                        Vijayawada <br />
                        Andhra Pradesh, 521163 <br />
                        Phone: +91 7091413444 <br />
                        krishnakanishkareddyalla@gmail.com
                    </p>
                    <a href="https://www.instagram.com/kanishka__reddy0801/?igshid=YmMyMTA2M2Y%3D"> <BsInstagram className='insta'></BsInstagram></a>
                    <a href="https://www.linkedin.com/in/kanishka-reddy-097a34210/"> <BsLinkedin className='linkedin'></BsLinkedin> </a>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Portfolio