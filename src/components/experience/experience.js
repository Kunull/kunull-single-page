import Button from '../button/button';
import '../button/button.css';
import '../navbar/navbar.css';
import Link from 'next/link';

const Experience = () => {
	return (
		<div>
			<div className="currentPage section-divider">
				<span>KUNULL / EXPERIENCE ►</span>
			</div>

		
			<p className='spacing'>
				<ul className="singleColumnUl spacing">
					<li>
						<Button
							button=""
							buttonClassName="company2 clickable pages"
							buttonHref=""
							target="_blank"
						/>				
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat. Platea dictumst vestibulum rhoncus est. At volutpat diam ut venenatis tellus in metus vulputate eu. Eget mauris pharetra et ultrices neque. Nec nam aliquam sem et tortor consequat id porta nibh. Tempor commodo ullamcorper a lacus. Donec pretium vulputate sapien nec. Nibh mauris cursus mattis molestie a. Orci sagittis eu volutpat odio facilisis mauris sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Amet risus nullam eget felis eget nunc lobortis.</p>
					</li>
		

					<li>
						<Button 
							button="" 
							buttonClassName="company1 clickable pages" 
							buttonHref="https://cybersecuredindia.com/" 
							target="_blank"
							aria-label="Go to the Cyber Secured India website"
						/>
							
						<p className="description">VAPT Intern</p>
						<p className="description">March 2023 - May 2023</p>
						<p className="description">Performed penetration tests to simulate real-world attacks on systems and networks.</p>	
						<p className="description">Used tools like Burp Suite and OWASP ZAP for web application security testing.</p>
						<p className="description">Assessed the security of web applications by identifying and exploiting vulnerabilities.</p>
					</li>
				</ul>
			</p>
		</div>
	);
};

Button.defaultProps = {
	target: '',
};

export default Experience;
