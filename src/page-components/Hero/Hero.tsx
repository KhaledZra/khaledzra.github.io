import HeroIcon from "../HeroIcon/HeroIcon";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<section className={styles["hero"]}>
			<div className={styles["hero__bg"]}></div>
			<section className={`${styles["hero__introduction"]} noselect`}>
				<img
					className={styles["hero__introduction__image"]}
					src="https://picsum.photos/200/300"
					alt="ddd"
					width={200}
					height={200}
					draggable={false}
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
				<span className={styles["hero__socials__wrapper"]}>
					<button className={styles["hero__socials__wrapper__button"]}>
						<HeroIcon
							className={styles["hero__socials__wrapper__button__icon"]}
							icon={"github"}
							ariaLabel={"Github profile"}
						/>
					</button>
					<button className={styles["hero__socials__wrapper__button"]}>
						<HeroIcon
							className={styles["hero__socials__wrapper__button__icon"]}
							icon={"linkedin"}
							ariaLabel={"LinkedIn profile"}
						/>
					</button>
				</span>
				<span className={styles["hero__socials__wrapper"]}>
					<button className={styles["hero__socials__wrapper__button"]}>
						<HeroIcon
							className={styles["hero__socials__wrapper__button__icon"]}
							icon={"itch"}
							ariaLabel={"Itch profile"}
						/>
					</button>
					<button className={styles["hero__socials__wrapper__button"]}>
						<HeroIcon
							className={styles["hero__socials__wrapper__button__icon"]}
							icon={"resume"}
							ariaLabel={"Resume PDF"}
						/>
					</button>
				</span>
			</section>
		</section>
	);
};

export default Hero;
