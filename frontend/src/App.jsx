import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from '../src/components/layout/Footer'
import AppRoutes from '../src/routes/AppRoutes'
import './App.css'
import { fetchApi } from './features/recipes/recipeSlice'
import { useDispatch } from 'react-redux'


function App() {
 
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);


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
