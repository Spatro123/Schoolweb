import React from 'react';
import { motion } from 'framer-motion';
import classes from './Resources.module.css';
import image1 from './img3.jpg';
import image2 from './img4.jpg';
import image3 from './img3.jpg';
import img from './school.jpg';

const Resources = () => {
    const sections = [
        {
            title: 'Infrastructure',
            images: [
                { src: img, alt: 'Library', link: '/infrastructure/library' },
                { src: image1, alt: 'Lab', link: '/infrastructure/lab' },
                { src: image2, alt: 'Campus Amenities', link: '/infrastructure/campus' },
            ],
            description: 'Explore state-of-the-art facilities, including modern libraries, research labs, and campus amenities designed for an optimal learning experience.',
            viewAllLink: '/infrastructure',
        },
        {
            title: 'Alumni',
            images: [
                { src: image1, alt: 'Networking Event', link: '/alumni/networking' },
                { src: image3, alt: 'Alumni Spotlight', link: '/alumni/spotlight' },
                { src: img, alt: 'Success Stories', link: '/alumni/success' },
            ],
            description: 'Connect with our extensive alumni network, featuring professionals who are leaders in their respective industries worldwide.',
            viewAllLink: '/alumni',
        },
        {
            title: 'News',
            images: [
                { src: image2, alt: 'Research News', link: '/news/research' },
                { src: image3, alt: 'Event Updates', link: '/news/events' },
                { src: img, alt: 'Campus News', link: '/news/campus' },
            ],
            description: 'Stay updated with the latest news about events, research breakthroughs, and academic achievements within our university.',
            viewAllLink: '/news',
        },
        {
            title: 'Articles',
            images: [
                { src: image3, alt: 'Faculty Articles', link: '/articles/faculty' },
                { src: image2, alt: 'Student Articles', link: '/articles/student' },
                { src: img, alt: 'Guest Articles', link: '/articles/guest' },
            ],
            description: 'Read insightful articles authored by our faculty, students, and guest contributors across diverse academic and professional topics.',
            viewAllLink: '/articles',
        },
    ];

    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    University Resources
                </motion.h1>
            </header>

            {sections.map((section, index) => (
                <motion.section
                    className={classes.section}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key={section.title}
                >
                    <h2>{section.title}</h2>
                    <div className={classes.imageGrid}>
                        {section.images.map((image, idx) => (
                            <a href={image.link} key={idx} className={classes.imageLink}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={classes.image}
                                />
                            </a>
                        ))}
                    </div>
                    <p>{section.description}</p>
                    <a href={section.viewAllLink} className={classes.viewAllButton}>
                        View All
                    </a>
                </motion.section>
            ))}
        </div>
    );
};

export default Resources;
