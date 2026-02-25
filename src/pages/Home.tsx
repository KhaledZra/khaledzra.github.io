import Hero from "../page-components/Hero/Hero";
import { getAge } from "../utils/getAge";

const Home = () => {
	// Maybe overkill, but using infered age makes sure we never leave stale data in the portfolio.
	const age = getAge(new Date(1997, 11, 17)); // OBS: Index 0 for month. (11 is December)

	return (
		<>
			<Hero />
			<section>
				<section className="content-container">
					<h2>About me</h2>
					<p>
						My name's <strong>Khaled</strong>, I'm a {age}-year-old{" "}
						<strong>fullstack developer</strong> with a higher vocational education in web
						development from <strong>Västra Götaland, Sweden</strong>. I have since moved to Malmö
						where I am undergoing studies as a <strong>gameplay programmer</strong> at{" "}
						<strong>FutureGames</strong>.
					</p>
					<p>
						I am doing well in my studies, which I am sure is a result of my huge ambition and
						love for game development as a craft. I would say that my greatest strength is my
						ability to <strong>adapt to new environments and frameworks</strong>. I have become
						comfortable with being uncomfortable.
					</p>
				</section>
				<section className="content-container">
					<h2>My projects</h2>
				</section>
			</section>
		</>
	);
};

export default Home;
