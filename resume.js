const resume = {
  about: {
    name: 'Deepika Sharma',
    title: 'Web Developer'
  },
  experience: [{
    id: 1,
    role: 'Computer Teacher',
    company: ['Shri Mahavir Jain Model Sr. Sec. School'],
    summary: 'I teached computer to classes 1st to 8th.'
  }, {
    id: 2,
    role: 'Assembler-1',
    company: 'Terumo Cardiovascular Systems',
    // eslint-disable-next-line max-len
    summary: 'In all actions, demonstrates a primary commitment to patient safety and product quality by maintaining compliance to the Quality Policy and all other documented quality processes and procedures. Perform other duties as assigned.'
  }],
  education: [{
    id: 1,
    degree: 'Certificate',
    fieldOfStudy: 'Web Development',
    institution: 'Framingham State University'
  }, {
    id: 2,
    degree: 'Master of Computer',
    fieldOfStudy: 'Computer Science',
    institution: 'Guru Nanak Dev University'
  }, {
    id: 3,
    degree: 'Bachelor of Computer Application',
    fieldOfStudy: 'Computer Science',
    institution: 'Guru Nanak Dev University'
  }],
  skills: {
    natLanguages: ['English', 'Hindi', 'Punjabi'],
    scriptLanguages: ['JavaScript', 'HTML', 'CSS'],
    servers: ['MySQL'],
    frameworks: ['Node.js', 'Express.js'],
    tools: ['Git', 'VS Code']
  },
  interests: {
    hobbies: ['Music', 'Traveling']
  },
  contact: {
    number: '774-288-0431',
    email: 'deepika69420@yahoo.com',
    social: ['https://github.com/Deepika-92', 'https://www.linkedin.com/in/deepika-sharma-879023200/']
  }
}

module.exports = resume
