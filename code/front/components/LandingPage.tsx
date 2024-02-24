import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import TextTransition, { presets } from 'react-text-transition';
import styles from '../styles/LandingPage.module.css';
import handler from '../app/api'

interface socialLink {
	name: string;
	url: string;
}

export default function LandingPage() {
	const line1 = 'Hi, I am a DevOps Engineer';
	const line2 = 'I like to learn new things and build stuff.';
	const titles = ['Computer Science Student', 'Full Stack Developer', 'Competitive Programmer', 'Caffeinated Coder'];

	const [mounted, setMounted] = useState(false);
	const [titleIndex, setTitleIndex] = useState(0);

	const linkData: socialLink[] = [
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
			{titles[titleIndex % titles.length].split('').map((char, index) => (
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
			</motion.h3>
		);
	};

	const SocialLinks: React.FC<{socialLinks: socialLink[]}>  = ({ socialLinks }) => {
		return (
		<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
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
		<div className={styles.layout}>
			<div className={styles.container}>
				<h1 className={styles.name}>
					성 이름
				</h1>
				{RenderTitle()}
      			{RenderAnimatedText()}
				<SocialLinks socialLinks={linkData} />
			</div>

			<div className="px-10 py-20 md:px-0">
				<video
					autoPlay
					loop
					muted
					className="w-100 mx-auto rounded-full border-4 border-cyan-500"
					poster="/coding_anim_thumb.jpg" // 썸네일 영상칸에는 영상 넣으면 재밌을 듯
				> 
					<source src="/coding_anim.mp4" type="video/mp4" /> 
				</video>
			</div>
		</div>
	);
}
