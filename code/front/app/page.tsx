'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import ToolBox from '../components/ToolBox';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<NavBar />
			<main className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
				{/* Front Section, covers entire screen */}
				<section>
					<LandingPage />
				</section>

				{/* Main Section */}
				<section>
					<AboutMe />
					<Education />
					<ToolBox />
					<Projects />
				</section>

				{/* Footer/Contact Me Section */}
				<section>
					<ContactMe />
				</section>
			</main>
		</ThemeProvider>
	);
}
