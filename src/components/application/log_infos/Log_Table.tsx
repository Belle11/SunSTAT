import { db } from "../../../firebase";
import { collection, getDocs} from "firebase/firestore";
import {useState , useEffect} from "react";

interface TimeCodeItem {
  id: any;
  code_date: any;
  weather_code: any;
}


function Log_Table() {

    const [TimeCode, setTimeCode] = useState<TimeCodeItem[]>([]);
    const DataCollection     = collection(db, "Weather_code_collection")
    useEffect(() => {
      const getTimeCode = async () => {
        const data_base = await getDocs(DataCollection);
        setTimeCode(data_base.docs.map((doc) => ({ ...doc.data(), id: doc.id })as TimeCodeItem));
      };
  
      getTimeCode();
    }, []);
    
    
  
  return (
    <>
    <div className='logtbl pt-[80px]'>
        <h1 className='text-light-100  mt-[10px] text-[20px] text-center font-title font-bold'>Recent Week </h1>
    
    <table className='text-light-100  mx-auto leading-[20px] mt-5 border w-[80vw]'>
        <tr>
            <th>Date</th>
            <th>Weather code</th>
        </tr>

    {TimeCode.map((index) => {
      return(
        <>
          {" "}
          <tr>
            <td>{index.code_date}</td>
            <td>{index.weather_code}</td>
          </tr>
        </>
      )
    })}    


    </table>
    </div>
    </>
   
  )
}

export default Log_Table;