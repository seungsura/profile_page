import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';

interface Project {
	index: number;
	image: string;
	image_dark: string;
	description: string;
	name: string;
	demo_link: string;
	github_link: string;
	hover_gif_dark: string;
	hover_gif_light: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();

	const mainTitle = "Projects"

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	// 프로젝트 리스트는 Json형식으로 받아서 처리하는 방식으로 가야 할 듯
	const projects: Project[] = [
		{
			index: 0,
			image: '/project_thumbnails/light/asclepius.png',
			image_dark: '/project_thumbnails/dark/asclepius.png',
			description: 'Desktop Application',
			name: 'Asclepius',
			demo_link: '#',
			github_link: 'https://github.com/ChiragAgg5k/asclepius',
			hover_gif_dark: '/project_gifs/dark/asclepius.gif',
			hover_gif_light: '/project_gifs/light/asclepius.gif',
		},
		{
			index: 1,
			image: '/project_thumbnails/spot-clone.png',
			image_dark: '/project_thumbnails/spot-clone.png',
			description: 'Web Application',
			name: 'Spot Clone',
			demo_link: 'https://spot-clonee.netlify.app/',
			github_link: 'https://github.com/ChiragAgg5k/spot-clone',
			hover_gif_dark: '/project_gifs/spot-clone.gif',
			hover_gif_light: '/project_gifs/spot-clone.gif',
		},
		{
			index: 2,
			image: '/project_thumbnails/light/bu-news-android.png',
			image_dark: '/project_thumbnails/dark/bu-news-android.png',
			description: 'Android Application',
			name: 'BU News',
			demo_link: '#',
			github_link: 'https://github.com/ChiragAgg5k/bu-news-android',
			hover_gif_dark: '/project_gifs/dark/bu-news-android.gif',
			hover_gif_light: '/project_gifs/light/bu-news-android.gif',
		},
		{
			index: 4,
			image: '/project_thumbnails/light/weatherly.png',
			image_dark: '/project_thumbnails/dark/weatherly.png',
			description: 'Web Application',
			name: 'Weatherly',
			demo_link: 'https://weatherrly.vercel.app/',
			github_link: 'https://github.com/ChiragAgg5k/weatherly',
			hover_gif_dark: '/project_gifs/dark/weatherly.gif',
			hover_gif_light: '/project_gifs/light/weatherly.gif',
		},
	];

	const girdRows = Math.ceil(Projects.length / 3);
	const containerGrid = `mx-0 grid grid-cols-1 grid-rows-${girdRows} sm:grid-cols-2 md:mx-4 lg:grid-cols-3`

	return (
		<>
			<Element name="projects" className="relative" />
			<h1 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
				{mainTitle}
			</h1>
			<div>
				<div className={containerGrid}>
					{projects.map((project) => {
						return (
							<ProjectCard projectName={project} setModalImg={setModalImg} theme={theme} />
					)})}
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}
				`}
				onClick={() => {
					setModalImg(undefined);
				}}
			>
				<div className="flex items-center justify-center sm:m-10 lg:m-20">
					{/* eslint-disable @next/next/no-img-element */}
					<img id="modal-img" alt="" src={modalImg ? modalImg : ''} className="max-h-[90dvh]" />
				</div>
			</div>
		</>
	);
}
