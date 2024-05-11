import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Contact = () => {
	return (
		
	<ProjectsProvider>
		<ProjectsGrid></ProjectsGrid>
	</ProjectsProvider>
	);
};

export default Contact;
