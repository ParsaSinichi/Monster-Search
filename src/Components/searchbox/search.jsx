import './search.css'
function Searchbox({placeholder,handlechange}) {
    return ( <>
    
    <input className='search' type='search' placeholder={placeholder} onChange={handlechange}></input>
      
    </>  );
}

export default Searchbox;