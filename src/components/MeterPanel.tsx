
import CircularProgressBar from "./CircularMeter";

function MeterPanel(){


    return (
        <>

            <div className="meterbx bg-light-100 shadow-lg rounded-large border h-40 mx-10 flex flex-row  flex-grow">

                <div className="rndbx rounded-full bg-light-200 h-24 w-24 box-content flex flex-col">
                    <h4 className="font-title font-bold text-light-100">150 W</h4>
                    <h4 className="leading-4 font-title text-xs text-center font-light text-light-100">Generating Electricity</h4>
                </div>

                <div className="progbx">
                    <CircularProgressBar value={75} text="Stored"/>
                    
                </div>
            </div>
        

            <div className="meterbx bg-light-100/[.06] shadow-lg rounded-large h-20 mx-10 p-5">
            <h4 className="font-title font-normal text-light-100">Power: 12 W / 15 W</h4>
            <h4 className="font-title font-normal text-light-100">Max Voltage: 16v / 9v / 6v</h4>
            </div>





        </>
    );
};

export default MeterPanel;