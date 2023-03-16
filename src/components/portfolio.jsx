import './portfolio.css'
import pic1 from '../assets/pic1.JPG'
import pic2 from '../assets/pic2.JPEG'

const Portfolio = () => {
    return (
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
                <div></div>
            </div>
        </div>
    )
}

export default Portfolio