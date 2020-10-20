import React from "react";

const Tableheader = ({headers}) => {
  return (
    <>
      <thead>
        <tr>
          {
            headers.map((head)=>(
            <th key={head.field}>{head.name}</th>
            ))
          }
         
        </tr>
      </thead>
    </>
  );
};

export default Tableheader;
