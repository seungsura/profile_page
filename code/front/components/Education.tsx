import { Element } from 'react-scroll';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

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

	const title = "Education"

	const educationItems: EducationItem[] = [
		{
			year: '연도',
			institution: '교육 이름',
			subtitle: 'eng_name',
			grade: '등급',
			imageSrc: '/bps_logo.png',
			link: '교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)',
		},
		{
			year: '연도-연도',
			institution: '암거나',
			subtitle: 'eng_name',
			grade: '과학',
			imageSrc: '/bps_logo.png',
			link: '교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)',
		},
		{
			year: '연도-연도',
			institution: '전남대학교',
			subtitle: 'eng_name',
			grade: 'chonnam University',
			imageSrc: '/bennett_logo.png',
			link: '교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)',
		},
		
	];

	const EducationItem: React.FC<EducationItemProps> = ({ item }) => {
		return (
			<Fade left cascade>
				<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
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
							width={100}
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
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					{educationItems.map((item, index) => (
						<EducationItem key={index} item={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default Education;
