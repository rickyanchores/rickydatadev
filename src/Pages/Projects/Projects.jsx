import React from 'react'
import Card from '../../Components/Card/Card'

const Projects = (card) => {
  return (
    <div className='Projects'>
      <h3>Portfolio</h3>
      <div className="container">
        <Card name="Card 1" text="Hello"/>
        <Card name="Card 2" text="Hi"/>
        <Card name="Card 3" text="Bye"/>
      </div>
    </div>
  )
}

export default Projects;