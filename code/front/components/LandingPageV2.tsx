import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import TextTransition, { presets } from 'react-text-transition';
import styles from '../styles/LandingPage.module.css';
import handler from '../app/api'
import DynamicMessageComponent from './WelcomeText'



interface ISocialLink {
	name: string;
	url: string;
}

export default function LandingPage() {
	const line1 = 'Hi, I am a DevOps Engineer';
	const line2 = 'I like to learn new things and build stuff.';
	const titles = ['Computer Science Student', 'Full Stack Developer', 'Competitive Programmer', 'Caffeinated Coder'];
	const animatedMp4 = "allLogo.mp4"
	const mainTitle = "Hello!"

	const [scrollY, setScrollY] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [titleIndex, setTitleIndex] = useState(0);

	const linkData: ISocialLink[] = [
		{ name: 'Github', url: '깃허브 링크가 들어갈 자리' },
		{ name: 'LinkedIn', url: '링크드인 같은 링크가 들어갈 자리 필요한가' },
		{ name: 'Leetcode', url: '릿코드 링크가 들어갈 자리 (백준?)' }
	];

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 clearInterval을 통해 interval을 정리
	}, [titles.length]);

	useEffect(() => {
	  const handleScroll = () => {
		setScrollY(window.scrollY);
	  };
  
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

	const RenderTitle = () => {
	if (mounted) {
		return (
		<TextTransition springConfig={presets.gentle} direction='down' className={styles.text_transition}>
			<p className={styles.nick_name}>{titles[titleIndex % titles.length]}</p>
		</TextTransition>
		);
	} else {
		return (
		<h3 className={styles.initial_text}>
			{' '}
			<br />{' '}
		</h3>
		);
	}
	};

	const RenderAnimatedText = () => {
		return (
			<motion.h3
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 1, y: 50 },
				visible: {
				opacity: 1,
				y: 0,
				transition: {
					staggerChildren: 0.02,
				},
				},
			}}
			className={styles.initial_text}
			>
			{line1.split('').map((char, index) => (
				<motion.span
				key={char + '-' + index}
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: {
					opacity: 1,
					y: 0,
					},
				}}
				>
				{char}
				</motion.span>
			))}
			<br />
			{line2.split('').map((char, index) => (
				<motion.span
				key={char + '-' + index}
				variants={{
					hidden: { opacity: 0, y: 0 },
					visible: {
					opacity: 1,
					y: 0,
					},
				}}
				>
				{char}
				</motion.span>
			))}
			</motion.h3>
		);
	};

	const SocialLinks: React.FC<{socialLinks: ISocialLink[]}>  = ({ socialLinks }) => {
		return (
		<div className={styles.social_container}>
			{socialLinks.map((link, index) => (
			<a
				key={index}
				href={link.url}
				target="_blank"
				rel="noreferrer"
				aria-label={link.name}
				className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
			>
				{link.name === 'Github' && <AiFillGithub />}
				{link.name === 'LinkedIn' && <AiFillLinkedin />}
				{link.name === 'Leetcode' && <SiLeetcode />}
				<p className="invisible text-xs group-hover:visible">{link.name}</p>
			</a>
			))}
		</div>
		);
	};

	return (
		<div style={{ transform: `translateY(-${scrollY}px)` }}>
		<div className="relative w-100 h-100">
			<div className="absolute top-0 left-0 w-full h-full bg-indigo-950 opacity-50"></div>
			<video
			autoPlay
			loop
			muted
			className="position-absolute top-0 left-0 w-full h-full object-cover z-0"
			>
			<source src={animatedMp4} type="video/mp4" />
			</video>
		  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 ${styles.container}`}>
			<h1 className={styles.name}>
				<DynamicMessageComponent/>
			</h1>
			<br/>
			{RenderTitle()}
			{RenderAnimatedText()}
			<SocialLinks socialLinks={linkData} />
		  </div>
		</div>
		</div>
	  );
}
