import Header from '../components/header/header';
import Projects from '../components/projects/projects';
import Certifications from '../components/certifications/certifications';
import Contact from '../components/contact/contact'
import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Kunull | Kunal Walavalkar',
  openGraph: {
    title: 'Kunull | Kunal Walavalkar',
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
//				pageOption1="certifications clickable"
//				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
//				pageOption3="projects clickable"
//				ariaLabel3="Go to my Projects page"
			/>
					
			<main className="capital">
				<Header/>


				<Certifications/>


				<Projects/>


				<Contact/>

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
