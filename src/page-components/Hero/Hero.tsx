import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<section className={styles["hero"]}>
			<section className={styles["hero__introduction"]}>
				<img
					className={styles["hero__introduction__image"]}
					src="https://picsum.photos/200/300"
					alt="ddd"
					width={200}
					height={200}
				/>
				<span className={styles["hero__introduction__tagline"]}>
					<p>I'm</p>
					<h1>Khaled Zraiqi,</h1>
					<p className={styles["hero__introduction__tagline__gamedev"]}>
						the <span>gamedeveloper</span>.
					</p>
				</span>
			</section>
			<section className={styles["hero__socials"]}>
				<button className={styles["hero__socials__button"]}>Github</button>
				<button className={styles["hero__socials__button"]}>LinkedIn</button>
				<button className={styles["hero__socials__button"]}>Itch.io</button>
				<button className={styles["hero__socials__button"]}>Resumé</button>
			</section>
		</section>
	);
};

export default Hero;
