import { DEVGIT } from '@/constants'

export interface ProjectMilestone {
    title: string
    description?: string
}

export interface ProjectBlog {
    whatIsIt: string
    whyCreated: string
    howCreated: string
    usage: string
    milestones: ProjectMilestone[]
    additionalNotes?: string
}

export interface ProjectScreenshot {
    src: string
    alt: string
    caption?: string
}

export interface Project {
    id: string
    title: string
    description: string
    group: ProjectGroupId
    technologies: string[]
    repository?: string
    liveLink?: string
    icon?: string
    banner?: string
    screenshots?: ProjectScreenshot[]
    blog: ProjectBlog
}

export type ProjectGroupId = 'web' | 'python' | 'local' | 'language' | 'other'

export interface ProjectGroup {
    id: ProjectGroupId
    title: string
    projects: Project[]
}

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Ansari Codes Portfolio',
        description: 'A personal developer portfolio showcasing software projects and technical experiments.',
        group: 'web',
        technologies: ['Vue'],
        repository: `${DEVGIT}/Ansari-Codes.github.io`,
        liveLink: 'https://ansari-codes.github.io',
        screenshots: [{ src: new URL('../assets/projects/portfolio-screenshot.png', import.meta.url).href, alt: 'Portfolio homepage screenshot' }],
        blog: {
            whatIsIt: 'A personal website introducing me, showcasing my software projects, documenting my development journey, and demonstrating my skills.',
            whyCreated: 'To showcase my projects publicly, have my own place on the web, experiment with web development, and create a portfolio for job or internship opportunities.',
            howCreated: 'The portfolio is built as a Vue application. Its pages and reusable components present the personal profile and project work, with the site published through GitHub Pages.',
            usage: 'Browse the sections from the home page to learn about my background and skills. Open the Projects page to search the project archive, read project write-ups, and follow source-code or live-demo links.',
            milestones: [
                { title: 'Initial portfolio creation' },
                { title: 'Major redesigns / UI improvements' },
                { title: 'Deployment / hosting' },
                { title: 'Adding projects over time' },
                { title: 'Responsive design for mobile' },
            ],
            
        },
    },
    {
        id: 'manimscript',
        title: 'ManimScript',
        description: 'A declarative scripting language for creating Manim animations.',
        group: 'language',
        technologies: ['Python', 'Manim', 'Transpilers', 'Domain-Specific Languages'],
        repository: `${DEVGIT}/manimscript`,
        icon: new URL('../assets/projects/mnmscript.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/manimscript-screenshot.png', import.meta.url).href, alt: 'ManimScript project screenshot' }],
        blog: {
            whatIsIt: 'ManimScript is a declarative language for describing animation objects, scenes, and timelines. It translates these descriptions into Python code for Manim, aiming to make animation scripting more readable and structured.',
            whyCreated: 'I created ManimScript to explore a different way of expressing Manim animations through a custom, declarative syntax and to experiment with language design and transpilation.',
            howCreated: 'The project defines a custom, declarative syntax and translates its animation descriptions into Python code that can be used with Manim. Python and Manim form the implementation and rendering foundation.',
            usage: 'Install the project and Manim as described in the repository README, write an animation using ManimScript’s syntax, then use the project’s transpilation workflow to produce Python code for rendering with Manim.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'hskplus',
        title: 'HSK Plus',
        description: 'An interactive Mandarin Chinese learning platform for structured language progression.',
        group: 'web',
        technologies: ['TypeScript', 'Vue'],
        repository: `${DEVGIT}/hskplus`,
        liveLink: 'https://desihop.net/hskplus',
        icon: new URL('../assets/projects/hskplus.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/hskplus-screenshot.png', import.meta.url).href, alt: 'HSK Plus application screenshot' }],
        blog: {
            whatIsIt: 'HSK Plus is a Mandarin Chinese learning platform focused on structured study and progression. It brings learning activities and study resources together in an interactive web experience.',
            whyCreated: 'I created HSK Plus to build a structured environment for learning Mandarin and to explore how a web application can support language-study workflows.',
            howCreated: 'HSK Plus is built with Vue and TypeScript as an interactive web application. The interface organizes Mandarin study material around a structured progression.',
            usage: 'Open the HSK Plus website, choose the available study material or learning activity, and work through it at your own pace. Refer to the live application for the current set of learning features.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'fincalc',
        title: 'FinCalc',
        description: 'A collection of interactive financial calculators for accessible financial calculations.',
        group: 'web',
        technologies: ['Vue'],
        repository: `${DEVGIT}/fincalc`,
        icon: new URL('../assets/projects/fincalc.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/fincalc-screenshot.png', import.meta.url).href, alt: 'FinCalc application screenshot' }],
        blog: {
            whatIsIt: 'FinCalc is a collection of financial calculators presented through a web interface. The goal is to make common financial calculations easier to access and use.',
            whyCreated: 'I created FinCalc as a practical web-development project and to bring useful financial calculations into one place.',
            howCreated: 'FinCalc is implemented as a Vue web application. Its calculator-focused interface brings financial calculations together in one place.',
            usage: 'Open the project and select the calculation you need. Enter the requested values and use the displayed result as an estimate; check the inputs and assumptions before making financial decisions.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'pysb3',
        title: 'PySb3',
        description: 'A zero-dependency Python library for developing Scratch games through Pythonic representations.',
        group: 'python',
        technologies: ['Python', 'Scratch 3', 'SB3', 'HTML'],
        repository: `${DEVGIT}/pysb3`,
        screenshots: [
            {src: new URL('../assets/projects/pysb3-screenshot.png', import.meta.url).href, alt: 'pysb3 code example'}
        ],
        blog: {
            whatIsIt: 'PySb3 is a Python library for building Scratch 3 projects using Python-friendly abstractions. It explores representing Scratch projects and game logic through code, with an emphasis on keeping the library lightweight.',
            whyCreated: 'I created PySb3 to experiment with a Python-based approach to Scratch game creation and to explore how code can generate Scratch project structures.',
            howCreated: 'PySb3 uses Python abstractions to represent Scratch 3 projects and game logic, then works with the SB3 project format. The library is designed to avoid runtime dependencies.',
            usage: 'Install or include the library according to its README, describe the Scratch project using PySb3’s Python API, and generate the project structure. Open the resulting project in Scratch to inspect or continue editing it.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'social-app',
        title: 'DotMuted',
        description: 'A social platform bringing conversations together with experimental social features.',
        group: 'web',
        technologies: ['Vue', 'Python', 'Markdown'],
        repository: `${DEVGIT}/social-app`,
        liveLink: 'https://ansari-codes.github.io/social-app',
        icon: new URL('../assets/projects/dotmuted.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/dotmuted-screenshot.png', import.meta.url).href, alt: 'Social App screenshot' }],
        blog: {
            whatIsIt: 'Social App is an experimental social platform that combines ideas from familiar social networks with its own features. It explores posts, conversations, and different ways people might interact in a community.',
            whyCreated: 'I created Social App to experiment with social-platform ideas and web development beyond building a conventional social-media clone.',
            howCreated: 'The application is built with Vue and uses Markdown as part of its writing experience. Its interface explores social posting and conversation features in a web application.',
            usage: 'Visit the live Social App to explore the available posts and social features. When creating a post, use Markdown formatting where supported; the repository contains the latest setup and feature details.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'ablop-lang',
        title: 'Ablop Lang',
        description: 'An experimental programming language exploring custom syntax and language design.',
        group: 'language',
        technologies: ['Python', 'Programming Language Design'],
        repository: `${DEVGIT}/ablop-lang`,
        icon: new URL('../assets/projects/abloplang.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/abloplang-screenshot.png', import.meta.url).href, alt: 'Ablop lang example code' }],
        blog: {
            whatIsIt: 'Ablop Lang is an experimental programming language project written in Python. It explores creating custom syntax and implementing the basic pieces of a language.',
            whyCreated: 'I created Ablop Lang out of curiosity about programming-language design and to try building a language of my own.',
            howCreated: 'Ablop Lang is implemented in Python and explores the foundational pieces needed to define and process a custom programming-language syntax.',
            usage: 'Read the repository README and examples, then try a small program using Ablop Lang’s syntax with the project’s provided runner or interpreter.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'personal-workbook-lm',
        title: 'PAWM',
        description: 'A personal language-model workbook and BYOK platform designed to run locally on your PC.',
        group: 'local',
        technologies: ['Vue', 'FastAPI', 'Python', 'AI', 'LLM APIs', 'Local AI'],
        repository: `${DEVGIT}/personal-workbook-lm`,
        icon: new URL('../assets/projects/pawm.svg', import.meta.url).href,
        banner: new URL('../assets/projects/pawm-banner.jpg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/pawm-screenshot.jpg', import.meta.url).href, alt: 'Personal Workbook LM screenshot' }],
        blog: {
            whatIsIt: 'Personal Workbook LM is a personal workspace for interacting with language models and organizing AI-assisted work. It explores API-based and local AI workflows, including a bring-your-own-key approach.',
            whyCreated: 'I created Personal Workbook LM to experiment with a personal AI workspace and explore ways to use language models while keeping control over the tools and setup.',
            howCreated: 'Personal Workbook LM combines a Vue interface with a Python and FastAPI backend. It is designed to connect a personal workspace to language-model APIs or local AI workflows, including a bring-your-own-key setup.',
            usage: 'Follow the repository README to install and configure the application. Choose a supported API or local model setup, provide the required credentials or model configuration, then use the workbook interface to organize and work with AI-assisted content.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'turtle-game-engine',
        title: 'Turtle Game Engine',
        description: 'A Python game-development project built around turtle graphics.',
        group: 'python',
        technologies: ['Python', 'Turtle Graphics'],
        repository: `${DEVGIT}/turtle-game-engine`,       
        screenshots: [{ src: new URL('../assets/projects/tuge-screenshot.png', import.meta.url).href, alt: 'Turtle Game Engine\'s Code snippet' }],
        blog: {
            whatIsIt: "Turtle Game Engine is a Python project exploring game-development features and reusable abstractions with turtle graphics. It uses Python's turtle environment as a foundation for experimenting with game concepts.",
            whyCreated: 'I created Turtle Game Engine to explore game development in Python and experiment with building reusable functionality on top of turtle graphics.',
            howCreated: 'The engine is written in Python and builds on the standard turtle-graphics environment. Reusable game functionality is layered over that drawing and input foundation.',
            usage: 'Install or run the project as described in its README, then use the provided examples and engine functionality as a starting point for a Python turtle-graphics game.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'kutlync',
        title: 'KutLync',
        description: 'A Vue.js and FastAPI-powered URL shortener for creating shorter, shareable links.',
        group: 'web',
        technologies: ['Vue', 'TypeScript', 'Python', 'FastAPI'],
        repository: `${DEVGIT}/kutlync`,
        liveLink: 'https://ansari-codes.github.io/kutlync',
        icon: new URL('../assets/projects/kutlync.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/kutlync-screenshot.png', import.meta.url).href, alt: 'KutLync application screenshot' }],
        blog: {
            whatIsIt: 'KutLync is a URL-shortening application with a Vue frontend and FastAPI backend. It is designed to turn long links into shorter, easier-to-share URLs.',
            whyCreated: 'I created KutLync as a full-stack project to work with a frontend and API backend together while building a practical link-shortening tool.',
            howCreated: 'KutLync pairs a Vue and TypeScript frontend with a Python FastAPI backend. The frontend provides the link-shortening experience while the backend handles the application API.',
            usage: 'Open the live KutLync application, enter the long URL you want to share, and use the generated short link. Use the repository README for self-hosting and development setup.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'offline-assistant',
        title: 'QOD — Qwen on Desktop',
        description: 'A desktop application for running Qwen language models locally.',
        group: 'local',
        technologies: ['Python', 'NiceGUI', 'Qwen', 'Local AI'],
        repository: `${DEVGIT}/offline-assistant`,
        screenshots: [{ src: new URL('../assets/projects/qod-screenshot.png', import.meta.url).href, alt: 'Qwen on Desktop screenshot' }],
        blog: {
            whatIsIt: 'QOD is a desktop-style application for working with Qwen language models locally. It uses a Python and NiceGUI interface to explore a local AI experience.',
            whyCreated: 'I created QOD to experiment with running language models locally and building a graphical application around local AI tools.',
            howCreated: 'QOD is built with Python and NiceGUI, providing a graphical desktop-style interface around locally run Qwen models.',
            usage: 'Follow the repository README to install the application and set up a compatible local Qwen model. Launch QOD and use its interface to interact with the configured model on your machine.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'task-manager',
        title: 'Quick Task Manager',
        description: 'A professional-grade task manager that offers more than a basic to-do list without unnecessary complexity.',
        group: 'web',
        technologies: ['Vue', 'Fastify', 'JavaScript'],
        repository: `${DEVGIT}/task-manager-fastify-vue-js`,
        liveLink: 'https://qtm-deploy.onrender.com',
        icon: new URL('../assets/projects/qtm.svg', import.meta.url).href,
        banner: new URL('../assets/projects/qtm-banner.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/qtm-screenshot.png', import.meta.url).href, alt: 'Task Manager application screenshot' }],
        blog: {
            whatIsIt: 'Task Manager is a full-stack task-organizing application built with Vue and Fastify. It aims to offer more functionality than a minimal to-do list while keeping the experience straightforward.',
            whyCreated: 'I created Task Manager to build a practical full-stack application and explore how a Vue frontend can work with a Fastify backend.',
            howCreated: 'Task Manager uses Vue for its frontend and Fastify for its backend, connecting a browser-based task workflow to a server API.',
            usage: 'Open the live application to organize tasks with the available task-management features. For a local setup, follow the repository README to run the frontend and backend.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'custom-syntax-python',
        title: 'Custom Syntax for Python',
        description: 'An experimental syntactic-sugar project introducing alternative syntax for Python.',
        group: 'language',
        technologies: ['Python', 'Syntax Design'],
        repository: `${DEVGIT}/custom-syntax-for-python`,
        icon: new URL('../assets/projects/csplang.png', import.meta.url).href,
        banner: new URL('../assets/projects/csplang-banner.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/csplang-screenshot.png', import.meta.url).href, alt: 'Custom Syntax for Python screenshot' }],
        blog: {
            whatIsIt: 'Custom Syntax for Python is an experiment in alternative syntax and syntactic sugar for Python. It explores how Python code might be expressed through a different surface syntax.',
            whyCreated: 'I created this project to have fun exploring syntax design and experimenting with ways to make familiar Python expressions look different.',
            howCreated: 'The project is implemented in Python and explores an alternative surface syntax by processing custom expressions into a form Python can work with.',
            usage: 'Review the examples and setup instructions in the repository, write a small snippet using the custom syntax, and process it with the project’s provided tooling.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'games',
        title: 'Games',
        description: 'A collection of independently developed browser games built with HTML.',
        group: 'other',
        technologies: ['HTML', 'Web Development'],
        repository: `${DEVGIT}/games`,
        screenshots: [{ src: new URL('../assets/projects/games-screenshot.png', import.meta.url).href, alt: 'Browser games screenshot' }],
        blog: {
            whatIsIt: 'Games is a collection of browser-based game experiments made with HTML and web technologies. The repository brings together small games and interactive ideas.',
            whyCreated: 'I created these games to experiment with browser game development, try gameplay ideas, and practice making interactive projects for the web.',
            howCreated: 'The collection is made up of small browser-game experiments built with HTML and web technologies, allowing each idea to be explored as an interactive web experience.',
            usage: 'Open the live games project, choose one of the available games, and play in the browser. The repository contains the source and details for running the collection locally.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'funlang',
        title: 'Funlang',
        description: 'An experimental programming language built as an exploration of language design.',
        group: 'language',
        technologies: ['Python', 'Programming Language Design'],
        repository: `${DEVGIT}/funlang`,
        icon: new URL('../assets/projects/funlang.svg', import.meta.url).href,
        banner: new URL('../assets/projects/funlang-banner.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/funlang-screenshot.png', import.meta.url).href, alt: 'Funlang project screenshot' }],
        blog: {
            whatIsIt: 'Funlang is an experimental programming-language project written in Python. It explores language design by creating a custom language and implementing its behavior.',
            whyCreated: 'I created Funlang to experiment with programming-language concepts and enjoy the process of designing and implementing my own language.',
            howCreated: 'Funlang is implemented in Python and explores how a small custom language can define and execute its own syntax and behavior.',
            usage: 'Read the repository instructions and examples, write a small Funlang program, and run it using the project’s provided interpreter or command-line workflow.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'pjx',
        title: 'PJX',
        description: 'A Pythonic API for generating JavaScript code from Python.',
        group: 'language',
        technologies: ['Python', 'JavaScript', 'Code Generation'],
        repository: `${DEVGIT}/pjx`,
        icon: new URL('../assets/projects/pjx.svg', import.meta.url).href,
        banner: new URL('../assets/projects/pjx-banner.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/pjx-screenshot.png', import.meta.url).href, alt: 'PJX project screenshot' }],
        blog: {
            whatIsIt: 'PJX is a Python-based tool for generating JavaScript through a Pythonic API. It explores representing JavaScript code using Python constructs and generating code programmatically.',
            whyCreated: 'I created PJX to explore code generation and to experiment with creating JavaScript using a Python-oriented interface.',
            howCreated: 'PJX is written in Python and provides an API for expressing JavaScript constructs with Python code, then generating JavaScript output.',
            usage: 'Install PJX as described in its README, use its Python API to construct the JavaScript you need, and generate the resulting JavaScript code for your project.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'brightness-controller',
        title: 'Brightness Controller',
        description: 'A Python utility for controlling display brightness.',
        group: 'local',
        technologies: ['Python'],
        repository: `${DEVGIT}/Brightness-Controller`,
        icon: new URL('../assets/projects/brightness-controller-windows.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/brightness-controller-windows-screenshot.png', import.meta.url).href, alt: 'Brightness Controller running on Windows' }],
        blog: {
            whatIsIt: 'Brightness Controller is a Python utility for controlling screen brightness. It is a small software tool focused on making brightness adjustment more convenient.',
            whyCreated: 'I created Brightness Controller as a practical Python utility and to explore interacting with system functionality through code.',
            howCreated: 'Brightness Controller is a Python utility that connects a small user workflow to the system functionality required to adjust display brightness.',
            usage: 'Check the repository README for operating-system requirements and installation steps, then launch the utility and adjust brightness using its supported controls.',
            milestones: [
            ],
            
        },
    },
    {
        id: 'progressive-py',
        title: 'ProgressivePy',
        description: 'Elegant, customizable progress bars and spinners for Python terminal and Jupyter environments.',
        group: 'python',
        technologies: ['Python', 'Terminal', 'Jupyter Notebook'],
        repository: `${DEVGIT}/progressive_py`,
        icon: new URL('../assets/projects/progressive_py.png', import.meta.url).href,
        banner: new URL('../assets/projects/progressive_py-banner.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/progressive_py-screenshot.png', import.meta.url).href, alt: 'Progressive Py Styled Progressbar' }],
        blog: {
            whatIsIt: 'ProgressivePy is a Python library for displaying progress bars and spinners in terminal applications and Jupyter notebooks. It explores customizable progress indicators for Python workflows.',
            whyCreated: 'I created ProgressivePy to build reusable progress indicators and explore a small Python library that can make command-line and notebook output more informative.',
            howCreated: 'ProgressivePy is packaged as a Python library, with progress bars and spinners designed to work in terminal applications and Jupyter notebooks.',
            usage: 'Install the package using the instructions in its repository, import the progress indicator that suits your task, and use it around long-running work. Consult the README for available options and examples.',
            milestones: [
            ],
            
        },
    },
];

const groupDefinitions: Pick<ProjectGroup, 'id' | 'title'>[] = [
    { id: 'web', title: 'Vue.js web apps' },
    { id: 'python', title: 'Python projects' },
    { id: 'local', title: 'Local-first projects' },
    { id: 'language', title: 'Compilers, languages & transpilers' },
    { id: 'other', title: 'Other projects' },
]

function projectCompleteness(project: Project): number {
    const textLength = [
        project.blog.whatIsIt,
        project.blog.whyCreated,
        project.blog.howCreated,
        project.blog.usage,
        project.blog.additionalNotes ?? '',
        ...project.blog.milestones.map((milestone) => `${milestone.title} ${milestone.description ?? ''}`),
    ].join(' ').length

    return textLength
        + project.technologies.length * 20
        + project.blog.milestones.length * 35
        + (project.icon ? 100 : 0)
        + (project.banner ? 150 : 0)
        + (project.screenshots?.length ?? 0) * 125
}

export const projectGroups: ProjectGroup[] = groupDefinitions.map((group) => ({
    ...group,
    projects: projects
        .filter((project) => project.group === group.id)
        .sort((a, b) => projectCompleteness(b) - projectCompleteness(a)),
}))

export const orderedProjects = projectGroups.flatMap((group) => group.projects)
