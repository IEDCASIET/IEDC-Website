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
    </div>
  );
};

export default Team;
