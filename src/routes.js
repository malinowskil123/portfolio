import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CodeEditor from './components/CodeEditor/CodeEditor'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Project from './components/Project/Project'

export default (
  <Switch>
    <Route exact path='/' component={CodeEditor} />
    <Route path='/about' component={About} />
    <Route path='/skills' component={Skills} />
    <Route path='/work' component={Work} />
    <Route path='/project/:index' component={Project} />
  </Switch>
)