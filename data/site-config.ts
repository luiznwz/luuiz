export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type projectsSchema = {
  title: string;
  period: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  projectsSchema?: projectsSchema[];
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  imagesLink?: Image[];
};

const siteConfig: SiteConfig = {
  title: "Luiz Renan",
  subtitle: "Developer Front End",
  description: "Luiz",
  image: {
    src: "/",
    alt: "Luiz Renan",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  projectsSchema: [
    {
      title: "Empty",
      period: "Jan 2024 - Feb 2024",
      description:
        "With the release of the Open GPT Store, I was able to create a chatbot that could collect data from users and store it in a database. This was a fun project to work on and I learned a lot about natural language processing and machine learning.",
      imageUrl: "/image-s3-image1.jpg",
      projectUrl: "http://localhost:3000/",
    },
    // Add more projects here
    {
      title: "ChatCollect",
      period: "Jan 2024 - Feb 2024",
      description:
        "With the release of the Open GPT Store, I was able to create a chatbot that could collect data from users and store it in a database. This was a fun project to work on and I learned a lot about natural language processing and machine learning.",
      imageUrl: "/image-s3-image1.jpg",
      projectUrl: "http://localhost:3000/",
    }
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    // {
    //   text: "Terms",
    //   href: "/terms",
    // },
  ],
  socialLinks: [
    {
      text: "GitHub",
      href: "https://github.com/luiznwz",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/luuiz",
    },
    {
      text: "Twitter/X",
      href: "https://twitter.com/luuiz",
    },
  ],
  imagesLink: [
    {
      src: "https://skillicons.dev/icons?i=docker",
      alt: "docker.icon",
      caption: "docker",
    },
    {
      src: "https://skillicons.dev/icons?i=nextjs",
      alt: "nextjs.icon",
      caption: "nextjs",
    },
    {
      src: "https://skillicons.dev/icons?i=js",
      alt: "js.icon",
      caption: "js",
    },
    {
      src: "https://skillicons.dev/icons?i=ts",
      alt: "ts.icon",
      caption: "ts",
    },
    {
      src: "https://skillicons.dev/icons?i=aws",
      alt: "aws.icon",
      caption: "aws",
    },
    {
      src: "https://skillicons.dev/icons?i=react",
      alt: "react.icon",
      caption: "react",
    },
    {
      src: "https://skillicons.dev/icons?i=nodejs",
      alt: "nodejs.icon",
      caption: "nodejs",
    },
    {
      src: "https://skillicons.dev/icons?i=tailwindcss",
      alt: "tailwindcss.icon",
      caption: "tailwindcss",
    },
    {
      src: "https://skillicons.dev/icons?i=git",
      alt: "Git.icon",
      caption: "git",
    },
    {
      src: "https://skillicons.dev/icons?i=vite",
      alt: "vite.icon",
      caption: "vite",
    },
    {
      src: "https://skillicons.dev/icons?i=figma",
      alt: "figma.icon",
      caption: "figma",
    },
    {
      src: "https://skillicons.dev/icons?i=html",
      alt: "html.icon",
      caption: "html",
    },
    {
      src: "https://skillicons.dev/icons?i=css",
      alt: "css.icon",
      caption: "css",
    },
    {
      src: "https://skillicons.dev/icons?i=prisma",
      alt: "prisma.icon",
      caption: "prisma",
    },
    {
      src: "https://skillicons.dev/icons?i=graphql",
      alt: "graphql.icon",
      caption: "graphql",
    },
    {
      src: "https://skillicons.dev/icons?i=apollo",
      alt: "apollo.icon",
      caption: "apollo",
    },
  ],
  hero: {
    title: "Hi There & Welcome to My Portfolio!",
    text: "I'm **Luiz**, a Front end developer at **Shakers Agency**, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/luiznwz'>GitHub</a> or follow me on <a href='https://twitter.com/luiznwz'>Twitter/X</a>.",
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to Luiz Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
