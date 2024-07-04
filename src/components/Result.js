import React, { useEffect, useState } from 'react'
import currencyapi from '@everapi/currencyapi-js'



export default function Result(props) {

  const [result, setResult] = useState(null);

  useEffect(() => {
    async function calc() {
      const client = new currencyapi("cur_live_VV2GuBjYnHdVmHAdqanKCt0S1savF2fEkgwIN98C");

      try {
        let data = await client.latest();
        const rate = data.data[props.to].value;
        setResult(rate);
      } catch (error) {
        console.error("Error fetching currency data: ", error);
      }
    }

    if (props.show === 'show') {
      calc();
    }
  }, [props.show, props.to]);
   

   
return (
    <>

    { props.show==='show' && (

         <div className=" container result-box">

            <h4 className='h_1'>{props.text} {props.from}=</h4>
            <h2 className='h_2'>{props.text*result}{props.to}</h2>
            

         </div>













    )











    }
    
    
    
    
    
    
    
    
    
    </>
  )
}
