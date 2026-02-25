import Hero from "../page-components/Hero/Hero";

const Home = () => {
	return (
		<>
			<Hero />
			<section>
				<section className="content-container">
					<h2>About me</h2>
					<p>
						My name's Khaled, and I am a 28-year-old aspiring game developer from Sweden. I'm
						currently studying in Malmö at FutureGames as gameplay programmer. I have a higher
						vocational education in web development as a full-stack developer. My big love for
						games and game development started my career path and has been the main driving force
						for me to learn and create games. My biggest strength is my ability to learn and adapt
						to new situations and challenges. Please check out my projects below and feel free to
						contact me if you have any questions or want to work with me!
					</p>
				</section>
				<section className="content-container">
					<h2>My Games</h2>
				</section>
			</section>
		</>
	);
};

export default Home;
