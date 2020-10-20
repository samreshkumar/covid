import Axios from "axios";
import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
    const [user, setuser] = useState({});

    useEffect(() => {
        onloadData();
    }, [])

    const onloadData = async () => {
        await Axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${name}`)
            .then((res) => {
                console.log(res.data);
                setuser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <>
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{user.country}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            Cases: {user.cases}
                        </div>
                        <div className="col-md-6">
                            Deaths: {user.deaths}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1><Link to="/country">Back</Link></h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default CountryDetails;