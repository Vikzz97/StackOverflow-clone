import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './components/Pages/Home/Home'
import Auth from './components/Pages/Auth/Auth'
import Questions from './components/Pages/Questions/Questions'
import AskQuestion from './components/Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/Pages/Questions/DisplayQuestion'

const AllRoutes = () => {
    return (
        
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/Auth' element={<Auth />}/>
                <Route exact path='/Questions' element={<Questions />} />
                <Route exact path='/AskQuestion' element={<AskQuestion />} />
                <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
            </Routes>
        
  )
}

export default AllRoutes
