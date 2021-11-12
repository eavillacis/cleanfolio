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
      'Loyalty ecosystem for well known Ecuadorian credit card company',
    stack: ['Golang', 'K8S', 'React'],
    livePreview: 'https://www.clubmiles.com',
  },
  {
    name: 'Virtual Comics App (POC)',
    description: 'Ecommerce catalog serverless POC',
    stack: ['SASS', 'React', 'AWS'],
    sourceCode: 'https://github.com/eavillacis/virtual-comics-app',
  },
  {
    name: 'Marvy Real State',
    description: 'Real state POC',
    stack: ['SASS', 'TypeScript', 'React'],
    livePreview: 'https://marvy.tech',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Golang',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'QA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'esteban.andres.villacis@gmail.com',
}

export { header, about, projects, skills, contact }
