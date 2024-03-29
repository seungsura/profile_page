'use client';
import { ThemeProvider } from 'next-themes';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';
import Education from '../components/Career';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

export default function Home() {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<NavBar />
			<main className="bg-stone-200 text-gray-800 dark:bg-gray-950 dark:text-white">
				{/* Front Section, covers entire screen */}
				<section>
					<LandingPage />
				</section>

				{/* Main Section */}
				<section>
					<AboutMe />
					<Education />
					{/* <ToolBox /> */}
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
