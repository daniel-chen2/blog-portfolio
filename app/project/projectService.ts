export class Project { 
    title: string;
    summary: string;
    imageUrl: string;
    projectUrl: string;
    technologies: string[];

    constructor(title: string, summary: string, imageUrl: string, projectUrl: string, technologies: string[]) {
        this.title = title,
        this.summary = summary
        this.imageUrl = imageUrl
        this.projectUrl = projectUrl
        this.technologies = technologies
    }
}

const projects = [
    new Project("Hanzi AI Reader", "AI-Powered Chinese Reading Application that scales to your current level of fluency", "/images/Hanzi-Reader-Project.png", "https://language-learning-app-ui-production.up.railway.app/", ["Next.js", "Django", "Railway", "OpenAi"]),
    new Project("BD Water", "Custom built website designed for local water bores company", "/images/BD-Water-Project.png", "https://bdwater.com.au/", ["Wordpress", "Figma"]),
    new Project("Alda Consultants", "Clean Portfolio Site for renowned local archiecture company", "/images/alda-consultants-portfolio.png", "https://aldaconsultants.com.au", ["Wordpress", "Adobe Xd"]),
]

export function getAllProjects() {
  return projects;
}