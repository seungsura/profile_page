import { Element } from 'react-scroll';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import React, { ReactNode } from 'react';

interface EducationItem {
	year: string;
	institution: string;
	subtitle: string;
	grade: string;
	imageSrc: string;
	link: string;
}

const Education: React.FC = () => {
	interface EducationItemProps {
		item: EducationItem;
	}

	const title = "Career"

	const educationItems: EducationItem[] = [
		{
			year: '2023 ~',
			institution: '펄어비스',
			subtitle: 'PEARL ABYSS',
			grade: 'GameEngine Platform Division',
			imageSrc: '/pearlabyss_logo.webp',
			link: 'https://www.pearlabyss.com/',
		},
		{
			year: '2022 - 2023',
			institution: '카카오클라우드 스쿨',
			subtitle: 'KakaoCloud School',
			grade: 'Cloud Engineer Track',
			imageSrc: '/kakaoCloudSchool.png',
			link: 'https://www.kakaocorp.com/page/detail/9794',
		},
		{
			year: '2019 - 2023',
			institution: '전남대학교',
			subtitle: 'Chonnam National Univ',
			grade: 'Bachelor of Engineering',
			imageSrc: '/chonnamUniv.png',
			link: 'https://www.jnu.ac.kr/jnumain.aspx',
		}
	];

	const lastItem = educationItems[educationItems.length - 1];
	const otherItems = educationItems.slice(0, educationItems.length - 1);

	const CareerItem: React.FC<EducationItemProps> = ({ item }) => {
		return (
			<Fade direction='left' cascade>
				<div className={`group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-teal-700`}>
					<div>
						<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">{item.year}</p>
						<p className="my-1 text-xl font-medium">{item.institution}</p>
						<p className="my-1 text-sm font-medium">{item.subtitle}</p>
						<p className="text-sm">{item.grade}</p>
					</div>
					<div className="block">
						<Image
							src={item.imageSrc}
							alt="Education Image"
							width={300}
							title="Education or Co"
							height={100}
							onClick={() => {
								window.open(item.link, '_blank');
							}}
							className="hover:cursor-pointer"
						/>
					</div>
				</div>
			</Fade>
		);
	};

	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					{title}
				</h3>
					<div className="mx-0 grid grid-cols-1 md:mx-5 ">
						{educationItems.map((item, index) => (
							<CareerItem key={index} item={item}/>
						))}
					</div>
				</div>
		</>
	);
};

export default Education;
