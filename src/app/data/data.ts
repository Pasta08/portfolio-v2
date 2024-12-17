export interface Experience {
    companyName: string;
    status: string;
    role: string;
    roleDescription: string;
    mostUsedTechnologies: string[];
    clients: string[];
  }
  

export const experiences: Experience[] = [
    {
        companyName: "Freelance",
        status: "Currently working",
        role: "Front End Developer",
        roleDescription:
            "Focused on front-end development with Next.js, TypeScript, React, created reusable and efficient components based on specific designs. Close collaboration with the back end team and designers to effectively integrate client requirements.",
        mostUsedTechnologies: [
            "React",
            "SEO",
            "Tailwind",
            "Astro",
            "NextJs",
            "Typescript"
        ],
        clients: ["Eni, Mediaset Group", "Dshare"],
    },
    {
        companyName: "Anoki",
        status: "03/2023 - Current",
        role: "Front End Developer",
        roleDescription:
            "Full Stack developer skilled in Next.js, TypeScript, React, and SvelteKit, creating reusable components and responsive pages. Experienced in collaborating with back-end developers and designers to integrate client requirements and maintain production-ready code",
        mostUsedTechnologies: [
            "React",
            "Svelte",
            "Vue",
            "SEO",
            "Tailwind",
            "Astro",
            "Node",
            "Typescript",
        ],
        clients: ["Eni, Mediaset Group", "Dshare"],
    },
    {
        companyName: "Fides",
        status: "09/2022 - 03/2023",
        role: "Full Stack Developer",
        roleDescription:
            "Development of back-end services, controllers, and REST APIs using Java and Spring, including writing MySQL queries for database interaction. Creation of reusable components and web pages with Angular and React. Maintenance and testing of production code.",
        mostUsedTechnologies: [
            "Angular",
            "Java",
            "Spring Boot",
            "Oracle DB",
            "SQL",
            "Javascript",
        ],
        clients: ["Intesa San Paolo"],
    },
    {
        companyName: "Dot Muffin",
        status: "09/2021 - 03/2022",
        role: "Full Stack Developer",
        roleDescription:
            "Design and implementation of React components. Styling of pages and components primarily using Sass and Styled Components. Occasional use of Node.js and the Express framework to support backend operations",
        mostUsedTechnologies: [
            "Javascript",
            "Typescript",
            "NodeJs",
            "NestJS",
            "MongoDB",
            "NextJs",
        ],
        clients: ["Intesa San Paolo"],
    },
];
