import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Home | Kunal Walavalkar',
  openGraph: {
    title: 'Home | Kunal Walavalkar',
  },
}

const Home = () => {
	return (
		<>
			<div className="sticky">
				<div className="effectGlitch"></div>
				<div className="effectNoise"></div>
				<div className="scanLine"></div>
				<div className="gradient"></div>
				<div className="noise"></div>
				<div className="backgroundLines"></div>
			</div>
			
			<div className="backgroundEffect"></div>
			
			<Navbar
				button=""
				buttonClassName=""
				buttonHref=""
				slash=""
				slashClassName=""
				page="KUNULL"
				pageClassName="currentPage glitch layers"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption3="projects clickable"
				ariaLabel3="Go to my Projects page"
			/>
					
			<main className="capital">
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
					<span className="personal">, A COMPUTER ENGINEERING AND CYBER SECURITY STUDENT.</span>
				</p>





				<div className="currentPage section-divider">
					<span>KUNULL / CERTIFICATIONS ►</span>
				</div>
			

				<p className='spacing'>
					<ul>
						<li>
							<div className="capital">
								<Button
									button=""
									buttonClassName="ejpt clickable pages"
									buttonHref=""
									target="_blank"
									aria-label="Check out my EJPT certificate"
								/>
							</div>
							<p className="description">eLearnSecurity Junior Penetration Tester.</p>
						</li>
				
						<li>
							<div className="capital">
								<Button
									button=""
									buttonClassName="google clickable pages"
									buttonHref="/assets/certs/Google_Cybersecurity_Professional_Certificate.pdf"
									target="_blank"
									aria-label="Check out my Google Cybersecurity certificate"
								/>
							</div>
							<p className="description">Google Cybersecurity Professional Certitificate.</p>
						</li>
		
						<li>
							<div className="capital">
								<Button
									button=""
									buttonClassName="icca clickable pages"
									buttonHref=""
									target="_blank"
									aria-label="Check out my ICCA certificate"
								/>
							</div>
							<p className="description">INE Certified Cloud Associate.</p>
						</li>
		
						<li>
							<div className="capital">
								<Button
									button=""
									buttonClassName="nse clickable pages"
									buttonHref="https://kunalwalavalkar.vercel.app/NSE_Certification.pdf"
									target="_blank"
									aria-label="Check out my NSE certificate"
								/>
							</div>
							<p className="description">Fortinet Training Institute Network Security Expert.</p>
						</li>
					</ul>
				</p>


				<div className="currentPage section-divider">
					<span >KUNULL / EXPERIENCE ►</span>
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

			</main>

			<Footer
				buttonClassName1="email clickable "	
				buttonClassName2="github clickable "
				buttonClassName3="hackTheBox clickable "
				buttonClassName4="key clickable "
				buttonClassName5="resume clickable "
				buttonClassName6="tryHackMe clickable "
				buttonClassName7="writeUps clickable "
			/>
		</>
	);
};

export default Home;
