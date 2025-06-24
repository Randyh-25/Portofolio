import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { projects } from './Projects';

// Tambahkan data experience di sini atau import dari file lain jika sudah ada
const experiences = [
	{
		title: 'Assistant Practicum – C++ Programming',
		organization: 'Institut Teknologi Sumatera (ITERA)',
		period: 'Feb 2025 – May 2025',
		description: 'Guided students in C++ programming basics and assessed laboratory works.',
		type: 'work',
	},
	{
		title: 'Website Division – Public Relations',
		organization: 'Informatics Department ITERA',
		period: 'Oct 2024 – Present',
		description: 'Write and publish articles for department website, improving engagement.',
		type: 'work',
	},
	{
		title: 'Website Division – Accreditation Team',
		organization: 'Informatics Department ITERA',
		period: 'May 2024 – Dec 2024',
		description: 'Built study program website supporting "Baik" accreditation achievement.',
		type: 'work',
	},
	{
		title: 'Group Guide – Campus Orientation',
		organization: 'Institut Teknologi Sumatera (ITERA)',
		period: 'Aug 2024',
		description: 'Mentored new students in campus adaptation and academic activities.',
		type: 'volunteer',
	},
	{
		title: 'Content Editor – Al-Faris Organization',
		organization: 'SMAN 3 Medan',
		period: 'Aug 2020 – Jul 2021',
		description: 'Created content and campaigns that increased member count by 10%.',
		type: 'volunteer',
	},
];

const Hero: React.FC = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const socialLinks = [
		{ icon: Github, href: 'https://github.com/Randyh-25', label: 'GitHub' },
		{ icon: Linkedin, href: 'https://www.linkedin.com/in/randyhendriyawan', label: 'LinkedIn' },
		{ icon: Mail, href: 'mailto:randyhendriyawan@gmail.com', label: 'Email' },
	];

	const handleDownloadCV = () => {
		const doc = new jsPDF({
			unit: 'mm',
			format: 'a4',
		});

		// === Header ===
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(22);
		doc.text('Randy Hendriyawan', 15, 20);

		doc.setFontSize(11);
		doc.setFont('helvetica', 'normal');
		doc.text('+62 878-8173-3721 | randyhendriyawan@gmail.com', 15, 28);

		doc.setTextColor(30, 64, 175);
		doc.textWithLink('LinkedIn: https://id.linkedin.com/in/randyhendriyawan', 15, 34, { url: 'https://id.linkedin.com/in/randyhendriyawan' });
		doc.textWithLink('Portfolio: https://randyh-25.github.io/Portofolio/', 15, 40, { url: 'https://randyh-25.github.io/Portofolio/' });
		doc.textWithLink('GitHub: https://github.com/Randyh-25', 15, 46, { url: 'https://github.com/Randyh-25' });
		doc.setTextColor(0, 0, 0);

		// === Tentang Saya ===
		let y = 54;
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(13);
		doc.text('Tentang Saya', 15, y);
		doc.setDrawColor(51, 65, 85);
		doc.line(15, y + 2, 195, y + 2);

		y += 8;
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(11);
		doc.text(
			'Saya adalah mahasiswa aktif program studi Teknik Informatika di Institut Teknologi Sumatera dengan minat besar di bidang teknologi, pengembangan aplikasi, serta organisasi kemahasiswaan. Berpengalaman dalam manajemen konten digital, pengembangan website, dan kegiatan kepemimpinan kampus. Memiliki kemampuan dalam pemrograman, komunikasi, serta kolaborasi tim.',
			15,
			y,
			{ maxWidth: 180 }
		);

		// === Pengalaman ===
		y += 18;
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(13);
		doc.text('Pengalaman Organisasi dan Profesional', 15, y);
		doc.line(15, y + 2, 195, y + 2);

		y += 8;
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(11);

		// Render setiap pengalaman sebagai blok detail
		experiences.forEach((exp) => {
			// Judul & Organisasi
			doc.setFont('helvetica', 'bold');
			doc.text(`${exp.title} – ${exp.organization}`, 15, y);
			y += 6;
			// Periode
			doc.setFont('helvetica', 'italic');
			doc.text(exp.period, 15, y);
			y += 6;
			// Deskripsi (poin)
			doc.setFont('helvetica', 'normal');
			// Pisahkan deskripsi menjadi poin jika ada lebih dari satu kalimat
			exp.description.split('. ').filter(Boolean).forEach((point) => {
				doc.circle(17, y - 1.5, 0.7, 'F');
				doc.text(point.trim().replace(/^\-/, ''), 20, y, { maxWidth: 170 });
				y += 6;
			});
			y += 2;
			// Page break jika mendekati bawah
			if (y > 260) {
				doc.addPage();
				y = 20;
			}
		});

		// === Projects ===
		y += 4;
		if (y > 250) {
			doc.addPage();
			y = 20;
		}
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(13);
		doc.text('Projects', 15, y);
		doc.line(15, y + 2, 195, y + 2);

		y += 8;
		autoTable(doc, {
			startY: y,
			head: [['Title', 'Description', 'Technologies']],
			body: projects.map((p) => [
				p.title,
				p.description,
				p.technologies.join(', '),
			]),
			styles: { fontSize: 10, cellPadding: 2 },
			headStyles: { fillColor: [30, 64, 175], textColor: 255 },
			alternateRowStyles: { fillColor: [241, 245, 249] },
			margin: { left: 15, right: 15 },
			theme: 'striped',
		});

		// === Footer ===
		doc.setFontSize(9);
		doc.setTextColor(120);
		doc.text(
			'Generated from portfolio website • ' + new Date().toLocaleDateString(),
			105,
			290,
			{ align: 'center' }
		);

		doc.save('CV_Randy_Hendriyawan_2025.pdf');
	};

	return (
		<section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="mb-6">
						<motion.div
							className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
							whileHover={{ scale: 1.05, rotate: 5 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<img
								src="https://raw.githubusercontent.com/Randyh-25/Portofolio/refs/heads/main/src/assets/profile.jpg"
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</div>

					<motion.h1
						className="text-4xl md:text-6xl font-bold gradient-text dark:dark-gradient-text mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						Randy Hendriyawan
					</motion.h1>

					<motion.p
						className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						Informatics Student • Developer • Content Writer
					</motion.p>

					<motion.p
						className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto text-balance"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						Passionate about technology and student leadership at Institut Teknologi Sumatera (ITERA)
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
					>
						<motion.button
							className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-800 hover:to-indigo-700 transition-all flex items-center gap-2 border-2 border-blue-800"
							whileHover={{ scale: 1.07 }}
							whileTap={{ scale: 0.97 }}
							onClick={handleDownloadCV}
						>
							<Download size={18} />
							Download CV
						</motion.button>
						<motion.button
							onClick={() => scrollToSection('projects')}
							className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							See Projects
						</motion.button>
					</motion.div>

					<motion.div
						className="flex justify-center space-x-6 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.8 }}
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-slate-400 hover:text-slate-600 transition-colors"
								whileHover={{ scale: 1.2, y: -2 }}
								whileTap={{ scale: 0.9 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 + index * 0.1 }}
								aria-label={social.label}
							>
								<social.icon size={24} />
							</motion.a>
						))}
					</motion.div>

					<motion.button
						onClick={() => scrollToSection('about')}
						className="text-slate-400 hover:text-slate-600 transition-colors"
						animate={{ y: [0, 8, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
						aria-label="Scroll down"
					>
						<ArrowDown size={24} />
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;