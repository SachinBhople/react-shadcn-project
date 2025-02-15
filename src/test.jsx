import React from 'react'

const test = () => {
    return <>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default test