const data = {
  title: 'Brendan DAOUD',
  subtitle: 'Engineering Student',
  side: {
    info: {
      title: 'Contacts',
      list: [
        { label: 'Nationality', text: 'French' },
        { label: 'Address', text: '139, Rue La Fayette<br>75010 Paris<br>FRANCE' },
        { label: 'Phone Number', text: '+33 6 76 28 23 08' },
        { label: 'Email', text: 'daoud@ensta.fr' }
      ]
    },
    skills: [{
      title: 'Languages',
      list: [
        { label: 'French', text: 'Mother tongue' },
        { label: 'English', text: 'Advanced (TOEIC 935)' },
        { label: 'Spanish & Japanese', text: 'Beginner' }
      ]
    }, {
      title: 'Computer Skills',
      list: [
        { label: 'Scripting Languages', text: 'C & C++<br>Python & Java<br>NodeJS<br>Basic Ruby' },
        { label: 'Web Technologies', text: 'JS, HTML5 & CSS3<br>Basic PHP' },
        { label: 'Other Softwares', text: 'Microsoft Office Suite<br>Adobe Creative Suite' }
      ]
    }]
  },
  main: [
    {
      isTable: true,
      title: 'Work Experiences',
      list: [{
        date: 'June - August 2017',
        label: 'Research Internship at the U2IS Laboratory of ENSTA',
        text: 'Research on natural images statistics at the Unit of Computer Science and System Ingeneering of ENSTA ParisTech - Use of Python and C++ for parellel image treatment'
      }, {
        date: 'May - August 2016',
        label: 'Internship at Soixante Circuits',
        text: 'Interactive design agency in Paris working for various international companies such as Coca Cola in France and Belgium and Tiffany & Co. in China. - NodeJS developer working on various projects both in team and on my own'
      }, {
        date: 'Since 2015',
        label: 'Developing MLVA website for Université Paris Sud',
        text: 'Participative database of bacterial genome sequencing for biologists worldwide (hosted at Paris Sud University) - One of the two developers of the website using PHP and MySQL developer and currently ensuring maintenance'
      }, {
        date: 'August 2015',
        label: 'Internship in a japanese hostel',
        text: 'Linguistic program & Internship as an handyman in the hostel'
      }, {
        date: 'August 2013',
        label: 'Summer job at the Banque de France',
        text: 'Assistant in the departement monitoring insurance companies'
      }]
    }, {
      isTable: true,
      title: 'Education',
      list: [{
        date: 'Since 2014',
        label: 'ENSTA ParisTech',
        text: 'Engineering degree program<br>Specilized in Information Systems and Technology'
      }, {
        date: '2012 - 2014',
        label: 'Preparatory School',
        text: 'Lycée Charlemagne, Paris<br>Focused on Mathematics, Physics and Computer SciencesEquivalent to a 2-year university degree in Mathematics'
      }, {
        date: '2012',
        label: 'Scientific Baccalauréat',
        text: 'Lycée Victor Hugo, Paris'
      }]
    }, {
      isTable: false,
      title: 'Community Life in School',
      list: [{
        label: 'Art Bureau',
        text: 'School club managing all cultural and artistic activities on the campus - creator and webmaster of the online ticketing website & responsible for visual communication (flyers, etc.)'
      }, {
        label: 'l\'Anim\'',
        text: 'Monthly event, preparation of a meal for around 200 people, managing a team of 15 to 20 people'
      }]
    }, {
      isTable: false,
      title: 'Hobbies',
      list: [{
        label: 'Visual Arts',
        text: 'Drawing and painting and also occasionally photography and film'
      }, {
        label: 'Computer Science',
        text: 'Websites, games and various projects'
      }, {
        label: 'Sports',
        text: 'Gymnastics, Swimming'
      }, {
        label: 'Cooking',
        text: 'Keen pastry chef'
      }]
    }
  ]
}
