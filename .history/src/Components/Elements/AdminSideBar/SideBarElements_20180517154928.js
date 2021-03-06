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
        to: 'problemList': <FormatListBulleted />,
    },
    {
        'roomList': <FormatListBulleted />,
    },
    {
        'createProblem': <PlayListAdd />,
    },
    {
        'createRoom': <PlayListAdd />,
    },
    {
        'about': <Info />,
    },
]

export default sideBarElements
