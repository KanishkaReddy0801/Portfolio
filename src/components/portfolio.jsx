import './portfolio.css'
import pic1 from '../assets/pic1.JPG'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1>KANISHKA REDDY</h1>
            <div className='part1'>
                <img src={pic1} alt="My Pic" />
                <div className='aboutme'>
                    <h2>ABOUT ME</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio