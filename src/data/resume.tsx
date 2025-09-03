import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Cesar Ortega',
  initials: 'CO',
  url: 'https://dillion.io',
  location: 'Lima, Peru',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'Desarrollador & Diseñador Web me gusta crear proyectos, colaborar en equipo y aprender cada día',
  summary:
    'Con experiencia en el diseño y desarrollo de aplicaciones web modernas. He trabajado en proyectos que integran frontend y backend, implementando funcionalidades como gestión de inventarios y visualización de servicios. También tengo conocimientos en UI/UX, aplicando buenas prácticas y trabajo en equipo para crear soluciones eficientes y centradas en el usuario.',
  avatarUrl: '/me.png',
  skills: [
    'JavaScript',
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Postgres',
    'Figma',
    'TailwindCSS',
    'Git',
    'GitHub',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'cesarluis4056@gmail.com',
    tel: '+51 942280984',
    social: {
      // GitHub: {
      //   name: 'GitHub',
      //   url: 'https://dub.sh/dillion-github',
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cesar-ortega-dev/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/Cesar160804',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'Gufra Peru',
      href: 'https://gufraperu.com/',
      badges: [],
      location: 'Remote',
      title: 'Desarrollador Web Full Stack',
      logoUrl: '/ico-gufra.svg',
      start: 'Jun 2025',
      end: 'Feb 2025',
      description:
        'Junto a un grupo de compañeros desarrollamos una aplicación web para la gestión de productos de inventario, dentro de la cual también se podría controlar las ventas, los clientes, los problemas, etc.Este proyecto esta dividido en directorios separados para tener un mejor control.',
    },
    {
      company: 'ICSM',
      badges: [],
      href: 'https://icsmcientifico.com/',
      location: 'Los Olivos, Lima, Peru',
      title: 'Desarrollador y Diseñador Web',
      logoUrl: '/ico-icsm.jpg',
      start: 'Ago 2024',
      end: 'Dic 2024',
      description:
        'Me encargue del desarrollo de la sección de servicios, asegurando un diseño responsivo y una experiencia de usuario óptima.Colabore con los demás miembros del equipo, en tareas como mejorar el código, optimizar imágenes, y además compartí conocimientos mutuo.',
    },
    {
      company: 'Easy Hotel',
      href: 'https://www.easyhotel.pe/nosotros',
      badges: [],
      location: 'SJM, Lima, Peru',
      title: 'Desarrollador Web Junior',
      logoUrl: '/ico-hotel.svg',
      start: 'Ene 2024',
      end: 'Jul 2024',
      description:
        'Desarrollé tareas encargadas por los reclutadores, como creación de interfaces intuitivas, componentes funcionales, nuevos lenguajes de programación, etc.Aprendí y apliqué nuevos conocimientos como nuevas formas de desarrollo, importar y exportar archivos, muevas metodologías como BEM y MVC.',
    },
  ],
  education: [
    {
      school: 'Senati',
      href: 'https://www.senati.edu.pe/',
      degree: 'Tecnico en Desarrollo y Diseño de Web',
      logoUrl: '/senati.jpg',
      start: '2022',
      end: '2025',
    },
    {
      school: 'Codigo Facilito',
      href: 'https://codigofacilito.com/',
      degree: 'Certificacion en Desarrollo Web',
      logoUrl: '/codfa.png',
      start: '2022',
      end: '2024',
    },
  ],
  projects: [
    {
      title: 'Aplicación de gestión para Gufra Peru',
      href: 'https://chatcollect.com',
      dates: 'Feb 2025 - Jun 2025',
      active: true,
      description:
        'Esta app fue desarrollada para la empresa Gufra Perú SAC, para que puedan tener un mejor control de los productos, clientes y ventas',
      technologies: [
        'React',
        'MySQL',
        'Node.js',
        'Express',
        'CSS',
        'Material UI',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/Dicesaro/gufra_peru',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/pro-1.png',
      video: '',
    },
    {
      title: 'Info Music',
      href: 'https://info-music-98ya.vercel.app/',
      dates: 'Nov 2024 - Dic 2024',
      active: true,
      description:
        'Con esta aplicación puedes buscar información sobre tus artistas y álbumes favoritos y saber sus canciones mas rankeadas.',
      technologies: [
        'Next.js',
        'React',
        'Typescript',
        'Spotify API',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://info-music-98ya.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/Dicesaro/info_music',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/pro-2.png',
      video: '',
    },
    {
      title: 'Search Country',
      href: 'https://dicesaro.github.io/paises/',
      dates: 'Ago 2024 - Sep 2024',
      active: true,
      description:
        'Este es un proyecto personal, aqui puedes buscar informacion sobre algun pais, su capital, poblacion, moneda, idiomas y mas.',
      technologies: ['Rest Country API', 'CSS', 'React'],
      links: [
        {
          type: 'Website',
          href: 'https://dicesaro.github.io/paises/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/Dicesaro/paises',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/pro-3.png',
      video: '',
    },
    {
      title: 'Sales Dashboard (ficticio)',
      href: 'https://automatic.chat',
      dates: 'Mar 2024 - Abr 2024',
      active: true,
      description:
        'Este es un dashboard de ventas, aqui puedes ver las ventas realizadas en el mes, los productos mas vendidos y el total de ingresos. (ficticio)',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'V0'],
      links: [
        {
          type: 'Website',
          href: 'https://sales-dashboard-seven-rosy.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/pro-4.png',
      video: '',
    },
  ],
  hackathons: [],
} as const
