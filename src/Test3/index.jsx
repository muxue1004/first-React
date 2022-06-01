import React, { useEffect, useState } from 'react'
import moment from 'moment'

let amao = moment().format('YYYY-MM-DD HH:mm:ss')
export default function Test3(){
  const [time, setTime] = useState(amao)

  useEffect(()=> {
    const id = setInterval(()=> {
      setTime(moment().format('YYYY-MM-DD HH:mm:ss'))
    },1000);
    return () => clearInterval(id)
  })

  if (moment().hours()>=6 && moment().hours()<11) {
      return (
        <h1>早上好 {time}</h1>
      )
  } else if (moment().hours()>=11 && moment().hours()<13){
      return (
        <h1>中午好 {time}</h1>
      )
  } else if (moment().hours()>=13 && moment().hours()<18){
    return (
      <h1>下午好 {time}</h1>
    )
  } else {
    return (
      <h1>晚上好 {time}</h1>
    )
  }

  // return (
  //   <div>
  //     {time}
  //   </div>
  // )
}

// import { useEffect, useState } from 'react';
// import React from 'react'

// let d = new Date()
// function amao(){
//   const [time, setTime] = useState(d)
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   });
//   let timeStr= time.toLocaleTimeString();
//   return(
//     <h1>It is {timeStr}.</h1>
//   )
// }

// export default amao
