
import { projects } from '@/data/projects';
import { ProjestCard } from './ProjestCard';

export default function AllProject() {
  return (
    <>
    <section className='section-continar py-20'>
      <div className='wrapper'>
        <h2 className='text-3xl text-center font-bold mb-8'>All Project</h2>

         {/* More content here */}
          <div className="d-grid gap-6 shadow-2xl">
            {projects.map((project, index) => (
              <ProjestCard key={index} {...project} />
            ))}
          </div>
        
      </div>
    </section>
      
    </>
  )
}
