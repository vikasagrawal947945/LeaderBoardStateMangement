import { useEffect, useState } from "react";

function LeaderBoard(){
      const [firstName , setFirstName]=useState("");
      const [lastName , setLastName]=useState("");
      const [ country , setCountry]=useState("");
      const [score ,setScore] = useState(""); 
      const [data , setData] = useState([]);
      const [flag ,setFlag] = useState(1);

      useEffect(() => {
        if (data.length > 0) {
          const copy = [...data];
          setData(copy.sort((a, b) => b.score - a.score));
        }
      }, [score, flag]);

      function handelSubmit(e){
      e.preventDefault();
       const obj = {
         id : Date.now(),
         name : firstName +" "+lastName,
         country : country,
         score: score
       };
       console.log(obj);
       setData([...data , obj]);
      //  setData((data)=>{ const newData = [...data , obj];
      //    return newData.sort((a,b)=>b.score - a.score) 
      //  });
      setFirstName("");
       setLastName("");
       setCountry("");
       setScore("");
       
      }
      function handelDelete(idToDelete){
        //  setData((prevData)=>{
        //   const updatedData = prevData.filter(obj=> obj.id !==idToDelete);
        //   return updatedData.sort((a, b) => b.score - a.score);
        //  });  this ssorting is done by now 
         setData(data.filter(obj=> obj.id !==idToDelete));
        
      }
      function modifyScore(id, sign) {
        setFlag(flag*-1);
       setData(data.map(obj =>
          obj.id === id ? { ...obj, score: sign === "+" ? parseInt(obj.score) + 5  : parseInt(obj.score) - 5,}: obj ));


        // setData(prevData => {
        // const updatedData = prevData.map(obj =>
        //   obj.id === id ? { ...obj, score: sign === "+" ? parseInt(obj.score) + 5  : parseInt(obj.score) - 5,}: obj );
        //   // Sort descending by score
        //   return updatedData.sort((a, b) => b.score - a.score);
        // });   now this sorting is done by useEffect hook
      
      }
    
      return (
      <>
     
      <form action="" onSubmit={handelSubmit} className="form">
      <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required  />
       <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
       <select name="" id=""value={country} onChange={(e)=>setCountry(e.target.value)} required>
        <option value="" disabled>SelectOption</option>
        <option value="India">India</option>
        <option value="west indies">west indies</option>
        <option value="pakistan">pakistan</option>
        <option value="Australia">Australia</option>
       </select>
       <input type="text" placeholder="Score" value={score} onChange={(e)=>setScore(e.target.value)} required />
       <button type="Submit">Add</button>
       </form>
       <div>
        {
            data.length>0 && data.map((obj)=>{
                 return(
                   <div key={obj.id} className=" container grid grid-cols-4 m-10 p-5 border">
                    <p>{obj.name}</p>
                    <p>{obj.country}</p>
                    <p>{obj.score}</p>
                    <p className="edit flex gap-2">
                        <span onClick={()=>{handelDelete(obj.id) }}>Delete</span>
                        <span onClick={()=>{modifyScore(obj.id , "+")}}>+5</span>
                        <span onClick={()=>{modifyScore(obj.id , "-")}}>-5</span>
                    </p>
                   </div>
                 )
            })
        }
       </div>
      </>
      )
}
export default LeaderBoard;