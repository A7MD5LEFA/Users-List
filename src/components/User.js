import React, { useState } from "react";

const User = ({ people }) => {

  
  return (
    <>
      {people.map((person) => {
        const { name, address, hobby, id, image } = person;
        const userHobby = hobby.map((hob) => {
          return (
            <div className="hobbyBorder" key={hob}><p className="hobby" >
              {hob}
            </p></div>
          );
        });
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="person-info">
              <h3>{name}</h3>
              <h5>{address}</h5>
              <div className="hoppyConatainer">
                {userHobby}
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default User;
