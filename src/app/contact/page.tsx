import EmailForm from '@/components/EmailForm';
import ToastMessage from '@/components/ToastMessage';
import { getJSONData } from '@/service/staticData';
import { ContactLinkList } from '@/types/contackLink.type';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';

const IconSelector: { [idx: string]: React.ReactNode } = {
	Github: <SiGithub size={40} className="fill-tertiary hover:scale-110 duration-200" />,
	Linkedin: <SiLinkedin size={40} className="fill-tertiary hover:scale-110 duration-200" />,
	Instagram: <SiInstagram size={40} className="fill-tertiary hover:scale-110 duration-200" />,
};

export default async function ContactPage() {
	const contactLink = (await getJSONData('contactLink')) as ContactLinkList;

	return (
		<div className="flex flex-col items-center gap-8 w-full p-12">
			<section className="flex flex-col items-center gap-6">
				<h2 className="text-4xl">Contect Me</h2>
				<span className="text-xl font-light">ksw3721@gmail.com</span>
				<ul className="flex gap-3">
					{contactLink.map(contact => {
						return (
							<Link key={contact.id} href={contact.url} target="_blank">
								<li>{IconSelector[contact.name]}</li>
							</Link>
						);
					})}
				</ul>
			</section>

			<EmailForm />
		</div>
	);
}
