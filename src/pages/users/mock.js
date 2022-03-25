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
  firstUser: [
    {
      "id": "8d49754d-9903-497c-bb5b-f3a33b10080f",
      "name": "Rivas Nieves",
      "email": "rivasnieves@corpulse.com",
      "img": rosaFloresImg,
      "age": 63,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "3f6dd28a-1f1a-480c-b63e-b6ad653480e7",
      "name": "Holt Lloyd",
      "email": "holtlloyd@corpulse.com",
      "img": rosaFloresImg,
      "age": 29,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "dae31e2f-4b6c-4dfa-8172-7e9fcb2630d3",
      "name": "Houston Sutton",
      "email": "houstonsutton@corpulse.com",
      "img": rosaFloresImg,
      "age": 60,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "214158e4-1175-4b39-b59e-76e28a9cba5f",
      "name": "Faith Bird",
      "email": "faithbird@corpulse.com",
      "img": rosaFloresImg,
      "age": 47,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "8cb5ac8c-3423-48a7-8d77-fe0b0c7b27de",
      "name": "Mindy Ewing",
      "email": "mindyewing@corpulse.com",
      "img": rosaFloresImg,
      "age": 21,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "97449175-c452-4a32-9c85-73603737c7dc",
      "name": "Barlow Hill",
      "email": "barlowhill@corpulse.com",
      "img": rosaFloresImg,
      "age": 29,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "e310836f-ddad-40b9-bcc3-429d6c6cae7f",
      "name": "Cornelia Green",
      "email": "corneliagreen@corpulse.com",
      "img": rosaFloresImg,
      "age": 25,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "7bb3963b-037a-4afb-b4a9-fe0e2f5ff467",
      "name": "Vargas Kemp",
      "email": "vargaskemp@corpulse.com",
      "img": rosaFloresImg,
      "age": 30,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "23e487d5-ac88-471f-8541-608f9b293fe5",
      "name": "Jocelyn Nixon",
      "email": "jocelynnixon@corpulse.com",
      "img": rosaFloresImg,
      "age": 44,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "a509333e-4d8e-4eb6-8e83-61bd44638a4e",
      "name": "Barry Underwood",
      "email": "barryunderwood@corpulse.com",
      "img": rosaFloresImg,
      "age": 68,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "2c044720-7db9-4e30-af5e-df54aff56c81",
      "name": "Sweet West",
      "email": "sweetwest@corpulse.com",
      "img": rosaFloresImg,
      "age": 17,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "dfd407d3-4195-44ac-b56b-e20e5f928dba",
      "name": "Karyn French",
      "email": "karynfrench@corpulse.com",
      "img": rosaFloresImg,
      "age": 17,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "8faf7383-12ee-4476-a5b6-d4428b03b10d",
      "name": "Dunn Banks",
      "email": "dunnbanks@corpulse.com",
      "img": rosaFloresImg,
      "age": 52,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "9d77ed95-5d92-45c9-a617-0aadbb4363ab",
      "name": "Golden Wilkinson",
      "email": "goldenwilkinson@corpulse.com",
      "img": rosaFloresImg,
      "age": 69,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "fcff5861-6948-4f7a-bec6-0c3ecee7c336",
      "name": "Beatriz Craft",
      "email": "beatrizcraft@corpulse.com",
      "img": rosaFloresImg,
      "age": 70,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "99349f1b-31d0-480b-8f44-b7b57ab0a734",
      "name": "Lynne Hansen",
      "email": "lynnehansen@corpulse.com",
      "img": rosaFloresImg,
      "age": 51,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "9519f1e7-781b-41b5-9fd1-fdea46d015b1",
      "name": "Odessa Burton",
      "email": "odessaburton@corpulse.com",
      "img": rosaFloresImg,
      "age": 26,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "ea7545a5-bd42-421a-adba-89dc2e94bc27",
      "name": "Battle Vasquez",
      "email": "battlevasquez@corpulse.com",
      "img": rosaFloresImg,
      "age": 38,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "5f5fc8ec-d247-4127-9cbb-ede7a713b924",
      "name": "Bentley Page",
      "email": "bentleypage@corpulse.com",
      "img": rosaFloresImg,
      "age": 77,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "784f6ce6-4398-497d-9e38-c90f07ba3d31",
      "name": "Mendoza Mayo",
      "email": "mendozamayo@corpulse.com",
      "img": rosaFloresImg,
      "age": 64,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "ebefb084-cb02-4a7a-97bf-7b5ca1118267",
      "name": "Mae Harrington",
      "email": "maeharrington@corpulse.com",
      "img": rosaFloresImg,
      "age": 14,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "c2f4048e-65ef-4e89-a261-2ed805f61481",
      "name": "Montoya Rodgers",
      "email": "montoyarodgers@corpulse.com",
      "img": rosaFloresImg,
      "age": 37,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "86590833-4128-4afc-80dc-1a931e365470",
      "name": "Murphy Murray",
      "email": "murphymurray@corpulse.com",
      "img": rosaFloresImg,
      "age": 57,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "d790d716-e910-40c6-ad26-b651fc5cbf73",
      "name": "Gibson Vang",
      "email": "gibsonvang@corpulse.com",
      "img": rosaFloresImg,
      "age": 34,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "31709dbe-f54b-41b0-9852-00b904006a99",
      "name": "Dee Thomas",
      "email": "deethomas@corpulse.com",
      "img": rosaFloresImg,
      "age": 39,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "21bf8b1a-b531-42b0-9b51-5b3c43364a67",
      "name": "Goff Ferrell",
      "email": "goffferrell@corpulse.com",
      "img": rosaFloresImg,
      "age": 38,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "780723e2-3b4c-443e-868e-2ea762506c10",
      "name": "Angel Moss",
      "email": "angelmoss@corpulse.com",
      "img": rosaFloresImg,
      "age": 51,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "5074b37a-b6c9-402a-ab1e-897e84d18624",
      "name": "Nadine Acosta",
      "email": "nadineacosta@corpulse.com",
      "img": rosaFloresImg,
      "age": 21,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "7878d1cf-bdef-413a-bd82-bda49175df42",
      "name": "Garza Francis",
      "email": "garzafrancis@corpulse.com",
      "img": rosaFloresImg,
      "age": 49,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "0043b9de-c6ae-4aee-96f6-5b6de0da7bc4",
      "name": "Greene Hutchinson",
      "email": "greenehutchinson@corpulse.com",
      "img": rosaFloresImg,
      "age": 14,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "7d128d17-f764-41b2-ae77-890bfa551f97",
      "name": "Baxter Brady",
      "email": "baxterbrady@corpulse.com",
      "img": rosaFloresImg,
      "age": 36,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "36d639b3-acab-48a7-8826-e2247376d09a",
      "name": "Jefferson Blackburn",
      "email": "jeffersonblackburn@corpulse.com",
      "img": rosaFloresImg,
      "age": 72,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "93f938df-5916-4fad-84e3-67c0c861d01e",
      "name": "Benjamin Rowland",
      "email": "benjaminrowland@corpulse.com",
      "img": rosaFloresImg,
      "age": 32,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "4acede81-17e2-4448-94d7-414d37627bab",
      "name": "Kari Hahn",
      "email": "karihahn@corpulse.com",
      "img": rosaFloresImg,
      "age": 48,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "e9462240-ccb6-47fa-91e8-474e89c3638a",
      "name": "Roman Crawford",
      "email": "romancrawford@corpulse.com",
      "img": rosaFloresImg,
      "age": 23,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "4f82ba83-120c-42b6-9c43-a494a6996e6e",
      "name": "Charlotte Barrera",
      "email": "charlottebarrera@corpulse.com",
      "img": rosaFloresImg,
      "age": 42,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "cb4434e9-12ef-479a-9cf7-830fd4dd0325",
      "name": "Fannie Haynes",
      "email": "fanniehaynes@corpulse.com",
      "img": rosaFloresImg,
      "age": 55,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "69e62915-83c0-4ee1-aaf8-eb7778d486c6",
      "name": "Larsen Chase",
      "email": "larsenchase@corpulse.com",
      "img": rosaFloresImg,
      "age": 22,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "ccf8e4fb-5575-4a69-9291-37316df748c0",
      "name": "Earnestine Mullen",
      "email": "earnestinemullen@corpulse.com",
      "img": rosaFloresImg,
      "age": 18,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "7c8260e8-b88f-4318-b456-a71d099daf0e",
      "name": "Sara Porter",
      "email": "saraporter@corpulse.com",
      "img": rosaFloresImg,
      "age": 22,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "e68256c6-6b45-4330-b981-99bca7b4a6a5",
      "name": "Berger Tyler",
      "email": "bergertyler@corpulse.com",
      "img": rosaFloresImg,
      "age": 62,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "778c4122-11c2-4c76-86ba-f343d03f4c85",
      "name": "Mccormick Buck",
      "email": "mccormickbuck@corpulse.com",
      "img": rosaFloresImg,
      "age": 27,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "24973a39-b13c-4711-8a00-bacdbecf82b9",
      "name": "Lea Beck",
      "email": "leabeck@corpulse.com",
      "img": rosaFloresImg,
      "age": 75,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "0dc84bcd-7a8c-4ab9-9fe1-3df0ef514985",
      "name": "Lucille Kent",
      "email": "lucillekent@corpulse.com",
      "img": rosaFloresImg,
      "age": 23,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "5b4b4ecf-e113-49e9-a19b-305f648f02b2",
      "name": "Pearson Dickson",
      "email": "pearsondickson@corpulse.com",
      "img": rosaFloresImg,
      "age": 16,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "9459508c-f5d7-4904-a5f4-fbadee3e3232",
      "name": "Lambert Pickett",
      "email": "lambertpickett@corpulse.com",
      "img": rosaFloresImg,
      "age": 35,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "7d5aa573-53e5-4ad3-9b16-a802cf68d917",
      "name": "Avis Riley",
      "email": "avisriley@corpulse.com",
      "img": rosaFloresImg,
      "age": 41,
      "color": "success",
      "status": "Actif"
    },
    {
      "id": "d28e3aa4-bdd9-46b8-a7d8-4662a38fded9",
      "name": "Cristina Dillard",
      "email": "cristinadillard@corpulse.com",
      "img": rosaFloresImg,
      "age": 16,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "44e5f843-75c9-42b8-a84c-993352841acf",
      "name": "Heidi Erickson",
      "email": "heidierickson@corpulse.com",
      "img": rosaFloresImg,
      "age": 77,
      "color": "secondary-red",
      "status": "Désactivé"
    },
    {
      "id": "4fd80f79-0d7b-4a5b-b93d-4372e90bc52d",
      "name": "Sybil Vazquez",
      "email": "sybilvazquez@corpulse.com",
      "img": rosaFloresImg,
      "age": 35,
      "color": "success",
      "status": "Actif"
    }
  ]


}

export default mock;
