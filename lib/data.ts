interface Project {
  id: number
  title: string
  description: string
  image: string
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "VitaWell Mobile App",
    description: "Health & Wellness Application",
    image: "/images/VitaWell.jpg"  // Update to match your actual image path
  },
  {
    id: 2,
    title: "VitaWell Application",
    description: "Health & Fitness Tracking App",
    image: "/images/vitawell2.png"  // Update to match your actual image path
  },
  {
    id: 3,
    title: "PathumJourney",
    description: "Travel Application",
    image: "/images/PathumJourney.jpg"  // Update to match your actual image path
  }
]