import { useState } from 'react';
import './ProjectTile.css';
import { isMobile } from 'react-device-detect';
const ProjectTile = ({ project, index }) => {
  const [isSummary, setIsSummary] = useState(false);

  // const content = isSummary ? (
  //   <div className='content'>{project.summary}</div>
  // ) : (
  //   <img className='content' src={project.img} alt={project.img} />
  // );
  return (
    <div
      className={`ProjectTile ${
        !isMobile && index % 2 !== 0 ? 'transform translate-y-2/4' : ''
      } flex flex-col items-center justify-between w-11/12 md:w-5/12 border-2 border-white p-4 mb-16 md:p-8 text-white`}
      onMouseEnter={() => {
        setIsSummary(true);
      }}
      onMouseLeave={() => {
        setIsSummary(false);
      }}
    >
      <h3 className='text-xl text-green-600 md:text-3xl mb-2 md:mb-8'>
        {project.title}
      </h3>
      <div
        className={`content h-1/4 md:h-1/2 ${
          project.border ? 'border-2 border-gray-600' : ''
        }`}
        style={{
          backgroundImage: `url(${project.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
        }}
      >
        {!isSummary && isMobile ? (
          <div className='w-full'>
            <div className='w-full flex justify-center mt-4'>
              Cliquez pour plus d'info
            </div>
          </div>
        ) : null}

        <div
          className={`w-full h-full flex flex-col justify-center items-center text-xs md:text-base text-center	bg-black	bg-opacity-70 transition duration-300 ease-in-out ${
            isSummary ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          {project.summary}

          {project.link ? (
            <button
              className='text-sm md:text-base border-2 border-white mt-4 md:mt-8 p-2 transition duration-300 ease-in-out hover:bg-white hover:text-black '
              // onClick={() => window.open(project.link, '_blank')}
              onClick={() => window.open(`http://${project.link}`, '_blank')}
            >
              DECOUVRIR LE PROJET
            </button>
          ) : null}
        </div>
      </div>
      <div className='text-green-600 justify-center font-bold	flex flex-wrap mt-2 md:mt-8'>
        {project.stack.map((techno, index) => (
          <span
            key={index}
            className='text-base md:text-lg mr-2'
          >{`${techno.toUpperCase()} ${
            index !== project.stack.length - 1 ? ' - ' : ''
          }`}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTile;
