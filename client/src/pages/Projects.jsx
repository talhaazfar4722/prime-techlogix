import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter';
import { Button } from 'flowbite-react';

import ProjectCard from '../components/ProjectCard';

export default function Projects() {

  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  // getting projects
  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const res = await fetch(`/api/project/getproject`);
      if (!res.ok) {
        setLoading(false);
        return;
      }

      if (res.ok) {
      const data = await res.json();
      setProject(data.project);
      setLoading(false);
    }
    };
    fetchProject();
  }, []);

  return (
  
    <div className='min-h-screen '>

      <div className='w-full'>
        <h1 className='text-3xl  font-semibold sm:border-b border-teal-500 p-3 mt-5 '>
          Projects results:
        </h1>
      <div className=' p-7 flex flex-wrap gap-12'>
          {!loading && project.length === 0 && (
            <p className='text-xl text-gray-500'>No projects found.</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            project &&
            project.map((project) => <ProjectCard key={project._id} project={project} />)}
        </div>


        <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>

      
    </div>
    </div>
  );
}