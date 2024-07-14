import '../styles/globals.css';
import HomePage from './HomePage';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill } from '@/typing';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Header from './Header';
import { fetchSocials } from '@/utils/fetchSocials';
import ExperiencePage from './ExperiencePage';
import { fetchExps } from '@/utils/fetchExperience';
import RecentActivity from '@/components/RecentActivity';

export const revalidate = 10;

export default async function  Home() {
  const pageInfo = await fetchPageInfo();
  const socialLinks= await fetchSocials();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const exps = await fetchExps();

  return (
    <div className='overflow-x-hidden overflow-y-scroll h-screen z-20 snap-y snap-mandatory scrollbar-hide sm:scrollbar sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-[#F7AB0A]/80'>
      <Header socialLinks={socialLinks} />
      <section id='hero' className='snap-start'>
        <HomePage pageInfo={pageInfo}/>
      </section>
      <section id='recent' className='snap-center'>
        <RecentActivity />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='exp' className='snap-center'>
        <ExperiencePage exps={exps} />
      </section>
      <section id='project' className='snap-center'>
        <Projects projects={projects} />
      </section>
      <section id='skill' className='snap-center'>
        <Skills skills={skills} />
      </section>
      <section id='contact' className='snap-center'>
        <Contact socialLinks={socialLinks} />
      </section>
    </div>
  )
}