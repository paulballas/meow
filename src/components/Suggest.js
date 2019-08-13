import React from 'react';
import { Link } from 'react-router-dom'
import Space from './Space';

import IconPana from '../images/icons/icon-pana.svg'
import IconMedstar from '../images/icons/icon-medstar.svg'
import IconUsac from '../images/icons/icon-usac.svg'
import IconOdc from '../images/icons/icon-odc.svg'
import IconClass from '../images/icons/icon-class.svg'
import IconDg from '../images/icons/icon-dg.svg'
import IconIll from '../images/icons/icon-illustrations.svg'

const projects = [
  {
    "id": 1,
    "link": "/pana",
    "name": "Pana",
    "img": IconPana
  },
  {
    "id": 2,
    "link": "/medstar",
    "name": "Medstar",
    "img": IconMedstar
  },
  {
    "id": 3,
    "link": "/usac",
    "name": "USA Cycling",
    "img": IconUsac
  },
  {
    "id": 4,
    "link": "/odc",
    "name": "ODC",
    "img": IconOdc
  },
  {
    "id": 5,
    "link": "/class-scout",
    "name": "ClassScout",
    "img": IconClass
  },
  {
    "id": 6,
    "link": "/dangray",
    "name": "Dan Gray Drywall",
    "img": IconDg
  },
  {
    "id": 7,
    "link": "/illustrations",
    "name": "Illustrations",
    "img": IconIll
  }
]

class Suggest extends React.Component {

  renderProjects = () => {
    const filteredProjects = projects.filter(proj => proj.id !== this.props.current);
    return (
      filteredProjects.map((project) => {
        return (
          <div key={project.id} className='col-md-2 col-xs-6'>
            <Link to={project.link} className='suggestion'>
              <img src={project.img} />
              <p>{project.name}</p>
            </Link>
          </div>
        )
      })
    )
  }

  render() {
    return (

      <div className='row center-xs'>
        <div className='col-xs-12'>
          <p>Check out some of my other projects...</p>
          <Space h='1' />
        </div>
        {this.renderProjects()}
      </div>

    )
  }
}

export default Suggest;
