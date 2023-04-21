import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../styles/globals.css';
import HomePage from './HomePage';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill } from '@/typing';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experiences from './Experiences';
import Contact from './Contact';
import Header from './Header';
import { fetchSocials } from '@/utils/fetchSocials';

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 10;

export default async function  Home() {
  const pageInfo = await fetchPageInfo();
  const socialLinks= await fetchSocials();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  // const exps = await fetchExperiences();
  return (
    <div className='overflow-x-hidden overflow-y-scroll h-screen z-20 snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header socialLinks={socialLinks} />
      <section id='hero' className='snap-start'>
        <HomePage pageInfo={pageInfo}/>
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
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

