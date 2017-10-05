const data = {
  title: 'Brendan DAOUD',
  subtitle: 'étudiant en école d’ingénieur',
  side: {
    info: {
      title: 'Contacts',
      list: [
        { label: 'Adresse', text: '139, Rue La Fayette<br>75010 Paris<br>FRANCE' },
        { label: 'Téléphone', text: '+33 6 76 28 23 08' },
        { label: 'Email', text: 'daoud@ensta.fr' }
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
        { label: 'Technologies Web', text: 'JS, HTML5 & CSS3<br>bases de PHP' },
        { label: 'Autres Logiciels', text: 'Microsoft Office Suite<br>Adobe Creative Suite' }
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
        date: 'Juin - Août 2017',
        label: 'Stage de Recherche au laboratoire U2IS de l’ENSTA',
        text: 'Projet de recherche sur les statistiques des images naturelles dans l’Unité d’Informatique et d’Ingérierie Système de l’ENSTA ParisTech - Utilisation de Python et de C++ pour le traitement d’images en parallèle'
      }, {
        date: 'Mai - Août 2016',
        label: 'Stage de développeur chez Soixante circuits',
        text: 'Développement NodeJS chez Soixante circuits - Agence parisienne de design interactif travaillant avec de nombreuses entreprises internationales comme Coca Cola France et Belgique et Tiffany & Co. en Chine'
      }, {
        date: 'Depuis 2015',
        label: 'Site de MLVA pour \'Université Paris Sud',
        text: 'Développement en PHP et MySQL d\'une base de données participative de séquençage du génomes de microbes en collaboration avec un autre étudiant de l\'ENSTA & Maintenance du site'
      }, {
        date: 'Août 2015',
        label: 'Stage dans un hôtel au Japon',
        text: 'Stage linguistique et stage en tant qu\'homme à tout faire dans un hôtel'
      }, {
        date: 'Août 2013',
        label: 'Job estival à la Banque de France',
        text: 'Assitant au secrétariat du servcie de contrôle des Assurances et Mutuelles'
      }]
    }, {
      isTable: false,
      title: 'Vie associative',
      list: [{
        label: 'Bureau des Arts',
        text: 'Association étudiante gérant l\'ensemble des activités culturelles et artistiques du campus - Création et gestion du site de billetterie en ligne et responsable de la communication visuelle (affiches, etc.)'
      }, {
        label: 'l\'Anim\'',
        text: 'Evenement mensuel, préparation d\'un repas pour environ 200 personnes - management de l\'équipe (15 à 20 personnes) pour la préparation et le service'
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
        text: 'Pâtiserie principalement'
      }]
    }
  ]
}
