import Button from '../button/button';
import '../button/button.css';
import '../navbar/navbar.css';
import Link from 'next/link';

const Header = () => {
	return (
		<div>
				<p className='spacing'>
					<span className="personal">HELLO. I'M </span>
					<span className="kunalWalavalkar nonClickable pages">
{/*						
						<div class="profilepic">
  							<img src={profilepic} width="200" alt=""/>
						</div>	
*/}					
					</span>	
{/*	
					<span className="personal">, AKA </span>
					<span className="knign nonClickable pages">
*/}	
{/*						
						<div class="profilepic2">
  							<img src={profilepic2} width="200" alt=""/>
						</div>	
					
     					</span>
*/}	
					<span className="personal">, A CYBER SECURITY RESEARCHER AND OFFENSIVE DEVELOPER.</span>
				</p>

		</div>
	);
};

Button.defaultProps = {
	target: '',
};

export default Header;
