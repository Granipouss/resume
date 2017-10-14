const data = {
  title: 'Brendan DAOUD',
  subtitle: 'Software Engineering Student',
  side: {
    info: {
      title: 'Contacts',
      list: [
        { label: 'Nationality', text: 'French' },
        { label: 'Address', text: '139, Rue La Fayette<br>75010 Paris<br>FRANCE' },
        { label: 'Phone Number', text: '+33 6 76 28 23 08' },
        { label: 'Email', text: 'daoud@ensta.fr' },
        { label: 'Github', text: '<small>github.com/Granipouss<br>github.com/brendaoud</small>' }
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
        { label: 'Other Software', text: 'Microsoft Office Suite<br>Adobe Creative Suite' }
      ]
    }]
  },
  main: [
    {
      isTable: true,
      title: 'Work Experience',
      list: [{
        date: 'June - August 2017',
        label: 'Research Internship at the Computer Science and System Engineering Laboratory of ENSTA',
        text: 'I used my knowledge in image treatment, statistics and parallel computing to evaluate statistics of natural images that were quite unknown. My Work will be used as a basis for a natural science paper on the way the visual system works. <small>(the code was in C++ for computation and Python for visualization)</small>'
      }, {
        date: 'May - August 2016',
        label: 'Internship at Soixante Circuits',
        text: 'Soixante Circuits is an Interactive Design agency in Paris working for various international companies. After being part of the team developing all promotional applications for Coca Cola during the UEFA Champions League in France, I developed one of the four applications used in an exhibition for the anniversary of Tiffany & Co in China. <small>(some code can be found on github at github.com/brendaoud - it was all made in JavaScript and NodeJS)</small>'
      }, {
        date: 'Since 2015',
        label: 'Developing MLVA website for Université Paris Sud',
        text: 'The website was old and the code was not maintainable but it was also commonly used by many biologists worldwide. With another student, we remade it from scratch using good practices and well-documented libraries. I am currently ensuring maintenance and adding functionalities. <small>(the website is available at http://microbesgenotyping.i2bc.paris-saclay.fr/ - the code is in PHP and JavaScript)</small>'
      }, {
        date: '2014 - 2015',
        label: 'Websites for school clubs',
        text: `
          I had multiple opportunities to use my programming skills to help my school's clubs.
          I updated the website of the Art Bureau to make it more flexible as the theme is to change every year. <small>(the website is available at http://bda.ensta-paristech.fr - the code is in PHP and JavaScript)</small><br>
          I updated the website of the art festival <i>les Arts en Scène</i>, I refreshed the front-end to make it more responsive and created a back-end that allows organizers to contact the artists more  easily. <small>(the website is available at http://lesartsenscene.ensta-paristech.fr/ - the code is in PHP and JavaScript)</small>`
      }, {
        date: '2014 - 2015',
        label: 'Managing a school club',
        text: 'For one year, each month I organized with a team of 15 to 20 people a meal for around 200 people. I was in charge of the cooking and the service.'
      }]
    }, {
      isTable: true,
      title: 'Education',
      list: [{
        date: 'Since 2014',
        label: 'ENSTA ParisTech',
        text: 'Engineering degree program<br>Specialized in Information Systems and Technology'
      }, {
        date: '2012 - 2014',
        label: 'Preparatory School',
        text: 'Lycée Charlemagne, Paris<br>Focused on Mathematics, Physics and Computer Sciences<br>Equivalent to a 2-year university degree in Mathematics and mandatory to apply for engineering schools.'
      }, {
        date: '2012',
        label: 'Scientific Baccalauréat',
        text: 'Lycée Victor Hugo, Paris'
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
