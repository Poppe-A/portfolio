import React from 'react';
import './timeline.css';

const Timeline = () => {
  return (
    <div className='w-full h-3/4 flex justify-center '>
      <div
        className='fixedSizeContent w-11/12 md:w-8/12 overflow-scroll .no-scrollbar'
        onScroll={(e) => console.log('scroll e', e)}
      >
        <div className='relative  '>
          <div className='border-2-2 absolute border-grey-400  h-full border left-2/4'></div>
          {/* right timeline*/}
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'></h1>
            </div>
            <div className='order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-base md:text-xl'>
                DUT génie électrique et informatique industrielle
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>2014-2016 - Nantes</h4>
              <p className='text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
                - électronique analogique et numérique
                <br /> - design de systèmes électronique <br /> -programmation
                de micro processeur et de systèmes divers (arduino, VSDL,
                raspberry)
                <br />- Programmation logicielle (C, introduction au Web)
              </p>
            </div>
          </div>
          {/* left timeline*/}
          <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto text-white font-semibold text-lg'>2</h1>
            </div>
            <div className='order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-white text-base md:text-xl'>
                Période de travail en électronique
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>
                2016/2018 - Loire atlantique
              </h4>
              <p className='text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100'>
                - Intégration de materiel audio-visuel <br /> Chantiers de
                l'atlantique / St. Nazaire
                <br />- Maintenance et réparation de materiel électrique et
                électronique <br />
                Diverses entreprises
              </p>
            </div>
          </div>
          {/* right timeline*/}
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'>3</h1>
            </div>
            <div className='order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-base md:text-xl'>
                Création d'un escape game
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>
                2018 - Chateau de Vitré
              </h4>
              <p className='text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
                - Design et réalisation des systèmes électroniques et jeux de
                l'escape game - Programmation arduino et raspberry - Vidéo et
                son
              </p>
            </div>
          </div>
          {/* left timeline*/}
          <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto text-white font-semibold text-lg'>4</h1>
            </div>
            <div className='order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-white text-base md:text-xl'>
                Formation developpement Web
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>
                été 2018 - école centrale de Nantes
              </h4>
              <p className='text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100'>
                - Réorientation (POEI) en dev web - HTML, CSS, JS, Vue.js,
                Node.js
              </p>
            </div>
          </div>
          {/* right timeline*/}
          <div className='mb-8 flex justify-between items-center w-full right-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto font-semibold text-lg text-white'></h1>
            </div>
            <div className='order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-gray-800 text-base md:text-xl'>
                Développeur front end
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>
                2018-2020 - WIZTIVI - carquefou
              </h4>
              <p className='text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
                - Développement front end (framework propriétaire) sur smart-tv,
                STB, tablettes pour SFR gaming, canal+, TF1, RMC sport, ...
              </p>
            </div>
          </div>
          {/* left timeline*/}
          <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
            <div className='order-1 w-5/12'></div>
            <div className='z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full'>
              <h1 className='mx-auto text-white font-semibold text-lg'>4</h1>
            </div>
            <div className='order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-3 md:px-6 py-4'>
              <h3 className='mb-3 font-bold text-white text-base md:text-xl'>
                Formation developpement Web
              </h3>
              <h4 className='mb-3 text-sm md:text-base'>
                2021 - Wild code school - Nantes
              </h4>
              <p className='text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100'>
                Back to school ! <br />
                Après deux ans chez Wiztivi, j'ai eu une grande envie de me
                mettre à jour techniquement et de diversifier mes compétences.
                <br />
                React, Node, Express, MySql, Agilité
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
