import React from 'react'
import { Tab } from 'semantic-ui-react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const panes = [
  { menuItem: 'Demo Color', render: () => <Tab.Pane attached={false}><Tab1 /></Tab.Pane> },
  { menuItem: 'Change Color', render: () => <Tab.Pane attached={false}><Tab2 /></Tab.Pane> },
]

const NavTab = () => <Tab menu={{ secondary: true, pointing: true }} panes={panes} className='NavTab'/>

export default NavTab