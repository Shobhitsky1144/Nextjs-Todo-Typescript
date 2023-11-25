"use client";
import { useState } from 'react';

interface listType{
  id:number | null,
  name:string
}
export default function Home() {
  const [text, setText] = useState<listType>({
    id:null,
    name:''
  });
  const [toggle, settoggle] = useState<boolean>(false);
  const [list, setList] = useState<listType[]>([]);

  const handleSubmit=()=>{

    if(!toggle){

      setList([...list,text])
      setText({id:null,name:''})
    }else{
     const updatedList=list.map((elem)=>{
        return(
         
         elem.id===text.id?text:elem
        )
      })

      setList(updatedList)
      setText({id:null,name:''})
      settoggle(false)
    }
  }

  const deleteItem=(id:number | null)=>{
    console.log(typeof id)
    const data=list.filter((val)=>val.id!==id);
    setList(data)
  }
  const editItem=(item:listType)=>{
    settoggle(true)
    setText({id:item.id,name:item.name})

  }

  return (
    <main >
    
      <input type='text' value={text.name} onChange={(e) => setText({...text,id:list.length,name:e.target.value})} />
      <button onClick={handleSubmit}>{toggle ? "Edit" : "ADD"}</button>
      {
          list?.map((item:listType)=>{
          return(
          <div key={item.id}>
            <h1 >{item.name}</h1><br/>
            <><button onClick={()=>deleteItem(item.id)}>Delete</button>
            <button onClick={()=>editItem(item)}>Edit</button> </>
            </div>
          )
        })
      }
    </main>
  );
}