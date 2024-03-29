import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'
import SinglePok from '../pages/SinglePok'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/pokemon/:id' element={<SinglePok />} />
        </Routes>
    )
}

export default MainRoutes