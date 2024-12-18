import { combineReducers } from 'redux';
import education from './components/education';
import educationtime from './components/educationtime';
import expe from './components/expe';
import expetime from './components/expetime';
import achievements from './components/achievements';
import projects from './components/projects';
import skills from './components/skills';
import tskills from './components/tskills';
import rest from './components/rest';

const rootReducer = combineReducers({
  education,
  educationtime,
  expe,
  expetime,
  achievements,
  projects,
  skills,
  tskills,
  rest
});

export default rootReducer;