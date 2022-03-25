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
   
//     guid: '{{guid()}}',
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
  firstTable: [
    {
      "id": "7c44ff0d-f45f-4ac0-9767-75b79f10c7ec",
      "name": "Caldwell Weeks",
      "img": ellieSmithImg,
      "titre": "proident ad mollit excepteur",
      "categorie": "proident",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "6b0f7589-8fa6-482c-9a1e-5382c6ec3764",
      "name": "Spears Ellison",
      "img": ellieSmithImg,
      "titre": "eu elit nostrud nostrud",
      "categorie": "eu",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "ef219ec5-ffa8-4730-9bb2-c02422931950",
      "name": "Buchanan Holloway",
      "img": ellieSmithImg,
      "titre": "elit enim quis reprehenderit",
      "categorie": "proident",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "ff9dd059-1d3f-44a2-9bab-25a3e05ad55f",
      "name": "Porter Kelley",
      "img": ellieSmithImg,
      "titre": "incididunt irure nostrud commodo",
      "categorie": "et",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "9d706ebf-35cc-4d7a-ae35-fd37c875ba9d",
      "name": "Beth Douglas",
      "img": ellieSmithImg,
      "titre": "occaecat laborum voluptate ipsum",
      "categorie": "laborum",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "246a0c8c-5b3b-4ea7-beee-b3c349ff3970",
      "name": "Wynn Malone",
      "img": ellieSmithImg,
      "titre": "id laboris voluptate cupidatat",
      "categorie": "exercitation",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "e7fe7e1a-66cc-4b04-8a5c-44e54ec273dc",
      "name": "Bates Frazier",
      "img": ellieSmithImg,
      "titre": "fugiat ut aliqua enim",
      "categorie": "eu",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "abbcc96b-764a-4e12-b30d-aec6aa86086a",
      "name": "Parks Dorsey",
      "img": ellieSmithImg,
      "titre": "est nulla sit amet",
      "categorie": "ut",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "3994ba8d-50e8-4463-b6cf-abf9e671641c",
      "name": "Huff Kinney",
      "img": ellieSmithImg,
      "titre": "consectetur minim fugiat aliquip",
      "categorie": "occaecat",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "d7bfa86f-460a-44c1-8989-b0037f5d26de",
      "name": "Knapp Cortez",
      "img": ellieSmithImg,
      "titre": "irure sit ad qui",
      "categorie": "commodo",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "697b8564-7ee5-4990-ba3b-747a920a0a78",
      "name": "Wilkins Booker",
      "img": ellieSmithImg,
      "titre": "labore eu exercitation qui",
      "categorie": "enim",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "642c8b57-8815-4a4b-b00e-f807dc024e54",
      "name": "Patrice Hamilton",
      "img": ellieSmithImg,
      "titre": "elit ex aliquip consectetur",
      "categorie": "non",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "b6a82a99-c88d-49c0-933b-bc39e6bbeab7",
      "name": "Aurelia Burton",
      "img": ellieSmithImg,
      "titre": "do aliquip magna irure",
      "categorie": "non",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "241f5654-9c9c-45ea-8518-fb37149b2855",
      "name": "Rebekah Howe",
      "img": ellieSmithImg,
      "titre": "et reprehenderit fugiat irure",
      "categorie": "culpa",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "1f2f2781-f738-4a54-9f07-0f57a0c13afc",
      "name": "Rene Berger",
      "img": ellieSmithImg,
      "titre": "cillum enim et irure",
      "categorie": "commodo",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "167daa9a-36ce-431a-8284-24c05adcd641",
      "name": "Irma Calderon",
      "img": ellieSmithImg,
      "titre": "mollit id ut commodo",
      "categorie": "anim",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "25a43297-6302-44ba-941a-af9bfb177ef9",
      "name": "Dodson Patterson",
      "img": ellieSmithImg,
      "titre": "voluptate eiusmod Lorem culpa",
      "categorie": "Lorem",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "53525d50-351c-4e39-81d2-8bff555e6d03",
      "name": "Atkinson Levy",
      "img": ellieSmithImg,
      "titre": "consequat qui pariatur aliqua",
      "categorie": "pariatur",
      "color": "secondary-red",
      "status": "Dé-publié"
    }
  ],



  secondTable: [
    {
      id: "checkbox211",
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      product: "series",
      price: "$5.22",
      date: "5/27/21",
      city: "Pembroke",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox212",
      name: "Ellie Smith",
      email: "ellie.smith@example.com",
      product: "chair pad",
      price: "$53.99",
      date: "3/19/21",
      city: "Austin",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox213",
      name: "Rosa Flores",
      email: "rosa.flores@example.com",
      product: "dishes",
      price: "$12.24",
      date: "4/01/21",
      city: "Naperville",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox214",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox221",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox222",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox223",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox224",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox231",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox232",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox233",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox234",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox241",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox242",
      name: "Ellie Smith",
      email: "ellie.smith@example.com",
      product: "chair pad",
      price: "$53.99",
      date: "3/19/21",
      city: "Austin",
      color: "success",
      status: "Sent",
    },
    {
      id: "checkbox243",
      name: "Floyd Miles",
      email: "floyd.miles@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox244",
      name: "Ellie Smith",
      email: "ellie.smith@example.com",
      product: "chair pad",
      price: "$53.99",
      date: "3/19/21",
      city: "Austin",
      color: "success",
      status: "Sent",
    },
  ],
  transactionsWidget: [
    {
      id: 1,
      icon: basketIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 2,
      icon: joystickIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 3,
      icon: folderIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    },
    {
      id: 4,
      icon: bagIcon,
      category: "Shopping",
      date: "05 Jun 2020 10:00",
      price: "$300",
      description: "Some text",
      dropdownOpen: false,
    }
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Create An Image",
      time: "9 AM",
      completed: false,
    },
    {
      id: 2,
      description: "Team Design Miting",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Create An Image",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Interview With John Hamm",
      time: "4 PM",
      completed: false,
    },
  ]
}

export default mock;
