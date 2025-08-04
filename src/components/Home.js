import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaAngleDown } from 'react-icons/fa';



function Home() {
	return(
		<div className='main'>
            <div className='home-main'>
                <span>
                    Hi,<br/>I'm&nbsp;
                </span>
                <TypeAnimation
                    sequence={[
                        '',
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        'Rushikesh.',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Padaval.',
                        4000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                />
                <div>
                    <IconContext.Provider value={{ className: "socialIcons" }}>
                        <Link to='https://github.com/RushikeshPadaval' target="_blank">
                            <FaGithub size='1em' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/rushikesh-padaval-57681a254/' target="_blank">
                            <FaLinkedin size='1em' />
                        </Link>
                        <Link to='mailto:rushikeshpadaval@outlook.com' target="_blank">
                            <FaEnvelope />
                        </Link>
                    </IconContext.Provider>
                </div>
            </div>
            {/* <div className='home-arrow'>
                <Link to="/about">
  <FaAngleDown style={{ fontSize: '30px', color: 'black' }} />
</Link>

            </div> */}
		</div>
	);
}

export default Home;