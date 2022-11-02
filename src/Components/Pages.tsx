import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
import { Blog } from './Pages/Blog';
import { Service } from './Pages/Service';
import { ServiceDetails } from './Pages/ServiceDetails';
import { Error } from './Pages/Error';

const Container = styled.div
`
`;

export const Pages = () => {
    return (
        <Container>
                <Routes>
                    <Route path='/'>                
                    <Route index element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/about' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/service' element={<Service/>}/>
                    <Route path='/service/:id' element={<ServiceDetails/>}/>
                    <Route path='*' element={<Error/>}/>
                    </Route>
                </Routes>
        </Container>
    )
}
