import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';
import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
	const title = "About Me"
	const introduction = `
		여기는 자기소개가 들어갈 자리 여기는 자기소개가 들어갈 자리
		여기는 자기소개가 들어갈 자리 여기는 자기소개가 들어갈 자리
		여기는 자기소개가 들어갈 자리 여기는 자기소개가 들어갈 자리
		여기는 자기소개가 들어갈 자리 여기는 자기소개가 들어갈 자리
	`
	const profileImageFileName = "/nju.png"

	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					{title}
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src={profileImageFileName}
						alt="Profile Picture"
						width={480}
						height={480}
						className={styles.profile_image}
					/>
					<p className={styles.profile_text}>
						{introduction}
					</p>
				</div>
			</div>
		</Fade>
	);
}
