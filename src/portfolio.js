const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://eavillacis.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Esteban Villacis',
  role: 'Fullstack Software Engineer',
  description: `I am a Consultant Developer with 7+ years of experience building web solutions, APIs, software
    architectures and infrastructure following best practices and agile principles.
    I consider myself a technology geek, always willing to learn new technologies and good development
    practices.`,
  resume: 'https://www.linkedin.com/in/eavillacis/',
  social: {
    linkedin: 'https://www.linkedin.com/in/eavillacis/',
    github: 'https://github.com/eavillacis',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Clubmiles',
    description:
      'Loyalty ecosystem backend and microservices',
    stack: ['Golang', 'K8S', 'React'],
    livePreview: 'https://www.clubmiles.com.ec',
  },
  {
    name: 'Pichincha Miles',
    description: 'Loyalty ecosystem and frontend',
    stack: ['Golang', 'K8S', 'React', 'AWS'],
    livePreview: 'https://www.pichinchamiles.com',
  },
  {
    name: 'Kriptos',
    description: 'Backend cloud services',
    stack: ['Golang', 'Serverless'],
    livePreview: 'https://www.kriptos.io',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Golang',
  'Cloud',
  'Serverless',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'CI/CD',
  'Testing',
  'QA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'esteban.andres.villacis@gmail.com',
}

export { header, about, projects, skills, contact }
