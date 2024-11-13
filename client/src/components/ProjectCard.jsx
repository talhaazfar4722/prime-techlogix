import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ProjectCard({ project }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.user);

  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
       <Link to={currentUser ? `/project/${project.slug}` : '/sign-in'}  
                onClick={() => {
                if (!currentUser) {
                  alert('Please sign in to view project.');
                }
              }}> 
        <img
          src={project.image}
          alt='project cover'
          className='h-[200px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{project.title}</p>
        

        <Link to={currentUser ? `/project/${project.slug}` : '/sign-in'}
         onClick={() => {
          if (!currentUser) {
            alert('Please sign in to view project.');
          }
        }}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          View Project 
        </Link>
      </div>
    </div>
  );
}