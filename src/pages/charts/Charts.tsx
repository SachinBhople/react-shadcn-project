import BarCharts from './BarCharts'
import PieCharts from './PieCharts'
import AreaCharts from './AreaCharts'
import { Linecharts } from './LineCharts'

const Charts = () => {
    return <>
        <div className='ms-10'>
            <div className='flex my-2 gap-10 lg:ms-80 md:ms-80 sm:mx-28 mx-10'>
                <div>
                    <BarCharts />
                </div>
                <div>
                    <PieCharts />
                </div>
            </div>
            <div className='flex my-2 gap-10 lg:ms-80 md:ms-80 sm:mx-28 mx-10'>
                <div>
                    <AreaCharts />
                </div>
                <div>
                    <Linecharts />
                </div>
            </div>

        </div >
    </>

}

export default Charts


// import React from 'react'
// import BarCharts from './BarCharts'
// import PieCharts from './PieCharts'
// import AreaCharts from './AreaCharts'
// import { Linecharts } from './LineCharts'

// const Charts = () => {
//     return (
//         <>
//             <div className='ms-10'>
//                 <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-2 mx-10'>
//                     {/* BarCharts */}
//                     <div>
//                         <BarCharts />
//                     </div>
//                     {/* PieCharts */}
//                     <div>
//                         <PieCharts />
//                     </div>
//                 </div>
//                 <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-2 mx-10'>
//                     {/* AreaCharts */}
//                     <div>
//                         <AreaCharts />
//                     </div>
//                     {/* Linecharts */}
//                     <div>
//                         <Linecharts />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Charts;
