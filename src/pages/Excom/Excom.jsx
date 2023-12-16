import React from 'react';
import Team from './Team';
import './Excom.css'
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
      <div className="execom-text text-center mt-32">
        <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-7xl font-semibold inline">Execom</h1>
      </div>
      <div className="p-20 flex flex-wrap justify-center gap-20">
        {/* mx-auto commented */}
      {/* <!-- <div class="p-20 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-20"></div> --> */}
        {reasons.map((item, index) => (
          <Team key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Excom;