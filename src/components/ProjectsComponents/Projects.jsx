import React, { useState } from 'react';
import ProjectTile from './ProjectTile';
import './Projects.css';

import metronomeImg from '../../assets/images/Metronome.png';

const Projects = () => {
  const projects = [
    {
      title: 'My setlist  metronome',
      img: metronomeImg,
      summary:
        "Metronome visuel pour mon groupe, cliquer sur un morceau pour le lancer. Possibilité d'édition et de création de morceau grace à un backend",
      stack: ['React', 'node.js', 'mySql'],
      id: 0,
    },
    {
      title: 'Note generator',
      img: metronomeImg,
      summary:
        'Générateur de note (FR/EN, choix altération et qualité) pour le travail des gammes et accords',
      stack: ['Vanilla JS'],
      id: 1,
    },
    {
      title: 'Burger Builder',
      img: metronomeImg,
      summary:
        "Utilitaire de création de burger (choix d'ingrédients) réalisé au long d'un cours React. Utilisation de firebase pour stocker les commandes",
      stack: ['React', 'firebase'],
      id: 2,
    },
    {
      title: '4 spirited guys',
      img: metronomeImg,
      summary:
        'Premier projet de formation à la wild code school, site vitrine pour un bar de dégustation',
      stack: ['React', 'node.js', 'mySql'],
      id: 3,
    },
    {
      title: 'BiclooApp',
      img: metronomeImg,
      summary:
        "Second projet de formation àa la wild code school, application \"gamifiée\" pour encourager les utilisateurs à utiliser plus de bicloo. L' idée est de gagner de l'XP en récupérant des vélo dans les stations pleines et en les déposants dans les station vides. Choix d'itinéraires, shop pour dépenser l'xp, authentification mail, github et google, base de données pour les profiles et leur data.    ",
      stack: ['React', 'leaflet (map, itinéraires, search', 'firebase'],
      id: 4,
    },
    {
      title: 'Seek for Musk',
      img: metronomeImg,
      summary:
        "Appli réalisée en 24 lors d'un hackathon à la wild code school. Le sujet étant l'espace, nous avons fait le choix d'un jeu absurde dans lequel il faut trouver Elon Musk qui s'est caché dans la galaxie. Pour cela on visite des planètes (à condition d'avoir assez d'essence), jusqu'à trouver le bosse final Elon Musk",
      stack: ['React', 'parallax', 'P5.js'],
      id: 5,
    },
    {
      title: 'Seek for Musk',
      img: metronomeImg,
      summary:
        "Appli réalisée en 24 lors d'un hackathon à la wild code school. Le sujet étant l'espace, nous avons fait le choix d'un jeu absurde dans lequel il faut trouver Elon Musk qui s'est caché dans la galaxie. Pour cela on visite des planètes (à condition d'avoir assez d'essence), jusqu'à trouver le bosse final Elon Musk",
      stack: ['React', 'parallax', 'P5.js'],
      id: 6,
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
    <div className='flex flex-col justify-between flex-grow text-white pt-16 pb-10'>
      <div className='text-6xl border-4 border-white p-6 self-center'>
        Mes projets
      </div>
      <div className='ProjectsContainer overflow-scroll flex pl-8'>
        {projects.map((project) => (
          <ProjectTile project={project} key={project.id} />
        ))}
      </div>
      <div className='flex justify-between self-center w-1/2'>
        <div
          className='h-14 w-14 p-4 flex justify-center items-center border-2 border-white rounded-full text-3xl'
          onClick={() => scrollItems('left')}
        >
          {'<-'}
        </div>
        <div
          className='h-14 w-14 p-4 flex justify-center items-center border-2 border-white rounded-full text-3xl whitespace-nowrap'
          onClick={() => scrollItems('right')}
        >
          {'->'}
        </div>
      </div>

      <div
        className='textToHover self-center text-2xl'
        onClick={() => window.open('https://github.com/Poppe-A', '_blank')}
      >
        Find them on Github !
      </div>
    </div>
  );
};

export default Projects;
