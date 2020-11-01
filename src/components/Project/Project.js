import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Title from '../Title/Title'
import Table from '../Table/Table'
import Text from '../Text/Text'
import animationCallback, { style } from '../../utils/animationCallback'
import './Project.scss'

export default function Project({ match }) {
  const projectRef = useRef()

  const projectTitle = match.params.project

  const [project, setProject] = useState({})

  const getProject = async (index) => {
    try {
      const { data } = await axios.get(`/project/${index}`)
      setProject(data)
    } catch (error) {
      console.error('error fetching project: ' + error)
    }
  }

  useEffect(() => {
    getProject(projectTitle)
    animationCallback(projectRef)
  }, [projectTitle])

  const { stack, image, github, link, title, text } = project

  return (
    <div ref={projectRef} className={`Project ${style}`}>
      <Title>{title}</Title>
      <Table stack={stack} link={link} github={github} />
      <Row className='align-items-center mt-2'>
        <Col lg={6} className='text-center'>
          <Image src={image} fluid />
        </Col>
        <Col lg={6} className='mt-4 mt-lg-0 px-lg-5'>
          <Text>{text}</Text>
          <Link to='/work' className='mt-4'>
            <Button variant='outline-secondary' block>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
