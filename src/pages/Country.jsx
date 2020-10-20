import Axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import {Link} from "react-router-dom"
import  Paginate   from "../component/Datatable/Paginate";
import Tableheader  from "../component/Datatable/Tableheader";
import Loadding from "../component/Loadding";


const Country = () => {
  const [state, setstate] = useState([]);
  const [totalItems, settotalitems] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [loaders, setloaders] = useState(true)
  const total_item_perpage = 10;
  useEffect(() => {
    onloadData();

  }, []);

  const onloadData = async () => {
    await Axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => {
        console.log(res.data);
        setstate(res.data);
        setloaders(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const headers = [
    {name:"No", field:"id"},
    {name:"Country", field:"Country"},
    {name:"Cases", field:"Cases"},
    {name:"Recovered", field:"Recovered"},
    {name:"Deaths", field:"Deaths"},
    {name:"Action", field:"Action"}
  ]


  const statedata = useMemo(() => {
    let statecomment = state;
    settotalitems(statecomment.length)
    return statecomment.slice((currentpage -1) * total_item_perpage, (currentpage - 1) * total_item_perpage + total_item_perpage );
  }, [state, currentpage])







  return (
    <>
      <section className="table-filter">
        <div className="container">
          <div className="row">
          {loaders ?  <Loadding/> :
            <div className="col-md-12">
         
<table className="table my-country-table table-striped">
  
                 <Tableheader headers={headers}/>
               
                <tbody>
                 {
                   statedata.map((country, index)=>(
                     <tr key={country.country}>
                       <td>{index + 1}</td>
                       <td>{country.country}</td>
                       <td>{country.cases}</td>
                       <td>{country.recovered}</td>
                       <td>{country.deaths}</td>
                       <td><button className="btn btn-danger"><Link to={`/country/${country.country}`} stytle={{color:'#fff'}}>View</Link></button></td>
                     </tr>
                   ))
                 }
                </tbody> 
              </table>
              
           <Paginate 
            total={totalItems}
            itemperpage = {total_item_perpage}
            currentpage={currentpage} 
            onPageChange={ page => setcurrentpage(page)} 
           />
            </div>
                }
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
