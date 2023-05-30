import { useEffect, useState,ChangeEvent } from 'react';
import './table.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface Item {
  fullname:string
  email:string
  password:string
}


export default function Tableshow() {
  const [inputData, setInputData] = useState<Item[]>([]);
  const [filterData, setFilterData] = useState<Item[]>([]);
  const [searchData, setSearchData] = useState<string>('');

  const location = useLocation();
  const loggedInUser = location.state?.loggedInUser;
  // const { loggedInUser } = location.state;

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setInputData(parsedData);
    setFilterData(parsedData);
  }, []);

  const handlesearch = (event: ChangeEvent<HTMLInputElement>) => {
    const getsearch = event.target.value;
    setSearchData(getsearch);
    console.log(getsearch);

    if (getsearch.length > 0) {
      const defaultdata = inputData.filter((item) => item.fullname.toLowerCase().includes(getsearch));
      setInputData(defaultdata);
    }
    // else if(getsearch.length > 0){
    //   const upperdata = inputData.filter((item)=>item.fullname.toUpperCase().includes(getsearch));
    //   setInputData(upperdata);
    // }
    else {
      setInputData(filterData);
    }

  }

  const navigate = useNavigate();
  const handlelogout = () => {
    navigate('/');
  }
  return (
    <div>
      <div className='tablemain_container'>
        <div className='table_container'>
          <div className="table05">
            <div className='font'>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className='search_box'>
              <input type='text' value={searchData} name='name' className='search_bar' onChange={(e) => handlesearch(e)} placeholder='Search for an account' />
              <button onClick={handlelogout} className='btn-btn button button46'>Logout</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email ID</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {inputData.map((item, index) => (
                  <tr key={index} className={item.email == loggedInUser ? "highlighted" : ""}>
                    <td className='td66'>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                ))}

              </tbody>
            </table>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
