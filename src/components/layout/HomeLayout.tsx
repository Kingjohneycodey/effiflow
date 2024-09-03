import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function HomeLayout() {
  return (
      <div className="">
        <Header />
 
        <main className="!mt-20 absolute">
          <Outlet />
          <Footer />
        </main>

        
      </div>
  )
}