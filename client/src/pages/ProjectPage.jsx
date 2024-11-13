import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CommentSection from '../components/CommentSection';

import Title from '../components/Title';
import Newsletter from '../components/Newsletter';
import ProjectCard from '../components/ProjectCard';

export default function ProjectPage() {

  const { projectSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [recentProject, setRecentProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/project/getproject?slug=${projectSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setProject(data.project[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectSlug]);

  // recent articles functionality
  useEffect(() => {
    try {
      const fetchrecentProject = async () => {
        const res = await fetch(`/api/project/getproject?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentProject(data.project);
        }
      };
      fetchrecentProject();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)

    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
    return (
      <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
  <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          {project && project.title}
        </h1>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px] ' src={project && project.image} alt="project && project.title" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4'>
       <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
         <span>{project && new Date(project.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {project && (project.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: project && project.content }}
      ></div>
        </div>
      </div>

     

      <div className='p-3 bg-slate-200 dark:bg-gray-800'>
      <Newsletter/>
      </div>
      {/* recent articles section */}
      <div className='flex flex-col justify-center items-center mb-5'>
      <div className='text-2xl text-center pt-8 '>
        <Title text1={"RECENT"} text2={' PROJECTS'}/>
      </div>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentProject &&
            recentProject.map((project) => <ProjectCard key={project._id} project={project} />)}
        </div>
      </div>
    </main>
    );
}




