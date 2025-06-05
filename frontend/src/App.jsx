import { useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import AppRoutes from '../src/routes/AppRoutes'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AppRoutes/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
