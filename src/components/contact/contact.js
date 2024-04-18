import Button from '../button/button';
import '../button/button.css';
import '../navbar/navbar.css';
import Link from 'next/link';

const Contact = () => {
	return (
		<div>
			<div className="currentPage section-divider">
				<span>KUNULL / CONTACT ►</span>
			</div>
			
			<p className='spacing'>
				<span className="personal">SEND ME AN </span>
				<Button
					button=""
					buttonClassName="email clickable pages"
					buttonHref="mailto:walavalkarkunal@skiff.com"
					target="_blank"
					ariaLabel="Send me an e-mail"
				/>
				<span className="personal"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
				<Button
					button=""
					buttonClassName="key clickable pages"
					buttonHref="/assets/key/kunalwalavalkar_public_key.txt"
					target="_blank"
					ariaLabel="Use my pgp key"
				/>
				<span className="personal"> FOR ENCRYPTION.</span>
			</p>

		</div>
	);
};

Button.defaultProps = {
	target: '',
};

export default Contact;
