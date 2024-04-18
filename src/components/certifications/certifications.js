import Button from '../button/button';
import '../button/button.css';
import '../navbar/navbar.css';
import Link from 'next/link';

const Certifications = () => {
	return (
		<div>
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
  								buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
  								target="_blank"
  								aria-label="Check out my EJPT certificate"
  							/>
  						</div>
  						<p className="description">E-LEARN SECURITY JUNIOR PENETRATION TESTER.</p>
  					</li>
       
  {/*
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="cc clickable pages"
  								buttonHref=""
  								target="_blank"
  								ariaLabel="Check out my Certified in Cybersecurity certificate"
  							/>
  						</div>
  						<p className="description">ISC2 Certified in Cybersecurity.</p>
  					</li>
  */} 
  
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="google clickable pages"
  								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
  								target="_blank"
  								ariaLabel="Check out my Google Cybersecurity Professional certificate"
  							/>
  						</div>
  						<p className="description">GOOGLE CYBERSECURITY PROFESSIONAL CERTIFICATE.</p>
  					</li>
  
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="icca clickable pages"
  								buttonHref="/assets/certifications/INE-Certified-Cloud-Associate.pdf"
  								target="_blank"
  								ariaLabel="Check out my ICCA certificate"
  							/>
  						</div>
  						<p className="description">INE CERTIFIED CLOUD ASSOCIATE.</p>
  					</li>
  
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="nse clickable pages"
  								buttonHref="/assets/certifications/NSE-Certification.pdf"
  								target="_blank"
  								ariaLabel="Check out my NSE certificate"
  							/>
  						</div>
  						<p className="description">FORTINET TRAINING INSTITUTE NETWORK SECURITY EXPERT.</p>
  					</li>
  
  {/*
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="pnpt clickable pages"
  								buttonHref=""
  								target="_blank"
  								ariaLabel="Check out my Practical Network Penetration Tester certificate"
  							/>
  						</div>
  						<p className="description">TCM Security Practical Network Penetration Tester certificate.</p>
  					</li>
  */}
  
  	{/*
  					<li>
  						<div className="capital">
  							<Button
  								button=""
  								buttonClassName="security-plus clickable pages"
  								buttonHref=""
  								target="_blank"
  								ariaLabel="Check out my CompTIA Security+ certificate"
  							/>
  						</div>
  						<p className="description">CompTIA Security+ (SY0-701) certificate.</p>
  					</li>
  	*/}
  
  	      	</ul>
				</p>


		</div>
	);
};

Button.defaultProps = {
	target: '',
};

export default Certifications;
