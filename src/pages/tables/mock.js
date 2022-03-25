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
//   '{{repeat(50, 50)}}',
//   {

//     id: '{{guid()}}',
//     name: '{{firstName()}} {{surname()}}',
//  	img: 'rosaFloresImg',
//     titre: '{{lorem(4, "words")}}',
//     date: '{{date(new Date(2022, 0, 1), new Date(), "dd/MM/YYYY hh:mm")}}',
//     categorie:  '{{lorem(1, "words")}}',
//     color: '{{random("success", "secondary-red", "secondary-yellow")}}',
//     status: function (tags, index) { 
//       switch(this.color) {
//         case 'success':
//           return 'Publié';
//         case 'secondary-red':
//           return 'Dé-publié';
//         default:
//           return 'Attente validation';
//       }
//     }   

//   }
// ]

const mock = {
  firstTable: [
    {
      "id": "136d2f32-166f-4654-8bb9-783f00232a41",
      "name": "Vincent Gentry",
      "img": janeCooperImg,
      "titre": "ex veniam ullamco Lorem",
      "date": "23/01/2022 02:54",
      "categorie": "aliquip",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "fc8a7c5c-d288-4a66-a47a-160a711bfc8e",
      "name": "Eleanor Hughes",
      "img": janeCooperImg,
      "titre": "nisi irure qui quis",
      "date": "13/02/2022 11:14",
      "categorie": "id",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "f0594409-d306-4470-9319-f17d22d6e11b",
      "name": "Vang Montoya",
      "img": janeCooperImg,
      "titre": "ex irure fugiat magna",
      "date": "08/03/2022 02:27",
      "categorie": "sit",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "01c4d86a-cee4-4418-adb7-f69efd9896f1",
      "name": "Tricia Warner",
      "img": janeCooperImg,
      "titre": "exercitation eu nulla nisi",
      "date": "10/01/2022 05:43",
      "categorie": "tempor",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "33c8253f-4367-4212-95b2-e653d3133b6e",
      "name": "Valentine Saunders",
      "img": janeCooperImg,
      "titre": "nisi voluptate ullamco quis",
      "date": "06/03/2022 08:08",
      "categorie": "voluptate",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "c387c1b4-468a-46ef-b9fd-e22e028bd951",
      "name": "Garrett Giles",
      "img": janeCooperImg,
      "titre": "cillum ut quis commodo",
      "date": "12/02/2022 08:42",
      "categorie": "in",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "09baee9c-80c1-42b6-a6e7-14dd7038c698",
      "name": "Jannie Cardenas",
      "img": janeCooperImg,
      "titre": "excepteur ea duis nulla",
      "date": "19/02/2022 02:04",
      "categorie": "anim",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "f743a1e5-9675-4514-9dd1-bc9e9bd9e03f",
      "name": "Dona Cruz",
      "img": janeCooperImg,
      "titre": "eu veniam voluptate excepteur",
      "date": "05/03/2022 12:09",
      "categorie": "exercitation",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "6a34781d-f27b-43cf-802c-da553eed2e14",
      "name": "Nola Atkinson",
      "img": janeCooperImg,
      "titre": "in cillum elit occaecat",
      "date": "06/01/2022 11:49",
      "categorie": "fugiat",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "143510a9-9272-484c-9845-8fb286ddcda6",
      "name": "Adrienne Greene",
      "img": janeCooperImg,
      "titre": "dolore labore proident quis",
      "date": "22/02/2022 07:50",
      "categorie": "est",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "d85edc98-f5d8-4c26-b08f-4ed7a83f627d",
      "name": "Figueroa Stanley",
      "img": janeCooperImg,
      "titre": "eiusmod Lorem laboris eu",
      "date": "08/03/2022 11:31",
      "categorie": "nisi",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "f887cc45-e587-47c4-8c09-af409a2cb98d",
      "name": "Catherine Hatfield",
      "img": janeCooperImg,
      "titre": "occaecat aliquip Lorem commodo",
      "date": "23/01/2022 05:30",
      "categorie": "labore",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "a6367d8f-0dba-4155-a324-d17298124066",
      "name": "Frances Lott",
      "img": janeCooperImg,
      "titre": "commodo velit Lorem do",
      "date": "29/01/2022 02:34",
      "categorie": "mollit",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "382d7ca0-7780-424e-98e7-3a927e2e8a66",
      "name": "Giles Boyd",
      "img": janeCooperImg,
      "titre": "aliqua velit est cupidatat",
      "date": "06/02/2022 07:29",
      "categorie": "cillum",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "2fe050d0-8ae5-47bd-816b-ee6d0e92404c",
      "name": "Rivas Mullen",
      "img": janeCooperImg,
      "titre": "dolor incididunt pariatur elit",
      "date": "04/03/2022 07:10",
      "categorie": "nulla",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "ecffd358-f5c4-4488-883e-3b1f8d9aa775",
      "name": "Wood Wallace",
      "img": janeCooperImg,
      "titre": "mollit eiusmod sint in",
      "date": "06/01/2022 08:57",
      "categorie": "dolore",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "46e8ed4f-7cd9-4e83-885a-a153811bbdb8",
      "name": "Angelita Jacobs",
      "img": janeCooperImg,
      "titre": "proident qui proident voluptate",
      "date": "28/01/2022 09:44",
      "categorie": "laborum",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "8f3285be-6fcd-44f7-90cc-b6a0d20af3ec",
      "name": "Lakeisha Knapp",
      "img": janeCooperImg,
      "titre": "adipisicing non esse non",
      "date": "22/02/2022 02:46",
      "categorie": "sint",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "926bc77d-7562-4bd3-a973-dab46e50ccb2",
      "name": "Louisa Moreno",
      "img": janeCooperImg,
      "titre": "occaecat eu minim cillum",
      "date": "17/01/2022 08:59",
      "categorie": "exercitation",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "b196b841-6c09-49d6-aa41-26bd4ffb22c0",
      "name": "Delia Hardin",
      "img": janeCooperImg,
      "titre": "cillum ullamco cupidatat laborum",
      "date": "06/03/2022 08:29",
      "categorie": "occaecat",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "369dab50-c709-4589-bc80-4fe13cc113fd",
      "name": "Bettye Holder",
      "img": janeCooperImg,
      "titre": "occaecat labore aliqua ipsum",
      "date": "25/01/2022 04:23",
      "categorie": "enim",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "97c14c8e-1881-43a3-9321-6c68ca4e555c",
      "name": "Petty Grimes",
      "img": janeCooperImg,
      "titre": "voluptate est fugiat culpa",
      "date": "19/03/2022 07:38",
      "categorie": "voluptate",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "75fe8f6b-356e-45fc-bba6-b5fcaae72f82",
      "name": "Ruthie Mays",
      "img": janeCooperImg,
      "titre": "occaecat exercitation consequat minim",
      "date": "13/02/2022 05:08",
      "categorie": "tempor",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "40623903-3e75-4593-9039-7e77f532b22a",
      "name": "Toni Delaney",
      "img": janeCooperImg,
      "titre": "commodo consequat sunt ipsum",
      "date": "06/03/2022 09:27",
      "categorie": "esse",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "69f0e35e-5e7f-4dac-b4cc-89f708b9e083",
      "name": "Clemons Hartman",
      "img": janeCooperImg,
      "titre": "eiusmod id deserunt elit",
      "date": "16/03/2022 08:24",
      "categorie": "esse",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "0441555c-3602-4fe0-b165-df08d17838c2",
      "name": "Mcfadden Mcdonald",
      "img": janeCooperImg,
      "titre": "dolore eu ea reprehenderit",
      "date": "24/01/2022 02:46",
      "categorie": "nulla",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "0e00c8d5-d0bf-442c-b44d-7322e3aba896",
      "name": "Jackson Copeland",
      "img": janeCooperImg,
      "titre": "tempor culpa minim ex",
      "date": "18/03/2022 07:15",
      "categorie": "aliquip",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "73888ca8-4371-46a9-8192-c58dfecaf600",
      "name": "Walter Slater",
      "img": janeCooperImg,
      "titre": "pariatur aliqua eiusmod dolore",
      "date": "19/03/2022 12:56",
      "categorie": "dolore",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "51c76952-6931-45ca-a9fd-5f76187b7117",
      "name": "Colleen Banks",
      "img": janeCooperImg,
      "titre": "et pariatur velit duis",
      "date": "18/03/2022 07:31",
      "categorie": "ullamco",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "528d65da-2aea-460e-9ad1-44ad423a5160",
      "name": "Elsa Chan",
      "img": janeCooperImg,
      "titre": "cupidatat nostrud eu in",
      "date": "12/03/2022 12:33",
      "categorie": "eu",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "fc558e6a-b26c-4aed-bf30-1bfa9c8b69d0",
      "name": "Herman Griffith",
      "img": janeCooperImg,
      "titre": "ex id qui quis",
      "date": "22/02/2022 04:32",
      "categorie": "ipsum",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "ce15590d-f17b-47f8-8b30-00daa42eba7a",
      "name": "Contreras Hayden",
      "img": janeCooperImg,
      "titre": "quis mollit ullamco excepteur",
      "date": "15/02/2022 06:55",
      "categorie": "aliqua",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "ac9e7af4-f7aa-4d46-b07b-a6e2c1c35e4a",
      "name": "Randi Riddle",
      "img": janeCooperImg,
      "titre": "sint officia anim fugiat",
      "date": "17/03/2022 12:08",
      "categorie": "proident",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "043f785a-bbb9-4065-a02b-b34a71e8f9d4",
      "name": "Pierce Rodgers",
      "img": janeCooperImg,
      "titre": "sit nostrud fugiat ex",
      "date": "07/03/2022 10:17",
      "categorie": "aute",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "da73eabc-263f-4b43-9339-b33b41b23c18",
      "name": "Lucy Golden",
      "img": janeCooperImg,
      "titre": "minim nulla proident esse",
      "date": "09/01/2022 05:19",
      "categorie": "Lorem",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "eb4015fe-528c-490d-a307-d9d8bbf6aa60",
      "name": "Mack Walker",
      "img": janeCooperImg,
      "titre": "elit culpa laborum exercitation",
      "date": "03/02/2022 11:13",
      "categorie": "dolor",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "f39ab9f9-e0e8-49bc-9d2b-0153f08d2973",
      "name": "Eliza Mckay",
      "img": janeCooperImg,
      "titre": "id cillum commodo enim",
      "date": "01/02/2022 06:41",
      "categorie": "officia",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "0b9f8f79-ccb4-4748-9150-82545b784d31",
      "name": "Lorene Vaughn",
      "img": janeCooperImg,
      "titre": "nulla magna elit voluptate",
      "date": "22/03/2022 03:19",
      "categorie": "dolore",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "f3f91176-4b2c-4c2e-a7c4-348fc358ecba",
      "name": "Mccoy Franks",
      "img": janeCooperImg,
      "titre": "ex mollit dolore tempor",
      "date": "31/01/2022 07:00",
      "categorie": "officia",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "11a4fb0e-d637-442a-b820-d986126a0093",
      "name": "Oneil Reese",
      "img": janeCooperImg,
      "titre": "aliquip reprehenderit ipsum est",
      "date": "12/01/2022 11:27",
      "categorie": "amet",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "99ca3111-73e7-4f07-8f87-2d0ed49391d0",
      "name": "Garrison Nichols",
      "img": janeCooperImg,
      "titre": "mollit labore mollit velit",
      "date": "17/01/2022 09:31",
      "categorie": "ad",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "2f1f6e19-f9d9-4675-a231-8f660e7969ec",
      "name": "Jarvis Lynch",
      "img": janeCooperImg,
      "titre": "ea sunt aliquip quis",
      "date": "26/02/2022 02:36",
      "categorie": "eiusmod",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "91d4058d-2f15-44b7-be46-203d7967e387",
      "name": "Macias Mcintosh",
      "img": janeCooperImg,
      "titre": "ad fugiat consectetur Lorem",
      "date": "06/02/2022 04:13",
      "categorie": "sunt",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "aaf16c89-c7e7-4602-9dff-96eeaa7f5c6e",
      "name": "Kasey Tate",
      "img": janeCooperImg,
      "titre": "laborum est ex pariatur",
      "date": "05/01/2022 08:08",
      "categorie": "ex",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "0fc69844-222d-48bf-a92b-da43355b0ee5",
      "name": "Lopez Mcconnell",
      "img": janeCooperImg,
      "titre": "pariatur irure cillum elit",
      "date": "08/02/2022 09:20",
      "categorie": "ea",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "8eec2111-cb70-4d00-9504-1afa8b8795ab",
      "name": "Hinton Lopez",
      "img": janeCooperImg,
      "titre": "cupidatat nostrud proident labore",
      "date": "30/01/2022 08:47",
      "categorie": "ea",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "1145272e-698b-4fde-96a7-1997a1f4174b",
      "name": "Margarita Hill",
      "img": janeCooperImg,
      "titre": "mollit Lorem in aliquip",
      "date": "01/01/2022 06:16",
      "categorie": "consectetur",
      "color": "success",
      "status": "Publié"
    },
    {
      "id": "d3fbca3f-dc2d-4e72-8f73-a27ad196b8a6",
      "name": "Wilkinson Bryan",
      "img": janeCooperImg,
      "titre": "Lorem sint quis non",
      "date": "15/01/2022 12:21",
      "categorie": "consequat",
      "color": "secondary-yellow",
      "status": "Attente validation"
    },
    {
      "id": "77428443-d204-4cd8-975f-d378d3a1d7fa",
      "name": "Rush Andrews",
      "img": janeCooperImg,
      "titre": "aliquip laboris consectetur mollit",
      "date": "21/02/2022 01:50",
      "categorie": "enim",
      "color": "secondary-red",
      "status": "Dé-publié"
    },
    {
      "id": "7cae252d-6e10-4f5b-94aa-33ed26f38f75",
      "name": "Alta Wheeler",
      "img": janeCooperImg,
      "titre": "ut in Lorem fugiat",
      "date": "28/01/2022 04:50",
      "categorie": "ex",
      "color": "secondary-red",
      "status": "Dé-publié"
    }
  ]
}

export default mock;
