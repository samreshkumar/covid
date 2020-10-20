import Axios from "axios";
import React, { useState, useEffect} from "react";
import { HorizontalBar, Bar } from "react-chartjs-2";
import HomeCountryDetails from "../component/HomeCountryDetails";

const Home = () => {
  const [state, setstate] = useState([]);
  const [getIndia, setIndia] = useState({});
  const [changeValue, setChangeValue] = useState([]);

  useEffect(() => {
    onloadData();
  }, [setstate, setIndia]);

  const eventHandlar = async (e) => {
    const countryval = e.target.value;
    const result = await Axios.get(
      `https://coronavirus-19-api.herokuapp.com/countries/${countryval}`
    );
    console.log(result);
    setChangeValue(result.data);
  };

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

  const data = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "India data",
        backgroundColor: [
          "rgba(255,99,132,0.5)",
          "rgba(117,234,148,0.5)",
          "rgba(117,213,234,0.5)",
          "rgba(255, 0, 0, 0.9)",
        ],
        hoverBackgroundColor: [
          "rgba(255,99,132,0.5)",
          "rgba(117,234,148,0.5)",
          "rgba(117,213,234,0.5)",
          "rgba(255, 0, 0, 0.9)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          getIndia.cases,
          getIndia.active,
          getIndia.recovered,
          getIndia.deaths,
        ],
      },
    ],
  };

  const newdata = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: changeValue.country,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          changeValue.cases,
          changeValue.active,
          changeValue.recovered,
          changeValue.deaths,
        ],
      },
    ],
  };

  return (
    <>
      <section className="home-bg">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="col-lg-4 india-fig-left ">
              <div>
                <img
                  alt="India Flag"
                  src="/images/ind.png"
                  className="indFlag"
                />
              </div>
              <div>
                <h3 className="text-left">
                  Corona Live Status In <span className="india">India</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card-list">
                <div className="cardn text-center">
                  <h2>Confirmed</h2>
                  <h3>{getIndia.cases}</h3>
                </div>
                <div className="cardn text-center">
                  <h2>Active</h2>
                  <h3>{getIndia.active}</h3>
                </div>
                <div className="cardn text-center">
                  <h2>Recovered</h2>
                  <h3>{getIndia.recovered}</h3>
                </div>
                <div className="cardn text-center">
                  <h2>Deaths</h2>
                  <h3>{getIndia.deaths}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bargraph">
                <HorizontalBar data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="prevention">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="advice theme-gradient">
                Corona Virus Advice for the public .
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>Wash your hands frequently
              </h4>
              <p>
                Regularly and thoroughly clean your hands with an alcohol-based
                hand rub or wash them with soap and water.
                <strong> Why? </strong> Washing your hands with soap and water
                or using alcohol-based hand rub kills viruses that may be on
                your hands.
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>Maintain social distancing
              </h4>
              <p>
                Maintain at least 1 metre (3 feet) distance between yourself and
                anyone who is coughing or sneezing.<strong> Why? </strong> When
                someone coughs or sneezes they spray small liquid droplets from
                their nose or mouth which may contain virus.
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>Avoid touching eyes, nose and mouth
              </h4>
              <p>
                <strong> Why? </strong> Hands touch many surfaces and can pick
                up viruses. Once contaminated, hands can transfer the virus to
                your eyes, nose or mouth. From there, the virus can enter your
                body and can make you sick.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="selectdata">
        <div className="container">
          <div className="row justify-content-md-center text-center">
            <div className="col-md-4">
              <div className="form-group">
                <div className="from">
                  <label className="form-label">Select Your Country</label>
                  <select
                    id="exampleForm.SelectCustom"
                    className="custom-select"
                    onChange={eventHandlar}
                  >
                    {state.map((country, index) => (
                      <option key={index + 1}>{country.country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <HomeCountryDetails name={changeValue} />

          <div className="row">
            <div className="col-md-12">
              <Bar
                data={newdata}
                width={100}
                height={500}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="prevention">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>PRACTICE RESPIRATORY HYGIENE
              </h4>
              <p>
              Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>IF YOU HAVE FEVER, COUGH AND DIFFICULTY BREATHING
              </h4>
              <p>
              Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12 col-12 content">
              <h4>
                <span>#.</span>PLEASE DON'T WALK UNNECCESARY
              </h4>
              <p>
              Why? It is irresponsible behaviour as a citizen of India. Against Corono virus a large number of Doctors, Police, Delivery boys, Soldiers are giving their efforts. Hence request to you please do not go out side of your home. #StayHomeStaySafe
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
