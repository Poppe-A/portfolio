import React from 'react';
import ProjectTile from './ProjectTile';
import { isMobile } from 'react-device-detect';

import metronomeImg from '../../assets/images/Metronome.png';
import portfolioImg from '../../assets/images/portfolioImg.png';
import notesGenImg from '../../assets/images/NotesGen.png';
import burgerImg from '../../assets/images/burger.png';
import spiritedGuysImg from '../../assets/images/4spirited.png';
import biclooImg from '../../assets/images/bicloo.jpg';
import muskImg from '../../assets/images/musk.jpg';
import blackjackImg from '../../assets/images/blackjack.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Mon Portfolio',
      img: portfolioImg,
      summary:
        "Vous êtes actuellement sur ce site ! Je l'ai créé en guise de petit projet supplémentaire, pour compléter un CV plus traditionnel, et mettre en valeur mes projets. Ce site, ainsi que tout mes projets sont hebergés sur mon VPS.",
      stack: ['React', 'Tailwind', 'Apache'],
      border: true,
      id: 12,
    },
    {
      title: 'Seek for Musk',
      img: muskImg,
      summary:
        "Appli réalisée en équiper en 24h lors d'un hackathon à la Wild Code School. Le sujet étant l'espace, nous avons fait le choix d'un jeu absurde dans lequel il faut trouver Elon Musk qui s'est caché dans la galaxie. Pour cela on visite des planètes (à condition d'avoir assez d'essence), jusqu'à trouver le bosse final Elon Musk. Version Desktop uniquement",
      stack: ['React', 'parallax', 'P5.js'],
      link: 'seekformusk.apoppe.com',
      id: 5,
    },
    {
      title: 'BiclooApp',
      img: biclooImg,
      summary:
        'Second projet de formation à la Wild Code sSchool, application "gamifiée" pour encourager les utilisateurs à utiliser plus de bicloo. L\' idée est de gagner de l\'XP en récupérant des vélo dans les stations pleines et en les déposants dans les station vides. Version mobile plus optimisée.',
      stack: ['React', 'leaflet', 'firebase', 'tailwind'],
      link: 'biclooapp.apoppe.com',

      id: 4,
    },
    {
      title: 'My setlist  metronome',
      img: metronomeImg,
      summary:
        "Metronome visuel pour mon groupe, cliquer sur un morceau pour le lancer. Possibilité d'édition et de création de morceau grace à un backend",
      stack: ['React', 'node.js', 'mySql'],
      link: 'metronome.apoppe.com',

      id: 0,
    },
    {
      title: '4 spirited guys',
      img: spiritedGuysImg,
      summary:
        'Premier projet de formation à la Wild Code School, site vitrine pour un bar de dégustation fictif',
      stack: ['HTML, CSS, JS'],
      link: 'spiritedguys.apoppe.com',

      id: 3,
    },
    {
      title: 'Burger Builder',
      img: burgerImg,
      summary:
        "Utilitaire de création de burger (choix d'ingrédients) réalisé au long d'un cours React. Utilisation de firebase pour stocker les commandes",
      stack: ['React', 'firebase'],
      link: 'burgerbuilder.apoppe.com',

      id: 2,
    },
    {
      title: 'Note generator',
      img: notesGenImg,
      summary:
        'Générateur de note (FR/EN, choix altération et qualité) pour le travail des gammes et accords',
      stack: ['HTML, CSS, JS'],
      link: 'notesgen.apoppe.com',

      id: 1,
    },
    {
      title: 'Blackjack',
      img: blackjackImg,
      summary:
        "TP à la Wild Code School, réalisation d'un blackjack. Version desktop uniquement.",
      stack: ['Html, css, js'],
      link: 'blackjack.apoppe.com',

      id: 7,
    },
  ];

  const scrollItems = (direction) => {
    console.log('scroll ', direction);
    var container = document.querySelector('.ProjectsContainer');

    if (direction === 'right' && container.scrollLeft < container.scrollWidth) {
      let scrollAmount = 0;
      var slideTimer = setInterval(function () {
        container.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 700) {
          window.clearInterval(slideTimer);
        }
      }, 1);
    }

    if (direction === 'left' && container.scrollLeft > 0) {
      let scrollAmount = 0;
      let slideTimer = setInterval(function () {
        container.scrollLeft -= 10;
        scrollAmount += 10;
        if (scrollAmount >= 700) {
          window.clearInterval(slideTimer);
        }
      }, 0);
    }
  };
  return (
    <div className='flex flex-col justify-between flex-grow text-white pt-8 md:pt-16 pb-4 md:pb-10'>
      <div className='text-3xl md:text-6xl border-2 md:border-4 border-testColor p-2 md:p-6 self-center'>
        Mes <span className='text-testColor-light'>P</span>rojets
      </div>
      <div className='ProjectsContainer overflow-scroll flex px-4 md:px-8'>
        {projects.map((project) => (
          <ProjectTile project={project} key={project.id} />
        ))}
      </div>
      {!isMobile ? (
        <div className='flex justify-between self-center w-1/2'>
          <div
            className='h-14 w-14 p-4 flex justify-center items-center border-2 border-white rounded-full text-3xl transition duration-300 ease-in-out hover:bg-white hover:text-black'
            onClick={() => scrollItems('left')}
          >
            {'<-'}
          </div>
          <div
            className='h-14 w-14 p-4 flex justify-center items-center border-2 border-white rounded-full text-3xl whitespace-nowrap transition duration-300 ease-in-out hover:bg-white hover:text-black'
            onClick={() => scrollItems('right')}
          >
            {'->'}
          </div>
        </div>
      ) : null}

      <div
        className='textToHover self-center text-xl md:text-2xl'
        onClick={() => window.open('https://github.com/Poppe-A', '_blank')}
      >
        Find them on Github !
      </div>
    </div>
  );
};

export default Projects;
