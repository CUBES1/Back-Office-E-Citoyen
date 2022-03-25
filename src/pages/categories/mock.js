import ellieSmithImg from "../../assets/tables/ellieSmithImg.png";
import floydMilesImg from "../../assets/tables/floydMilesImg.png";
import rosaFloresImg from "../../assets/tables/rosaFloresImg.png";
import janeCooperImg from "../../assets/tables/janeCooper.png";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";


// https://json-generator.com/#

// [
//   '{{repeat(5, 20)}}',
//   {
   
//     id: '{{id()}}',
//     name: '{{firstName()}} {{surname()}}',
//     img: 'https://source.unsplash.com/random/35×35',
//     titre: '{{lorem(4, "words")}}',
//     categorie:  '{{lorem(1, "words")}}',
//     color: '{{random("success", "secondary-red", "secondary-yellow")}}',
//     status: function (tags, index) { 
//       switch(this.color) {
//         case 'success':
//           return 'Publié'
//         case 'secondary-red':
//           return 'Dé-publié'
//         default:
//           return 'Attente validation'
//       }
//     }
    
    
//   }
// ]

const mock = {
  firstCat: [
    {
      "id": "8d49754d-9903-497c-bb5b-f3a33b10080f",
      "name": "Actualités",
      "desc": "Informations liée à l'actualitée",
      "nbRess": "12",
      "date": "23/02/2022",
      "color": "success",
      "status": "Actif",
    },
    {
      "id": "8d49754d-9903-497c-bb5b-f3a33b10082f",
      "name": "Aides",
      "desc": "Aides versée à la population",
      "nbRess": "8",
      "date": "23/03/2022",
      "color": "success",
      "status": "Actif",
    },
    {
      "id": "8d49754d-9903-497c-bb5b-f3a33b10083f",
      "name": "Etudiants",
      "desc": "Ressources liées à la vie étudiante",
      "nbRess": "4",
      "date": "23/03/2022",
      "color": "success",
      "status": "Actif",
    },
    {
      "id": "8d49754d-9903-497c-bb5b-f3a33b10084f",
      "name": "Drôle",
      "desc": "Ressource humoristique",
      "nbRess": "2",
      "date": "23/03/2022",
      "color": "secondary-red",
      "status": "Désactivé",
    },
  ]


}

export default mock;
