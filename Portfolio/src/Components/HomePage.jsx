
import Sidebar from './Sidebar';
import Cards from './Cards';
export default function HomePage() {
  return (
      <section className='relative'>
          <section className='fixed'>
          <Sidebar />
         </section>
          <section className='ml-60'>
              <Cards/>
          </section>
    </section>
  )
}
