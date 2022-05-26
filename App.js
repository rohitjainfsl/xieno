import './App.css';
import axios from './axios'
import Sidebar from './Sidebar'
import {useState, useEffect} from 'react' 
import {useParams} from 'react-router-dom'


function App(props) {

  const [launchData, setLaunchData] = useState([]);
  let params = useParams();
  
  useEffect(() => {
    async function fetchData(){
      
      let url = '';      
      url = (params.y) ? 'launches?limit=20&launch_year='+params.y : 'launches?limit=20';
      
      const request = await axios.get(url);
      setLaunchData(request.data);
    }
    fetchData()
  }, [params]);

  

  return (
    <div id="wrapper" className="home">
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <section>

        <Sidebar />

        <main>
          {
            launchData.map((data, index) => {
              return(
                <div className="program" key={index}>
                  <div className="photo">
                    <img src={data.links.mission_patch} alt={data.mission_name} />
                  </div>
                  <div className="info">
                    <h4>{data.mission_name+" "}#{index+1}</h4>
                    <h4>Mission Ids: </h4>
                    <ul>
                      
                      {(data.mission_id.length > 0) ? data.mission_id.map((current, index) => {return <li key={index}>{current}</li>}) : <li></li>}
                    </ul>
                    <p>
                      <strong>Launch Year: </strong>
                      <span>{data.launch_year}</span>
                    </p>
                    <p>
                      <strong>Successful Launch: </strong>
                      <span>{(data.launch_success) ? 'true' : 'false'}</span>
                    </p>
                    <p>
                      <strong>Successful Landing: </strong>
                      <span>{(data.launch_failure_details) ? 'false' : 'true'}</span>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </main>
      </section>
    </div>
  );
}

export default App;
