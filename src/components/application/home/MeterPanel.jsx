import { useEffect, useState } from "react";
import { rdb } from "../../../firebase";
import { onValue } from "firebase/database";
import { ref } from "firebase/database";


function MeterPanel(){
    const [data, setData] = useState("");
    const [datas, setDatas] = useState([]);

  
    const handleTodoChange = (e) => {
      setData(e.target.value);
    };
  
    // Read data from Firebase Realtime Database
    useEffect(() => {
      onValue(ref(rdb), (snapshot) => {
        const rdata = snapshot.val();
        if (rdata !== null) {
          const newData = Object.keys(rdata.Pushing).map((key) => rdata.Pushing[key]);
          setDatas(newData);
        }
      });
    }, []);

    ////
    

    return (
        <>

            <div className="meterbx bg-light-100 shadow-lg rounded-large border mx-10 flex flex-row  flex-grow">

                <div className="rndbx rounded-full bg-light-200 h-24 w-24 box-content flex flex-col">
                    <h4 className="font-title font-bold text-light-100">{Math.floor(((datas[0]) * 12)*100) / 100}</h4>
                    <h4 className="leading-4 font-title text-xs text-center font-light text-light-100">Generating <br />Power</h4>
                </div>

                {/* <div className="progbx">
                    <CircularProgressBar value={75} text="Stored"/>
                    
                </div> */}
            </div>
        

            <div className="meterbx bg-light-100/[.06] shadow-lg rounded-large h-20 mx-10 p-5">
            <h4 className="font-title font-bold text-[13px] text-light-100 inline-block">Power: &nbsp;</h4>
            <h1 className="font-title text-[13px] text-light-100 inline-block">Voltage (V) x Current (A)</h1><br />  
            <h4 className="font-title font-bold text-[13px] text-light-100 inline-block">Current: &nbsp;</h4>
            <h1 className="font-title text-[13px] text-light-100 inline-block"><i>{datas[0  ]}</i> A</h1> <br></br>


            
            
            <h4 className="font-title font-bold text-[13px] text-light-100 inline-block">Max Voltage: &nbsp;</h4>
            <h1 className="font-title text-[13px] text-light-100 inline-block">12 Volts</h1> <br></br>  

            {/* <h1 className="font-title font-bold text-[13px] text-light-100 inline-block">Generated: &nbsp;</h1>
            <h1 className="font-title text-[13px] text-light-100 inline-block">10%</h1> <br></br>   */}
            </div>





        </>
    );
};

export default MeterPanel;