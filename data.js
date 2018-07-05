const data = {
  title: 'Brendan DAOUD',
  subtitle: 'Ingénieur Logiciel',
  side: {
    info: {
      title: 'Contacts',
      list: [
        { label: 'Adresse', text: '139, Rue La Fayette<br>75010 Paris<br>FRANCE' },
        { label: 'Téléphone', text: '+33 6 76 28 23 08' },
        { label: 'Email', text: 'daoud@ensta.fr' },
        { label: 'Github', text: '<small>github.com/Granipouss<br>github.com/brendaoud</small>' }
      ]
    },
    skills: [{
      title: 'Langues',
      list: [
        { label: 'Français', text: 'Langue maternelle' },
        { label: 'Anglais', text: 'Avancé (TOEIC 935)' },
        { label: 'Espagnol & Japonais', text: 'Débutant' }
      ]
    }, {
      title: 'Informatique',
      list: [
        { label: 'Langages de Script', text: 'C & C++<br>Python & Java<br>NodeJS<br>bases de Ruby' },
        { label: 'Technologies Web', text: 'JS ES6, HTML5 & CSS3<br>PHP7' },
        { label: 'Autres Logiciels', text: 'Microsoft Office Suite<br>Adobe Creative Suite<br>Maîtrise de GIT,<br>Connaissance de MVC et des principaux Designer&nbsp;Patterns' }
      ]
    }]
  },
  main: [
    {
      isTable: true,
      title: 'Scolarité',
      list: [{
        date: 'Depuis 2014',
        label: 'ENSTA ParisTech',
        text: 'École d’ingénieur<br>Voie Signal, Informatique et Systèmes & Parcours Architecture et Sécurité des Systèmes d’Information - Profils Entrepreneuriat et Intrapreneuriat'
      }, {
        date: '2012 - 2014',
        label: 'Classe Préparatoire',
        text: 'Lycée Charlemagne, Paris<br>Classe préparatoire mathématiques, physique et informatique'
      }, {
        date: '2012',
        label: 'Baccalauréat S',
        text: 'Lycée Victor Hugo, Paris'
      }]
    }, {
      isTable: true,
      title: 'Expériences Professionelles',
      list: [{
        date: 'Avril - Sept. 2018',
        label: 'Stage de fin d\'étude en cours chez CardMarket à Berlin',
        text: `Leader européen de la vente de cartes à jouer et à collectionner.<br>
              Développement de nouvelles fonctionnalités, maintenances et mises à
              niveau des fonctionnalités actuelles.<br>
              <small>Utilisation de PHP principalement</small>`
      }, {
        date: 'Juin - Août 2017',
        label: 'Stage de Recherche au laboratoire U2IS de l’ENSTA',
        text: `Projet de recherche sur les statistiques des images naturelles
              dans l’Unité d’Informatique et d’Ingénierie Système de l’ENSTA ParisTech<br>
              Mise en pratique de mes connaissances en traitement d'images, statistiques et
              calcul en parallèle dans le but d'en apprendre plus sur les caractéristiques
              des images dites naturelles.<br>
              <small>Utilisation de Python et C++ pour le traitement d’images en parallèle</small>`
      }, {
        date: 'Mai - Août 2016',
        label: 'Stage de développeur chez Soixante circuits',
        text: `Agence parisienne de design interactif
            <ul>
              <li>Participation au développement d'applications utilisées par Coca Cola
                pour la couverture de l'UEFA en France et en Belgique.</li>
              <li>Développement d'une exposition interactive pour l'anniversaire de Tiffany
                & Co en Chine. </li>
            </ul>
            <small>Utilisation de Node JS, notamment les librairies Vue.js et Webpack</small>`
      }, {
        date: '2015 - 2017',
        label: 'Site de MLVA pour \'Université Paris Sud',
        text: `Remise à neuf d'un site participatif de séquençage du génomes de
              microbes utilisé par des biologistes à travers le monde. Développement
              sur 3 ans avec un camarade de l'ENSTA, en relation constante avec
              les chercheurs.<br>
              <small>Site disponible à http://microbesgenotyping.i2bc.paris-saclay.fr/<br>
              Utilisation en PHP avec le framework Code Igniter et JS</small>`
      // }, {
      //   date: 'Août 2015',
      //   label: 'Stage dans un hôtel au Japon',
      //   text: 'Stage linguistique et stage en tant qu\'homme à tout faire dans un hôtel'
      // }, {
      //   date: 'Août 2013',
      //   label: 'Job estival à la Banque de France',
      //   text: 'Assitant au secrétariat du servcie de contrôle des Assurances et Mutuelles'
      }]
    }, {
      isTable: false,
      title: 'Vie associative',
      list: [{
        label: 'Bureau des Arts',
        text: `Association étudiante gérant l\'ensemble des activités culturelles
              et artistiques du campus.<br>
              Création et gestion du site de billetterie en ligne.`
      }, {
        label: 'l\'Anim\'',
        text: `Organisation de repas pour environ 200 personnes. Gestion de l'équipe (15 à 20 personnes) -
              Planification du travail en amont et répartition des tâches lors de l'évènement.`
      }]
    }, {
      isTable: false,
      title: 'Hobbies',
      list: [{
        label: 'Arts Visuels',
        text: 'Dessin et peinture, visites de musées et d\'expositions, film et séries d\'animations'
      }, {
        label: 'Informatique',
        text: 'Sites web et jeux amateurs, projets divers'
      }, {
        label: 'Sport',
        text: 'Gymnastique, Natation'
      }, {
        label: 'Cuisine',
        text: 'Pâtisserie principalement'
      }]
    }
  ]
}
