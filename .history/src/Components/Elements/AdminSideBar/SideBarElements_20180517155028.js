import React from 'react'
import Person from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'
import FormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import PlayListAdd from 'material-ui/svg-icons/av/playlist-add'


const sideBarElements = [
    {
        to: '/personalData',
        leftIcon: <Person />,
    },
    {
        to: '/problemList',
        leftIcon: <FormatListBulleted />,
    },
    {
        to: '/roomList',
        leftIcon: <FormatListBulleted />,
    },
    {
        to: '/createProblem',
        leftIcon: <PlayListAdd />,
    },
    {
        to: 'createRoom',
        leftIcon: <PlayListAdd />,
    },
    {
        to: 'about',
        leftIcon: <Info />,
    },
]

export default sideBarElements
