// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'balalofernandez',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,// Display GitHub projects?
      header: 'Highlighted Projects',
      mode: 'manual',// Mode can be: 'automatic' or 'manual'
      manual: {
        projects: [
          'balalofernandez/RTDETRv2-pt',
          'balalofernandez/CoverLetterRAG',
          'balalofernandez/COMP0087',
          'balalofernandez/FirstByte-LLM-Proxy',
          'nari-labs/dia-streaming',
        ],
      },
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
    external: {
      header: 'Open Source Contributions',
      projects: [
        {
          title: 'Orpheus-TTS',
          description: 'Open source TTS model by CanopyAI',
          imageUrl: 'https://avatars.githubusercontent.com/u/157303550?s=40&v=4',
          link: 'https://github.com/canopyai/Orpheus-TTS',
        },
        {
          title: 'Pipecat',
          description: 'Open source LLM inference server',
          imageUrl: 'https://avatars.githubusercontent.com/u/169612734?s=40&v=4',
          link: 'https://github.com/pipecat-ai/pipecat',
        },
        {
          title: 'Dia-TTS',
          description: 'Streaming TTS engine by Nari Labs',
          imageUrl: 'https://avatars.githubusercontent.com/u/208232306?s=48&v=4',
          link: 'https://github.com/nari-labs/dia/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alvaro Fernandez',
    description: 'Full-Stack AI Engineer | Python, React, Kubernetes | AI Systems',
    imageURL: '',
  },
  social: {
    linkedin: 'alvarofmoreno',
    x: 'balalofernandez',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'balalo.fernandez',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  // resume: {
  //   fileUrl: '', // Add your real CV file URL here if available
  // },
  skills: [
    'Python',
    'FastAPI',
    'PyTorch',
    'Kubernetes',
    'TensorRT',
    'Terraform',
    'Docker',
    'PostgreSQL',
    'React',
    'Microservice',
    'Amazon Web Services',
    'Computer Vision',
    'Node.js',
    'Golang',
    'Rust',
    'C++',
    'C#',
    'Azure',
    'gRPC',
    'SQL',
    'Hugging Face Transformers',
    'ONNX',
    'vLLM',
    'ML Flow',
    'Jenkins',
    'Jira',
    'Angular',
    'TypeScript',
    'Ionic',
  ],
  experiences: [
    {
      company: 'Phonema AI',
      position: 'Founding Engineer',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://phonema.ai',
    },
    {
      company: 'Medtronic Digital Surgery',
      position: 'Machine Learning Engineer',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: '',
    },
    {
      company: 'Serfiex S.A.',
      position: 'Software Engineer',
      from: 'June 2021',
      to: 'September 2023',
      companyLink: '',
    }
  ],
  certifications: [],
  educations: [
    {
      institution: 'University College London',
      degree: 'Master of Science (MSc), Machine Learning',
      from: '',
      to: '',
    },
    {
      institution: 'Universidad Rey Juan Carlos',
      degree: 'Bachelor of Science (BS), Computer Engineering',
      from: '',
      to: '',
    },
    {
      institution: 'Universidad Rey Juan Carlos',
      degree: 'Bachelor of Arts (BA), Mathematics',
      from: '',
      to: '',
    },
  ],
  publications: [],
  blog: {
    source: 'medium',
    username: 'balalo.fernandez',
    limit: 2,
  },
  googleAnalytics: {
    id: 'G-BFLWG18FF4', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
