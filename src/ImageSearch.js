import React, { useState } from 'react';

const ImageSearch = ({searchText}) => 
  {
  const [text,setText]=useState('');
  const onsubmit=(e)=>{
      e.preventDefault();
      searchText(text);
  }
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>

<form onSubmit={onsubmit} className="w-full max-w-sm">

  <div className="flex items-center border-b-2 border-teal-500 py-2">

  <input type="text" placeholder="Search Image Term" aria-label="Search image term" onChange={e => setText(e.target.value)} 
  className="appearance-none bg-transparent border border-gray-300 rounded-lg w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm Border-4 text-white

    py-1 px-2 rounded" type="submit">Search</button>

  </div>

</form>


</div>
  )
}

export default ImageSearch;
