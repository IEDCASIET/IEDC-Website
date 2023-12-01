import React from 'react';
import Team from './Team';
import Card from '../../components/Card/Card';
import ACL from '../../assets/Excom/Lijo.png'
import ML from '../../assets/Excom/Alan.png'
import CIL from '../../assets/Excom/Sanchu.png'
import ACIL from '../../assets/Excom/Ajin.png'
import FL from '../../assets/Excom/Ben.png'
import IL from '../../assets/Excom/Nowar.png'
import ANO from '../../assets/Excom/RahulSir.png'
import AFL from '../../assets/Excom/Aparna.png'
import CL from '../../assets/Excom/Aaron.png'
import ACIL2 from '../../assets/Excom/Lakshmi.png'
import AEIC from '../../assets/Excom/Melvin.png'
import QOA from '../../assets/Excom/Noel.png'
import EIC from '../../assets/Excom/Rahul.png'
import ACL2 from '../../assets/Excom/Arjun.png'
import AQOA from '../../assets/Excom/Adarsh.png'
import AIL from '../../assets/Excom/Hari.png'
import ATL from '../../assets/Excom/Ardhra.png'
import AWEL from '../../assets/Excom/Malavika.png'
import AEIC2 from '../../assets/Excom/Nandana.png'
import WEL from '../../assets/Excom/Nanditha.png'
import NO from '../../assets/Excom/Eldhosesir.png'
import TL from '../../assets/Excom/Alvin.png'
// image 310px x 375px

const reasons = [
  {
    pos: 'Nodal Officer',
    image: NO,
    name: 'Prof. Eldhose P Sim',
    link: 'https://www.linkedin.com/in/eldhose-p-sim',
  },
  {
    pos: 'Asst. Nodal Officer',
    image: ANO,
    name: 'Dr. Rahul Krishnan',
    link: 'https://www.linkedin.com/in/dr-rahul-krishnan-a32699a5',
  },
  {
    pos: 'IEDC lead',
    image: IL,
    name: 'Nowar Lal',
    link: 'https://in.linkedin.com/in/nowar-lal-290140212',
  },
  {
    pos: 'Asst. IEDC Lead',
    image: AIL,
    name: 'U Harikrishnan',
    link: 'https://www.linkedin.com/in/u-hari-krishnan-85a752215',
  },
  {
    pos: 'Technology Lead',
    image: TL,
    name: 'Alvin Regin',
    link: 'https://www.linkedin.com/in/alvin-regin-3065b722b',
  },
  {
    pos: 'Asst. Technology Lead',
    image: ATL,
    name: 'Ardhra K Shaji',
    link: '',
  },
  {
    pos: 'Event Lead & IPR Coordinator',
    image: EIC,
    name: 'Rahul James',
    link: 'https://www.linkedin.com/in/rahul-james-907a20274',
  },
  {
    pos: 'Asst. Event Lead & IPR Coordinator',
    image: AEIC,
    name: 'Melvin Mathew Jacob',
    link: 'https://www.linkedin.com/in/melvin-mathew-209812253',
  },
  {
    pos: 'Asst. Event Lead & IPR Coordinator',
    image: AEIC2,
    name: 'Nandana',
    link: 'https://www.linkedin.com/in/nandana135',
  },
  {
    pos: 'Finance Lead',
    image: FL,
    name: 'Benchacko Chittilapilly',
    link: 'https://linkedin.com/in/benchacko-chittilappilly-8bb94b1b7',
  },
  {
    pos: 'Asst. Finance Lead',
    image: AFL,
    name: 'Aparna Prasad',
    link: ' https://www.linkedin.com/in/aparna-prasad-3075b42a3',
  },
  {
    pos: 'Creative and Innovation Lead',
    image: CIL,
    name: 'Sanchu M',
    link: 'https://www.linkedin.com/in/sanchu-m-6b7a231bb',
  },
  {
    pos: 'Asst. Creative and Innovation Lead',
    image: ACIL,
    name: 'Ajin P D',
    link: 'https://in.linkedin.com/in/ajin-p-d-94b37a212',
  },
  {
    pos: 'Asst. Creative and Innovation Lead',
    image: ACIL2,
    name: 'Lakshmi Nandana R',
    link: 'https://www.linkedin.com/in/lakshmi-nandana-504596231',
  },
  {
    pos: 'Community Lead',
    image: CL,
    name: 'Aaron P Laju',
    link: 'https://www.linkedin.com/in/aaronvincent6411/',
  },
  {
    pos: 'Asst. Community Lead',
    image: ACL,
    name: 'Lijo K S',
    link: 'https://www.linkedin.com/in/lijo-k-simon-b90388201',
  },
  {
    pos: 'Asst. Community Lead',
    image: ACL2,
    name: 'Arjun Bittaj',
    link: 'https://www.linkedin.com/in/arjun-bittaj-b16001251',
  },
  {
    pos: 'Women Entrepreneurship Lead',
    image: WEL,
    name: 'Nanditha Nambiar',
    link: 'https://www.linkedin.com/in/nanditha-nambiar-aa66a124b',
  },
  {
    pos: 'Asst. Women Entrepreneurship Lead',
    image: AWEL,
    name: 'Malavika M',
    link: 'https://www.linkedin.com/in/malavika-muraleedharan-84354a292',
  },
  {
    pos: 'Branding and Marketing Lead',
    image: ML,
    name: 'Alan S Puthussery',
    link: 'https://www.linkedin.com/in/alan-s-puthussery-77bb97147',
  },
  {
    pos: 'Quality and Operation Lead',
    image: QOA,
    name: 'Noel Mathew',
    link: 'https://www.linkedin.com/in/noel-mathew-shillow-49b968200',
  },
  {
    pos: 'Asst. Quality and Operation Lead',
    image: AQOA,
    name: 'Adarsh Jomon',
    link: 'https://www.linkedin.com/in/adarsh-jomon-4a1447228',
  },
];

const Excom = () => {
  return (
    <section id='our-execom' className="bg-white-500 text-black h-auto flex flex-col justify-center">
      <div className="text-center mt-32">
        <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-7xl font-semibold inline">Execom</h1>
      </div>
      <div className="p-20 mx-auto flex flex-wrap justify-center gap-20">
      {/* <!-- <div class="p-20 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-20"></div> --> */}
        {reasons.map((item, index) => (
          <Team key={index} {...item} />
        ))}
      </div>
      {/* <Card /> */}
    </section>
  );
};

export default Excom;



// import React from 'react';
// import Lijo from '../../assets/Excom/Lijo.png';
// import { AiFillLinkedin } from "react-icons/ai";

// const Card = ({ item }) => {
//     return (
//         <div className="text-center">
//             <h2 className="text-xl font-medium mb-2">{item.title}</h2>
//             {/* <img src={item.image} alt={item.image} /> */}
//             <p className="text-lg mb-4 font-sans">{item.desc}</p>
//             <a className="text-blue-500" href={item.link} target="_blank" rel="noreferrer" style={{ fontSize: "40px" }}><AiFillLinkedin /></a>
//         </div>
//     );
// };
// const reasons = [
//     {
//         title: "Events Coordinator",
//         // image: Lijo,
//         desc: "Lijo K S",
//         link: ' https://www.linkedin.com/in/anila-s-a16aa2229'
//     },
// ];

// const Excom = () => {
//     return (
//         <section className="bg-white-500 text-black h-screen flex flex-col justify-center mt-0">
//             <div className="text-center mb-4">
//                 <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <h1 className="text-7xl font-semibold inline">Excom</h1>
//             </div>
//             <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
// {/* card 1 */}
//     <div class="rounded overflow-hidden shadow-lg">
//       <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">Mountain</div>
//         <p class="text-gray-700 text-base">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
//         </p>
//       </div>
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//       </div>
//     </div>

// {/* card 2 */}
//     <div class="rounded overflow-hidden shadow-lg">
//       <img class="w-full" src="/river.jpg" alt="River"/>
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">River</div>
//         <p class="text-gray-700 text-base">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
//         </p>
//       </div>
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
//       </div>
//     </div>

// {/* card 3 */}
//     <div class="rounded overflow-hidden shadow-lg">
//       <img class="w-full" src="/forest.jpg" alt="Forest"/>
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">Forest</div>
//         <p class="text-gray-700 text-base">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
//         </p>
//       </div>
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
//       </div>
//     </div>
//     </div>
//         </section>
//     );
// };

// export default Excom;


// import Image from "next/image";
// import style from "./Card.module.css";
// import { AiFillLinkedin } from "react-icons/ai";
// import React from 'react';

// const Card = ({item}) => {
//     return (
//         <div className={style.card}>
//             <h2>{item.title}</h2>
//             <Image src={item.image} alt={item.image} />
//             <p>{item.desc}</p>
//             <a href={item.link} target="_blank" rel="noreferrer" style={{ fontSize: "40px" }}><AiFillLinkedin /></a>
//         </div>
//     )
// }

// const reasons = [
//   {
//     title: "Staff Advisor",
//     image: Lijo,
//     desc: "Prof Anila S",
//     link:' https://www.linkedin.com/in/anila-s-a16aa2229'
//   },
//   {
//     title: "Campus Lead",
//     image: campuslead,
//     desc: "Akshitha Balan",
//     link:' https://www.linkedin.com/in/akshitha-balan-70699228a'
//   },
  //... (rest of the reasons)
// ]

// const Excom = () => {
//   return (
//     <div className={style.reasons}>
//       <div className="container">
//         <h1>Excom Team</h1>
//         <div className={style.box}>
//           {reasons.map((item, index) => (
//             <Card key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Excom;

{/* <p className="text-xl text-gray-800 tracking-wide leading-5 md:leading-6">Nowar Lal</p>
                    <p className="text-lg text-purple-500 tracking-wide leading-5 md:leading-6">CEO IEDC ASIET</p>
                    <p className="text-sm text-gray-500 leading-5 md:leading-6">janedoe@example.com</p> */}