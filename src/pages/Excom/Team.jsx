import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";

const Team = ({ pos, image, name, link }) => {

  var profileImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center'
};

return (
  <div className="card-container mt-40 m-auto w-72 h-35 bg-gray-50 rounded-lg flex flex-col justify-between items-center relative"
    style={{
        boxShadow: "-5px 5px 20px rgba(255, 105, 180, 0.5), 5px 5px 20px rgba(255, 105, 185, 0.5)"
    }}
>
  <div className="profileImage absolute -top-40 w-40 h-40" style={profileImage}></div>
  <div className="card-text text-center mt-2 flex flex-col">
      <h2 className="font-bold text-black text-xl mb-2" style={{ fontFamily: "src/assets/Fonts/Ubuntu-Light.ttf", fontSize:'1.28rem' }}>{name}</h2>
      <p className="text-grey-800 text-lg" style={{ fontFamily: "Poppins-Medium" }}>{pos}</p>
      <div className="flex justify-center items-center">
        <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 text-4xl mt-2 mb-2">
          <AiFillLinkedin />
        </a>
      </div>
  </div>

    {/* // <div className="rounded bg-transparent bg-opacity-0 overflow-hidden">
    //     <img className="mx-auto w-5/6 self-center" src={image} alt={pos} />
    //     <div className="px-6 py-4 text-center">
    //         <div className="bg-white shadow-2xl rounded-b-3xl">
    //             <div className="font-bold text-black text-base mb-2" style={{ fontFamily: "src/assets/Fonts/Ubuntu-Light.ttf" }}>{pos}</div>
    //             <p className="text-grey-800 text-2xl" style={{ fontFamily: "Poppins-Medium" }}>{name}</p>
    //             <div className="flex justify-center items-center">
    //                 <a href={link} target="_blank" rel="noreferrer" className="text-blue-800 text-4xl mt-2 mb-2">
    //                     <AiFillLinkedin />
    //                 </a>
    //             </div>
    //         </div>
    //     </div> */}
      {/* <div className="rounded-full h-[80px] w-[50px] bg-transparent bg-opacity-0 overflow-hidden flex items-center justify-center">
  <div className="shadow-lg bg-white rounded-full p-4 text-center">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}</p>
    <div className="flex justify-center items-center">
      <a href={link} target="_blank" rel="noreferrer" className="text-blue-800 text-4xl">
        <AiFillLinkedin />
      </a>
    </div>
  </div>
</div> */}

      {/* <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div> */}
      
    </div>
  );
};

export default Team;
