import React from 'react'
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon

} from 'lucide-react'


const navlinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Activity",
        icon: Clock3,
    },
    {
        name: "Analytics",
        icon: BarChart2,
    },
    {
        name: "Transaction",
        icon: ArrowRightLeft,
    },
    {
        name: "Help center",
        icon: HelpCircleIcon,
    },
]

const Navbar = () => {
    return (
        <>
            <h1 className='font-bold flex'><span className='text-orange-300 font-bold'>M</span>oney tracker</h1>
            <div className=''>
                {navlinks.map((props, index) => (<div className='m-5 cursor-pointer flex flex-row ' key={index}>
                    <props.icon/>
                    <span className='ms-3'>{props.name}</span>
                </div>))}
            </div>

        </>
    )
}

export default Navbar