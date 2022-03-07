import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    // {
    //     title:'BaseInfo',
    //     path:'/baseinfo',
    //     icon:<AiIcons.AiFillHome/>,
    //     iconClosed:<RiIcons.RiArrowDownFill />,
    //     iconOpened:<RiIcons.RiArrowUpSFill />,
    //     subNav:[
    //         {
    //             title:'Employee',
    //             path:'/baseinfo/employee',
    //             icon:<IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title:'Department',
    //             path:'/baseinfo/department',
    //             icon:<IoIcons.IoIosPaper />,
    //         },
    //     ]
    // },
    {
        title:'Ticket',
         path:'/ticket',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'Create Ticket',
                path:'/ticket/ticket',
                icon:<IoIcons.IoIosPaper />,
            }
        ]
    },
    // {
    //     title:'Reports',
    //     path:'/reports',
    //     icon:<AiIcons.AiFillHome/>,
    //     iconClosed:<RiIcons.RiArrowDownFill />,
    //     iconOpened:<RiIcons.RiArrowUpSFill />,
    //     subNav:[
    //         {
    //             title:'Reports',
    //             path:'/reports/reports1',
    //             icon:<IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title:'Reports 2',
    //             path:'/reports/reports2',
    //             icon:<IoIcons.IoIosPaper />,
    //         },
    //         {
    //             title:'Reports 3',
    //             path:'/reports/reports3',
    //             icon:<IoIcons.IoIosPaper />,
    //         },
    //     ]
    // },

]