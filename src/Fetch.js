import React from 'react'

function Fetch() {
    fetch('https://www.virtualhrcenter.com/evaluations/apientry.asp')
    .then(response => response.json())
    .then(data => {
      // Handle successful response
      console.log(data);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
  

  return (
    <div>Fetch</div>
  )
}

export default Fetch