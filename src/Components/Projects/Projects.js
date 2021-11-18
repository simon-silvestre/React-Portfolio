import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectMiniature from './ProjectMiniature'

function Projects() {

    const [projects, setProjects] = useState([
        {
            name: 'chifoumi',
            miniature: 'Images/projects/chifoumi_miniature.png',
            img: 'Images/projects/chifoumi.png',
            link: 'http://chifoumi.simon-projets.com',
            date: '20 fév, 2021',
            message: 'Projet de réalisation d’un jeu de pierre-feuille-ciseaux avec un choix aléatoire de la part de l’adversaire, une fenêtre pour les règles et un score card. 3 résultats possibles: gagnée, perdre ou obtenir une égalité.',
            type: 'vue'
        },
        {
            name: 'bookmark',
            miniature: 'Images/projects/bookmark_miniature.webp',
            img: 'Images/projects/bookmark.webp',
            link: 'http://bookmark.simon-projets.com',
            date: '16 déc, 2020',
            message: 'Petit projet d’intégration de maquette réalisé avec Vuejs et Sass pour me familiariser avec celui-ci. Première fois que j’utilisais Scss sur un projet.',
            type: 'vue'
        },
        {
            name: 'pomodoro',
            miniature: 'Images/projects/miniature_pomodoro.webp',
            img: 'Images/projects/pomodoro.webp',
            link: 'https://pomodoro.simon-projets.com',
            date: '1 fev, 2021',
            message: 'Pomodoro site web de chronomètre avec décompte variable, choix de la couleur et de la police du site. C’est un défi d’intégration lancer par FrontendMentorChallenge.io.',
            type: 'vue'
        },
        {
            name: 'todo list',
            miniature: 'Images/projects/todo_miniature.webp',
            img: 'Images/projects/todo.webp',
            link: 'http://todo.simon-projets.com',
            date: '28 nov, 2020',
            message: 'Ce projet avait pour but de crée une to do list avec VueJs et firebase, le but final étant de crée un système d’authentification pour crée ses propres listes.',
            type: 'vue'
        },
        {
            name: 'movie app',
            miniature: 'Images/projects/movieApp_miniature.webp',
            img: 'Images/projects/movieApp.webp',
            link: 'http://movies.simon-projets.com',
            date: '4 déc, 2020',
            message: 'Projet de catalogue de films avec système de recherche à l’aide d’une api.',
            type: 'vue'
        },
        {
            name: 'price component',
            miniature: 'Images/projects/priceComponent_miniature.webp',
            img: 'Images/projects/priceComponent.webp',
            link: 'http://price.simon-projets.com',
            date: '17 fév, 2021',
            message: 'Intégration d’une maquette d’un composant qui contient un slider pour sélectionner le prix et un switch à la manière de ceux d’Apple.',
            type: 'vue'
        },
        {
            name: 'weather app',
            miniature: 'Images/projects/reactWeatherApp.webp',
            img: 'Images/projects/reactWeatherApp.webp',
            link: 'http://weather.simon-projets.com',
            date: '7 nov, 2020',
            message: 'Ce projet avait pour but de créer une application de météo qui affichait la température actuelle et les prévisions des 5 jours à venir. J’ai crée ce sur pour m’entrainer a utiliser vue.js.',
            type: 'react'
        },
        {
            name: 'todo list',
            miniature: 'Images/projects/reactTodo.webp',
            img: 'Images/projects/reactTodo.webp',
            link: 'http://react-todo.simon-projets.com',
            date: '1 nov, 2021',
            message: 'Projet effectué afin de m’entrainer sur le framework React et Firebase, il consiste en une todo-list classique avec fonctionnalités d’ajout et de suppression de tâches.',
            type: 'react'
        },
        {
            name: 'birthday reminder',
            miniature: 'Images/projects/birthdayReminder.webp',
            img: 'Images/projects/birthdayReminder.webp',
            link: 'http://birthday-reminder.simon-projets.com',
            date: '5 nov, 2021',
            message: 'Projet effectué lors de mon apprentissage de React. C’est un site de Rappel d\'anniversaire avec possibilité de supprimer les anniversaires au fur et à mesure ou tous d\'un coup.',
            type: 'react'
        },
        {
            name: 'worker review',
            miniature: 'Images/projects/workerReview.webp',
            img: 'Images/projects/workerReview.webp',
            link: 'http://react-reviews.simon-projets.com',
            date: '8 nov, 2021',
            message: 'Reviews du personnel d\'une entreprise avec affichage des informations dynamique.',
            type: 'react'
        },
        {
            name: 'star wars',
            miniature: 'Images/projects/starWars_miniature.webp',
            img: 'Images/projects/starWars.webp',
            link: 'http://gsap.simon-projets.com',
            date: '12 fév, 2021',
            message: 'Petit projet pour commencer à utiliser Three js, je regarde en ce moment la série The Mandalorian donc je me suis dit pourquoi ne pas essayer avec cet univers. J’ai créé la scène avec Three js, importé le modèle 3D à l’aide de gltfLoader, créé des étoiles et leur ai appliqué une texture, puis j’ai ajouté deux titres avec les polices adéquates. J’ai aussi utilisé gsap pour faire les animations.',
            type: 'javascript'
        },
        {
            name: 'progress bar',
            miniature: 'Images/projects/progressBar.webp',
            img: 'Images/projects/progressBar.webp',
            link: 'http://progress-bar.simon-projets.com',
            date: '3 déc, 2020',
            message: 'Composant de barre de progression animée',
            type: 'javascript'
        },
    ])
    const [active, setActive] = useState('vue')
    const [showProject, setShowProject] = useState(false)
    const [projectIndex, setProjectIndex] = useState()
    

    function handlebutton(active) {
        setActive(active)
    }

    function displayProject(index){
        setProjectIndex(active === 'react' ? index + projects.filter(project => project.type === 'vue').length : index)
        setShowProject(true)
        document.body.style.overflow = "hidden";
    }

    function closeProject() {
        setShowProject(false)
        document.body.style.overflow = "unset";
    }

    let projectMiniature = projects.filter(project => project.type === active || active === 'all').map((project, index) => {
        return (
            <ProjectMiniature
              name={project.name}
              img={project.miniature}
              type={project.type}
              key={index}
              display={() => displayProject(index)}
            >
            </ProjectMiniature>
        )
    })

    return (
        <div className="Projects" id="Projects">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
            <div className="navBar">
                <h2>mes projets</h2>
                <div className="nav">
                <p className={active === 'vue' ? 'active' : ''} onClick={() => handlebutton('vue')}>vuejs</p>
                    <p className={active === 'react' ? 'active' : ''} onClick={() => handlebutton('react')}>reactjs</p>
                    <p className={active === 'all' ? 'active' : ''} onClick={() =>handlebutton('all')}>all</p>
                </div>
            </div>
            <div className="projectsContainer">
                {projectMiniature}
            </div>
            {(showProject) ? (
                <ProjectDetails
                name={projects[projectIndex].name}
                img={projects[projectIndex].img}
                date={projects[projectIndex].date}
                type={projects[projectIndex].type}
                message={projects[projectIndex].message}
                link={projects[projectIndex].link}
                close={() => closeProject()}
                key={projectIndex}
              >
              </ProjectDetails>
            ) : ('')}
        </div>
    )
}

export default Projects
