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
        role: "Full Stack Developer",
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
            "Full Stack developer skilled in Next.js, TypeScript, React, and SvelteKit, creating reusable components and responsive pages. Experienced in collaborating with back-end developers and designers to integrate client requirements and maintain production-ready code",
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
            "Full Stack developer skilled in Next.js, TypeScript, React, and SvelteKit, creating reusable components and responsive pages. Experienced in collaborating with back-end developers and designers to integrate client requirements and maintain production-ready code",
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
];
