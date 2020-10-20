import Axios from "axios";
import React, { useState, useEffect, Suspense, lazy } from "react";

const onloadData = async () => {
    await Axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => {
        console.log(res.data);
        setstate(res.data);
        setIndia(res.data[2]);
        setChangeValue(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
   

export default onloadData;