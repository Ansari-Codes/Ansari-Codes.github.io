import { DEVGIT } from '@/constants'

export interface ProjectMilestone {
    title: string
    description?: string
}

export interface ProjectBlogSections {
    about?: string
    howCreated?: string
    usage?: string
    stack?: string
    additionalNotes?: string
}

export interface ProjectBlog {
    sections: ProjectBlogSections
    milestones: ProjectMilestone[]
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
        technologies: ['Vue', 'TypeScript', 'Tailwind', 'Vite'],
        repository: `${DEVGIT}/Ansari-Codes.github.io`,
        liveLink: 'https://ansari-codes.github.io',
        screenshots: [{ src: new URL('../assets/projects/portfolio-screenshot.png', import.meta.url).href, alt: 'Portfolio homepage screenshot' }],
        blog: {
            sections: {
                about: 'The Ansari Codes Portfolio is the public home for my work as a developer. It brings together a curated project archive, short technical write-ups for each project, and a concise record of the tools and ideas I work with. The site is intended to function as both a showcase and a living reference for anyone evaluating my work, including collaborators, recruiters, and other developers.',
                howCreated: 'The site is built as a Vue 3 single-page application with Vue Router for navigation and Tailwind CSS for styling, organized around reusable components and a typed project-data module that drives the archive, filtering, and per-project views. The build is deployed as a static site through GitHub Pages, with routing structured so individual project pages remain shareable via query parameters.',
                usage: 'Visitors can browse the project archive from the Projects page, filter projects by group, open a project to read its write-up, and follow links to source code or live demos. The site is responsive and can be navigated from any modern browser on desktop or mobile.',
                stack: 'The frontend is built with Vue 3, Vue Router, TypeScript, Tailwind CSS, and Vite, and is deployed as a static build through GitHub Pages.',
            },
            milestones: [
                { title: 'Initial portfolio creation' },
                { title: 'Major redesigns / UI improvements' },
                { title: 'Responsive design for mobile' },
                { title: 'Deployment / hosting' },
                { title: 'Adding projects over time' },
            ],
        },
    },
    {
        id: 'manimscript',
        title: 'ManimScript',
        description: 'A declarative scripting language for creating Manim animations.',
        group: 'language',
        technologies: ['Python', 'Manim', 'Transpilers', 'Domain-Specific Languages', 'VibeCoding'],
        repository: `${DEVGIT}/manimscript`,
        icon: new URL('../assets/projects/mnmscript.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/manimscript-screenshot.png', import.meta.url).href, alt: 'ManimScript project screenshot' }],
        blog: {
            sections: {
                about: 'ManimScript is a declarative language for describing animation objects, scenes, and timelines. It translates these descriptions into Python code for Manim, aiming to make animation scripting more readable and structured.',
                howCreated: 'The project was built with AI-assisted coding under my direction: I defined the language design, the declarative surface syntax, and the transpilation strategy, and validated each piece as it was implemented. The tooling defines the custom syntax and translates its animation descriptions into Python code that can be used with Manim, with Python and Manim forming the rendering foundation.',
                usage: 'Install the project and Manim as described in the repository README, write an animation using ManimScript’s syntax, then use the project’s transpilation workflow to produce Python code for rendering with Manim.',
                stack: 'The language and transpiler are implemented in Python and target Manim as the rendering backend. The declarative syntax is parsed and translated into Manim-compatible Python code.',
            },
            milestones: [],
        },
    },
    {
        id: 'hskplus',
        title: 'HSK Plus',
        description: 'An interactive Mandarin Chinese learning platform for structured language progression.',
        group: 'web',
        technologies: ['TypeScript', 'Vue', 'Tailwind', 'Vite', 'VibeCoding'],
        repository: `${DEVGIT}/hskplus`,
        liveLink: 'https://desihop.net/hskplus',
        icon: new URL('../assets/projects/hskplus.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/hskplus-screenshot.png', import.meta.url).href, alt: 'HSK Plus application screenshot' }],
        blog: {
            sections: {
                about: 'HSK Plus is a Mandarin Chinese learning platform focused on structured study and progression. It brings learning activities and study resources together in an interactive web experience.',
                howCreated: 'The project was vibecoded with AI under my guidance: I defined the learning structure, the syllabus content, and the feature set, and reviewed and validated every step before moving on. The application itself is built with Vue and TypeScript as an interactive single-page web app, styled with Tailwind CSS, and deployed through GitHub Pages.',
                usage: 'Open the HSK Plus website, choose the available study material or learning activity, and work through it at your own pace. Refer to the live application for the current set of learning features.',
                stack: 'The frontend is a Vue 3 application written in TypeScript, styled with Tailwind CSS and built with Vite. The static build is deployed through GitHub Pages.',
            },
            milestones: [
                { title: 'Initial Concept' },
                { title: 'Landing Page' },
                { title: 'Resource Building', description: 'Added real vocabulary of syllabus, exercises and lessons.' },
                { title: 'Styling and Responsive Design' },
                { title: 'SEO improvements' },
                { title: 'Deployment' },
            ],
        },
    },
    {
        id: 'fincalc',
        title: 'FinCalc',
        description: 'A collection of interactive financial calculators for accessible financial calculations.',
        group: 'web',
        technologies: ['TypeScript', 'Vue', 'Tailwind', 'Vite', 'VibeCoding'],
        repository: `${DEVGIT}/fincalc`,
        icon: new URL('../assets/projects/fincalc.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/fincalc-screenshot.png', import.meta.url).href, alt: 'FinCalc application screenshot' }],
        blog: {
            sections: {
                about: 'FinCalc is a collection of financial calculators presented through a web interface. The goal is to make common financial calculations easier to access and use, with each calculator focused on a single task and a clear set of inputs and outputs.',
                howCreated: 'The project was vibecoded with AI under my guidance: I defined the calculator set, the input and output design, and the overall structure, and validated each feature before moving on. The application is built as a Vue 3 single-page app in TypeScript, styled with Tailwind CSS, and deployed through GitHub Pages.',
                usage: 'Open the project and select the calculation you need. Enter the requested values and use the displayed result as an estimate; check the inputs and assumptions before making financial decisions.',
                stack: 'The frontend is a Vue 3 application written in TypeScript, styled with Tailwind CSS and built with Vite. The static build is deployed through GitHub Pages.',
            },
            milestones: [
                { title: 'Initial concept' },
                { title: 'Responsive Design' },
                { title: 'Addition of calculators' },
                { title: 'Addition of Blogs' },
                { title: 'Deployment' },
            ],
        },
    },
    {
        id: 'pysb3',
        title: 'PySb3',
        description: 'A zero-dependency Python library for developing Scratch games through Pythonic representations.',
        group: 'python',
        technologies: ['Python', 'Scratch 3', 'VibeCoding'],
        repository: `${DEVGIT}/pysb3`,
        screenshots: [
            { src: new URL('../assets/projects/pysb3-screenshot.png', import.meta.url).href, alt: 'pysb3 code example' },
        ],
        blog: {
            sections: {
                about: 'PySb3 is a Python library for building Scratch 3 projects using Python-friendly abstractions. It explores representing Scratch projects and game logic through code, with an emphasis on keeping the library lightweight and free of runtime dependencies.',
                howCreated: 'The project was built with AI-assisted coding under my direction: I defined the library’s abstractions, the SB3 representation strategy, and the overall API, and validated each step as it was implemented. The library uses Python abstractions to represent Scratch 3 projects and game logic, then works with the SB3 project format, and is deliberately designed to avoid runtime dependencies.',
                usage: 'Install or include the library according to its README, describe the Scratch project using PySb3’s Python API, and generate the project structure. Open the resulting project in Scratch to inspect or continue editing it.',
                stack: 'The library is written in pure Python with no runtime dependencies, and targets the Scratch 3 SB3 project format as its output.',
            },
            milestones: [],
        },
    },
    {
        id: 'social-app',
        title: 'DotMuted',
        description: 'A social platform bringing conversations together with experimental social features.',
        group: 'web',
        technologies: ['JavaScript', 'TypeScript', 'Python', 'Markdown', 'Vue', 'Tailwind', 'Pinia', 'FastAPI', 'Supabase', 'SQLite', 'NeonDB', 'PostgreSQL'],
        repository: `${DEVGIT}/social-app`,
        liveLink: 'https://ansari-codes.github.io/social-app',
        icon: new URL('../assets/projects/dotmuted.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/dotmuted-screenshot.png', import.meta.url).href, alt: 'Social App screenshot' }],
        blog: {
            sections: {
                about: 'DotMuted is an experimental social platform that combines ideas from familiar social networks with its own features. It explores posts, conversations, and different ways people might interact in a community, and was built as a full-stack project spanning a Vue frontend and a Python backend.',
                howCreated: 'The frontend is a Vue application using Pinia for state management and Tailwind for styling, with Markdown as part of the writing experience. The backend is a Python FastAPI service backed by Supabase and PostgreSQL, with SQLite used during development and NeonDB for managed Postgres. The frontend is deployed through GitHub Pages, with the API running as a separate service.',
                usage: 'Visit the live Social App to explore the available posts and social features. When creating a post, use Markdown formatting where supported; the repository contains the latest setup and feature details.',
                stack: 'The frontend is built with Vue, TypeScript, Pinia, and Tailwind CSS, and is deployed through GitHub Pages. The backend is a Python FastAPI service backed by Supabase, with PostgreSQL as the primary database, SQLite used in development, and NeonDB for managed hosting. Markdown is used as part of the writing experience.',
            },
            milestones: [],
        },
    },
    {
        id: 'ablop-lang',
        title: 'Ablop Lang',
        description: 'An experimental programming language exploring custom syntax and language design.',
        group: 'language',
        technologies: ['Python', 'Programming Language Design', 'VibeCoding'],
        repository: `${DEVGIT}/ablop-lang`,
        icon: new URL('../assets/projects/abloplang.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/abloplang-screenshot.png', import.meta.url).href, alt: 'Ablop lang example code' }],
        blog: {
            sections: {
                about: 'Ablop Lang is an experimental programming language project written in Python. It explores creating custom syntax and implementing the basic pieces of a language, from parsing through evaluation.',
                howCreated: 'The project was built with AI-assisted coding under my direction: I designed the language’s syntax and semantics and guided each implementation step, reviewing the pieces as they came together. The implementation is written in Python and covers the foundational pieces needed to define and process a custom programming-language syntax.',
                usage: 'Read the repository README and examples, then try a small program using Ablop Lang’s syntax with the project’s provided runner or interpreter.',
                stack: 'The language and its interpreter are implemented in Python, with the syntax and evaluation logic written from scratch as the core of the project.',
            },
            milestones: [],
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
            sections: {
                about: 'Personal Workbook LM is a personal workspace for interacting with language models and organizing AI-assisted work. It explores API-based and local AI workflows, including a bring-your-own-key approach, and is designed to run locally on the user’s machine.',
                howCreated: 'The application combines a Vue frontend with a Python and FastAPI backend, connecting a personal workspace to language-model APIs or local AI workflows. The bring-your-own-key setup lets users supply their own credentials or local model configuration rather than relying on a shared provider.',
                usage: 'Follow the repository README to install and configure the application. Choose a supported API or local model setup, provide the required credentials or model configuration, then use the workbook interface to organize and work with AI-assisted content.',
                stack: 'The frontend is built with Vue, and the backend is a Python FastAPI service. The application is designed to connect to external language-model APIs or local model runtimes, with a bring-your-own-key configuration model.',
            },
            milestones: [],
        },
    },
    {
        id: 'turtle-game-engine',
        title: 'Turtle Game Engine',
        description: 'A Python game-development project built around turtle graphics.',
        group: 'python',
        technologies: ['Python', 'Turtle Graphics', 'VibeCoding'],
        repository: `${DEVGIT}/turtle-game-engine`,
        screenshots: [{ src: new URL('../assets/projects/tuge-screenshot.png', import.meta.url).href, alt: 'Turtle Game Engine\'s Code snippet' }],
        blog: {
            sections: {
                about: 'Turtle Game Engine is a Python project exploring game-development features and reusable abstractions built on top of turtle graphics. It uses Python’s turtle environment as a foundation for experimenting with game concepts, layering reusable functionality over the drawing and input primitives.',
                howCreated: 'The project was built with AI-assisted coding under my direction: I defined the engine’s abstractions, the game-loop and input model, and the reusable components, and reviewed each implementation step. The engine itself is written in Python and builds on the standard turtle-graphics environment.',
                usage: 'Install or run the project as described in its README, then use the provided examples and engine functionality as a starting point for a Python turtle-graphics game.',
                stack: 'The engine is written in Python and builds on the standard turtle-graphics library, with the game abstractions layered directly over the turtle drawing and input primitives.',
            },
            milestones: [],
        },
    },
    {
        id: 'kutlync',
        title: 'KutLync',
        description: 'A Vue.js and FastAPI-powered URL shortener for creating shorter, shareable links.',
        group: 'web',
        technologies: ['Vue', 'TypeScript', 'Python', 'FastAPI', 'Pydantic', 'Supabase', 'SQLite', 'PostgreSQL', 'Tailwind', 'Vite'],
        repository: `${DEVGIT}/kutlync`,
        liveLink: 'https://ansari-codes.github.io/kutlync',
        icon: new URL('../assets/projects/kutlync.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/kutlync-screenshot.png', import.meta.url).href, alt: 'KutLync application screenshot' }],
        blog: {
            sections: {
                about: 'KutLync is a full-stack URL shortener that converts long links into compact, shareable URLs. It pairs a Vue 3 and TypeScript frontend with a Python FastAPI backend, and was built to exercise the full path from browser input through API handling, validation, persistence, and redirect resolution.',
                howCreated: 'The frontend is a Vue 3 single-page application using Vue Router, TypeScript, Tailwind CSS, and Vite, responsible for capturing and validating user input, calling the backend API, and presenting the generated short link. The backend is a Python FastAPI service that handles short-code generation, storage, and redirect resolution, with Supabase providing data storage and authentication and Pydantic validating request and response payloads. The two layers communicate over a JSON HTTP API, with the frontend deployed as a static build through GitHub Pages and the backend hosted on Render.',
                usage: 'Open the live KutLync application, paste the long URL you want to shorten, and submit it to receive a generated short link. Copy that link to share it, and visiting it will redirect to the original destination. For self-hosting or local development, the repository README covers setup for both the frontend and the API.',
                stack: 'The frontend is a Vue 3 single-page application using Vue Router, TypeScript, Tailwind CSS, and Vite, deployed through GitHub Pages. The backend is a Python FastAPI service hosted on Render, with Supabase handling data storage and authentication and Pydantic validating request and response payloads.',
            },
            milestones: [
                { title: 'Initial blueprint', description: 'Defined the style of coding for project codebase, file structure. Also defined concept and features of project.' },
                { title: 'Database Schema implementation' },
                { title: 'Basic Authentication', description: 'Login/Signup and user/session management both in frontend and backend' },
                { title: 'Core development', description: 'The main link shortening and redirecting system. The core functionality.' },
                { title: 'Testing and Validating' },
                { title: 'Deployment' },
                { title: 'Live Tests and validations' },
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
            sections: {
                about: 'QOD is a desktop-style application for working with Qwen language models locally. It uses a Python and NiceGUI interface to explore a local AI experience, keeping the model and the interaction on the user’s own machine.',
                howCreated: 'The application is built with Python and NiceGUI, providing a graphical desktop-style interface around locally run Qwen models. The interface handles model configuration and interaction, and runs entirely on the user’s machine without a remote backend.',
                usage: 'Follow the repository README to install the application and set up a compatible local Qwen model. Launch QOD and use its interface to interact with the configured model on your machine.',
                stack: 'The application is written in Python with NiceGUI as the desktop-style interface layer, and runs Qwen models locally on the user’s machine.',
            },
            milestones: [],
        },
    },
    {
        id: 'task-manager',
        title: 'Quick Task Manager',
        description: 'A professional-grade task manager that offers more than a basic to-do list without unnecessary complexity.',
        group: 'web',
        technologies: ['JavaScript', 'Vue', 'Tailwind', 'Fastify', 'Supabase', 'PostgreSQL'],
        repository: `${DEVGIT}/task-manager-fastify-vue-js`,
        liveLink: 'https://qtm-deploy.onrender.com',
        icon: new URL('../assets/projects/qtm.svg', import.meta.url).href,
        banner: new URL('../assets/projects/qtm-banner.svg', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/qtm-screenshot.png', import.meta.url).href, alt: 'Task Manager application screenshot' }],
        blog: {
            sections: {
                about: 'Quick Task Manager is a full-stack task-organizing application built with Vue and Fastify. It aims to offer more functionality than a minimal to-do list while keeping the experience straightforward, covering authentication, task management, and a dashboard view.',
                howCreated: 'The project is a monorepo: the frontend is a Vue application written in JavaScript and styled with Tailwind CSS, while the backend is a Fastify service, also in JavaScript, which serves the frontend build through specified routes. The database is PostgreSQL via Supabase, handling authentication and task storage, and the backend is deployed on Render.',
                usage: 'Open the live application to organize tasks with the available task-management features. For a local setup, follow the repository README to run the frontend and backend.',
                stack: 'The frontend is a Vue application written in JavaScript and styled with Tailwind CSS. The backend is a Fastify service in JavaScript, with PostgreSQL via Supabase for data and authentication. The whole project is a monorepo, with the backend serving the frontend build, and the backend is deployed on Render.',
            },
            milestones: [
                { title: 'Initial blueprint of concept' },
                { title: 'Database Schema Design' },
                { title: 'Authentication system', description: 'Login/Signup, user and session management.' },
                { title: 'Dashboard & task management', description: 'The main app functionalities.' },
                { title: 'Responsive & Elegant Design', description: 'Finalization of design and improvements in responsivness.' },
                { title: 'Deployment and Hosting' },
            ],
        },
    },
    {
        id: 'custom-syntax-python',
        title: 'Custom Syntax for Python',
        description: 'An experimental syntactic-sugar project introducing alternative syntax for Python.',
        group: 'language',
        technologies: ['Python', 'Syntax Design', 'VibeCoding'],
        repository: `${DEVGIT}/custom-syntax-for-python`,
        icon: new URL('../assets/projects/csplang.png', import.meta.url).href,
        banner: new URL('../assets/projects/csplang-banner.png', import.meta.url).href,
        screenshots: [{ src: new URL('../assets/projects/csplang-screenshot.png', import.meta.url).href, alt: 'Custom Syntax for Python screenshot' }],
        blog: {
            sections: {
                about: 'Custom Syntax for Python is an experiment in alternative syntax and syntactic sugar for Python. It explores how Python code might be expressed through a different surface syntax, while still being processed into something Python can execute.',
                howCreated: 'The project was built with AI-assisted coding under my direction: I defined the alternative syntax and the transformation rules, and validated the processed output at each step. The implementation is written in Python and explores an alternative surface syntax by processing custom expressions into a form Python can work with.',
                usage: 'Review the examples and setup instructions in the repository, write a small snippet using the custom syntax, and process it with the project’s provided tooling.',
                stack: 'The project is implemented in Python, with the custom syntax parsed and transformed into valid Python by the project’s own tooling.',
            },
            milestones: [],
        },
    },
    {
        id: 'games',
        title: 'Games',
        description: 'A collection of independently developed browser games built with HTML.',
        group: 'other',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'VibeCoding'],
        repository: `${DEVGIT}/games`,
        screenshots: [{ src: new URL('../assets/projects/games-screenshot.png', import.meta.url).href, alt: 'Browser games screenshot' }],
        blog: {
            sections: {
                about: 'Games is a collection of browser-based game experiments made with HTML and web technologies. The repository brings together small games and interactive ideas, each built as a self-contained web experience.',
                howCreated: 'The collection was built with AI-assisted coding under my direction: I defined the gameplay concepts and the interactive behavior for each game, and reviewed each implementation. The games themselves are built with HTML, CSS, and JavaScript, allowing each idea to be explored as a standalone interactive web page.',
                usage: 'Open the live games project, choose one of the available games, and play in the browser. The repository contains the source and details for running the collection locally.',
                stack: 'Each game is built as a self-contained web page using HTML, CSS, and JavaScript, with no build step or framework required.',
            },
            milestones: [],
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
            sections: {
                about: 'Funlang is an experimental programming-language project written in Python. It explores language design by creating a custom language and implementing its behavior, from syntax through execution.',
                howCreated: 'The language is implemented in Python and explores how a small custom language can define and execute its own syntax and behavior. The implementation covers the parsing and evaluation pieces needed for a working interpreter.',
                usage: 'Read the repository instructions and examples, write a small Funlang program, and run it using the project’s provided interpreter or command-line workflow.',
                stack: 'The language and its interpreter are implemented in Python, with the syntax and evaluation logic written from scratch as the core of the project.',
            },
            milestones: [],
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
            sections: {
                about: 'PJX is a Python-based tool for generating JavaScript through a Pythonic API. It explores representing JavaScript code using Python constructs and generating code programmatically, rather than writing it by hand.',
                howCreated: 'The library is written in Python and provides an API for expressing JavaScript constructs with Python code, then generating JavaScript output. The design focuses on mapping Python expressions to their JavaScript equivalents while keeping the generated output readable.',
                usage: 'Install PJX as described in its README, use its Python API to construct the JavaScript you need, and generate the resulting JavaScript code for your project.',
                stack: 'The library is written in Python and generates JavaScript as its output. The API layer maps Python expressions and constructs to JavaScript equivalents.',
            },
            milestones: [],
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
            sections: {
                about: 'Brightness Controller is a Python utility for controlling screen brightness. It is a small software tool focused on making brightness adjustment more convenient, exposing a simple workflow that connects to the underlying system functionality.',
                howCreated: 'The utility is written in Python and connects a small user workflow to the system functionality required to adjust display brightness. It is scoped to a single task and built to run locally on the user’s machine.',
                usage: 'Check the repository README for operating-system requirements and installation steps, then launch the utility and adjust brightness using its supported controls.',
                stack: 'The utility is written in Python and runs locally, calling into the operating system’s display-brightness interfaces.',
            },
            milestones: [],
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
            sections: {
                about: 'ProgressivePy is a Python library for displaying progress bars and spinners in terminal applications and Jupyter notebooks. It explores customizable progress indicators for Python workflows, with an emphasis on making long-running output readable and informative.',
                howCreated: 'The library is packaged as a Python package, with progress bars and spinners designed to work in both terminal applications and Jupyter notebooks. The indicators are customizable and share a common rendering approach so the same API works across both environments.',
                usage: 'Install the package using the instructions in its repository, import the progress indicator that suits your task, and use it around long-running work. Consult the README for available options and examples.',
                stack: 'The library is written in Python and rendered for both terminal and Jupyter notebook environments, with a shared API for bars and spinners.',
            },
            milestones: [],
        },
    },
]

const groupDefinitions: Pick<ProjectGroup, 'id' | 'title'>[] = [
    { id: 'web', title: 'Vue.js web apps' },
    { id: 'python', title: 'Python projects' },
    { id: 'local', title: 'Local-first projects' },
    { id: 'language', title: 'Compilers, languages & transpilers' },
    { id: 'other', title: 'Other projects' },
]

function projectCompleteness(project: Project): number {
    const { sections, milestones } = project.blog
    const textLength = [
        sections.about,
        sections.howCreated,
        sections.usage,
        sections.stack,
        sections.additionalNotes ?? '',
        ...milestones.map((milestone) => `${milestone.title} ${milestone.description ?? ''}`),
    ].join(' ').length

    return textLength
        + project.technologies.length * 20
        + milestones.length * 35
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