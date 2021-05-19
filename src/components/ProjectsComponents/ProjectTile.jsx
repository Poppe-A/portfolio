import { useState } from 'react';
import './ProjectTile.css';
const ProjectTile = ({ project }) => {
  const [isSummary, setIsSummary] = useState(false);

  // const content = isSummary ? (
  //   <div className='content'>{project.summary}</div>
  // ) : (
  //   <img className='content' src={project.img} alt={project.img} />
  // );

  return (
    <div
      className='ProjectTile flex flex-col items-center justify-between p-4 md:p-8 mr-8 text-white h-full'
      onMouseEnter={() => {
        setIsSummary(true);
      }}
      onMouseLeave={() => {
        setIsSummary(false);
      }}
    >
      <h3 className='text-base md:text-2xl mb-2 md:mb-8'>{project.title}</h3>
      <div
        className='content h-1/4 md:h-1/2'
        style={{
          backgroundImage: `url(${project.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
        }}
      >
        <div
          className={`w-full h-full flex flex-col justify-center items-center text-xs md:text-base text-center	bg-black	bg-opacity-70 transition duration-300 ease-in-out ${
            isSummary ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          {project.summary}
          <button className='text-sm md:text-base border-2 border-white mt-4 md:mt-8 p-1 md:p-2 transition duration-300 ease-in-out hover:bg-white hover:text-black '>
            DECOUVRIR LE PROJET
          </button>
        </div>
      </div>
      <div className='flex flex-wrap mt-2 md:mt-8'>
        {project.stack.map((techno, index) => (
          <span
            key={index}
            className='text-xs md:text-base mr-2'
          >{`${techno.toUpperCase()} ${
            index !== project.stack.length - 1 ? ' - ' : ''
          }`}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTile;
