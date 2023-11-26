import { Link } from 'react-router-dom'
import resume from '../../asserts/resume.pdf'


const LandingPage = () => {


    return (
        <div>
            <h1>Asish</h1>
            <p>B.Tech - Computer Science and Engineering (May 2024)</p>
            <a href={resume} download="Asish Tammana Resume.pdf">Download Resume</a>
            <br/>
            <br/>
            <Link to="/bmi">
                <button>Check BMI</button>
            </Link>
        </div>
    )
}

export default LandingPage