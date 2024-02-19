import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Education
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left cascade>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">연도</p>
								<p className="my-1 text-xl font-medium">교육받은곳(대학, 교육 등 커리어) 이름</p>
								<p className="my-1 text-sm font-medium">등급</p>
								<p className="text-sm">Grade: 91.2% </p>
							</div>
							<div className="block">
								<Image
									src="/bps_logo.png"
									alt="BPS Logo"
									width={100}
									title="그냥 이미지 블록 이름 적는 곳"
									height={100}
									onClick={() => {
										window.open('교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
									연도-연도
								</p>
								<p className="my-1 text-xl font-medium">암거나</p>
								<p className="my-1 text-sm font-medium">과학</p>
								<p className="text-sm">Grade: 89.5% </p>
							</div>
							<div className="block">
								<Image
									src="/bps_logo.png"
									alt="BPS Logo"
									width={100}
									height={100}
									title="그냥 이미지 블록 이름 적는 곳"
									onClick={() => {
										window.open('교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
									연도-연도
								</p>
								<p className="my-1 font-medium sm:text-xl">전남대학교</p>
								<p className="my-1 text-sm font-medium">chonnam University</p>
								<p className="text-sm">CGPA: 9.66</p>
							</div>
							<Image
								src="/bennett_logo.png"
								alt="Bennett Logo"
								width={100}
								height={100}
								title="그냥 이미지 블록 이름 적는 곳"
								onClick={() => {
									window.open('교육받은곳(대학, 교육 등 커리어) 링크가 들어갈 자리(사진을 누르면 이동)', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
