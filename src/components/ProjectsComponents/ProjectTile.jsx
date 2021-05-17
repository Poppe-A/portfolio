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
      className='ProjectTile flex flex-col items-center justify-between p-8 mr-8 text-white h-full'
      onMouseEnter={() => {
        setIsSummary(true);
      }}
      onMouseLeave={() => {
        setIsSummary(false);
      }}
    >
      <h3 className='text-2xl mb-8'>{project.title}</h3>
      <div
        className='content h-1/2'
        style={{
          backgroundImage: `url(${project.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
        }}
      >
        <div
          className={`w-full h-full flex justify-center items-center text-center	bg-black	bg-opacity-70 ${
            isSummary ? 'opacity-100' : 'opacity-0'
          } transition-opacity`}
        >
          {project.summary}
        </div>
      </div>
      <div className='flex mt-8'>
        {project.stack.map((techno, index) => (
          <span key={index} className='mr-2'>{`${techno.toUpperCase()} ${
            index !== project.stack.length - 1 ? ' - ' : ''
          }`}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTile;
