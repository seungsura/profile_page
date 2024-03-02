import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from 'next-themes';


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

interface IProjectCardProps {
    projectName: Project;
    setModalImg: (img: string | undefined) => void;
    theme: string | undefined;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ projectName, setModalImg, theme }) => (
    <div
        className={`group m-6 flex items-center flex-col justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
    >
        <Fade direction='up'>
            <div className="relative flex items-center justify-center h-full">
                <Image
                    src={theme === 'light' ? projectName.image : projectName.image_dark}
                    alt={projectName.name}
                    width={300}
                    height={224}
                    title="Click to enlarge"
                    onClick={() => {
                        setModalImg(theme === 'dark' ? projectName.image_dark : projectName.image);
                    }}
                    className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
                />
                <Image
                    src={theme === 'light' ? projectName.hover_gif_light : projectName.hover_gif_dark}
                    alt={projectName.name}
                    width={300}
                    height={224}
                    className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
                />
            </div>
            <div className={`w-full`}>
                <p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">{projectName.description}</p>
                <p className="my-1 text-xl font-medium">{projectName.name}</p>
                <div className="flex justify-between">
                    <Link
                        className="text-sm"
                        href={projectName.demo_link}
                        aria-label="Visit Demo"
                        onClick={(e) => {
                            e.preventDefault();
                            if (projectName.demo_link !== '#') window.open(projectName.demo_link, '_blank');
                        }}
                    >
                        {projectName.demo_link === '#' ? '' : 'Visit'}
                        <span
                            className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"
                        ></span>
                    </Link>
                    <Link href={projectName.github_link} rel="noreferrer" title="Github Link" target="_blank">
                        <AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
                    </Link>
                </div>
            </div>
        </Fade>
    </div>
);

export default ProjectCard;
