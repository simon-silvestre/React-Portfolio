import React from 'react'

function About() {
    return (
        <div className="About">
            <h2>À propos de moi</h2>
            <div className="informations">
                <div className="profil">
                    <div className="pdp">
                        <img src="Images/profil.jpeg" alt="" />
                    </div>
                    <p><span>localisation:</span> Yvelines, France</p>
                    <p><span>Langues:</span> Français, Anglais</p>
                </div>
                <div className="presentation">
                    <p>
                        Salut je m’appelle Simon,  
                        et l’informatique est une passion que j’ai depuis tout petit, c’était donc logique pour moi de me 
                        diriger vers la programmation pour mon métier.
                        J’adore créer des sites web utiles et utiliser de nouvelles techniques tous les jours.
                        Ce qui me plait le plus c’est de relever des défis et de toujours avoir de nouvelles choses à apprendre. 
                        Je suis motiver et impatient d’intégrer une équipe de développeurs au sein d’une entreprise pour découvrir 
                        de nouvelles facettes de ce métier.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
