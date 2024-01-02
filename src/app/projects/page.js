import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

const Projects = () => {

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
{/*
   			<div className="navbarContainer">
		            <h2 className="previous glitch layers" data-text="KW"><a class="clickable" href="/">KW</a></h2>
		            <h2 className="slash">&nbsp;/&nbsp;</h2>
		            <h2 className="current">PROJECTS ►</h2>
        		</div> 
*/}
			<Navbar
				button="KW"
				buttonClassName="previousPage clickable glitch layers"
				ariaLabel="Go to my Home page"
				buttonHref="/"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				page="PROJECTS"
				pageClassName="currentPage"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption3=""
			/>
			<main>
				<ul>
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="cipher clickable pages"
								buttonHref="https://d-cipher.streamlit.app/"
								target="_blank"
								aria-label="Check out the D Cipher project"
							/>
						</div>
						<p className="description">Cryptography toolkit that allows users to encrypt and decrypt their text using an algorithm of their choice.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="empower clickable pages"
								buttonHref="https://github.com/Knign/Custos-Shell"
								target="_blank"
								aria-label="Check out the Empowershell project"
							/>
						</div>
						<p className="description">Powershell utility script that compares hashes to check the integrity of files.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="hexplorer clickable pages"
								buttonHref="https://github.com/Knign/Hexplorer/"
								target="_blank"
								aria-label="Check out the Hexplorer project"
							/>
						</div>
						<p className="description">Command-Line utility to dump the binary and hexadecimal rendition of a file.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="netSleuth clickable pages"
								buttonHref="https://github.com/Knign/NetSleuth/"
								target="_blank"
								aria-label="Check out the NetSleuth project"
							/>
						</div>
						<p className="description">Network scanner that finds all the devices connected in the network.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="opensoc clickable pages"
								buttonHref="https://github.com/Knign/OpenSOC"
								target="_blank"
								aria-label="Check out the OpenSOC project"
							/>
						</div>
						<p className="description">Proof of concept for Security Operations Centre made using open source tools.</p>
					</li>
	
	{/*				
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="passward clickable pages"
								buttonHref=""
								target="_blank"
							/>
						</h2>
						<span className="description">Local password manager with a built-in web server/interface.</span>
					</li>
	*/}
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="probe clickable pages"
								buttonHref="https://github.com/Knign/Probe"
								target="_blank"
								aria-label="Check out the Probe project"
							/>
						</div>
						<p className="description">Portscanner that implements multithreading for swift scans.</p>
					</li>
	
	{/*
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="pyrefox clickable pages"
								buttonHref="https://github.com/Knign/PyreFox"
								target="_blank"
							/>
						</h2>
						<p className="description">user.js file for hardening Firefox browser.</p>
					</li>
	*/}
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="signum clickable pages"
								buttonHref="https://signum-mu.vercel.app/"
								target="_blank"
								aria-label="Check out the Signum project"
							/>
						</div>
						<p className="description">Web app to generate passwords and check their strength.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="steghound clickable pages"
								buttonHref=""
								target="_blank"
							/>
						</div>
						<p className="description">Steganography tool that allows image, text, audio and video steganography.</p>
					</li>
									
{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="suiteBox clickable pages"
								buttonHref=""
								target="_blank"
								aria-label="Check out the SuiteBox project"
							/>
						</div>
						<p className="description">Collection of Burp Suite extensions to enhace security testing.</p>
					</li>
	*/}
					
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="riskore clickable pages"
								buttonHref="https://riskore.vercel.app/"
								target="_blank"
								aria-label="Check out the RiSkore project"
							/>
						</div>
						<p className="description">Web app to evaluate the risk faced by your organization.</p>
					</li>
				</ul>
			</main>

			<Footer
				buttonClassName1="email clickable"	
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

export default Projects;