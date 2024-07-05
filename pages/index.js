import { useEffect, useState } from "react";
import HomePage from "../components/template/HomePage";

export default function Home() {
   const [todos, setTodos] = useState([]);
   const [value, setValue] = useState("");
   const [id, setId] = useState();
   const [title, setTitle] = useState();

   useEffect(() => {
      async function fetchData() {
         const res = await fetch("/api/todos");
         const data = await res.json();
         setTodos(data);
      }
      fetchData();
   }, []);

   const clickHandler = async () => {
      const res = fetch("/api/todos", {
         method: "POST",
         body: JSON.stringify({ todo: value }),
         headers: { "Content-Type": "application/json" },
      });
      const data = await (await res).json();
      setTodos((current) => [...current, data.info]);
   };

   const deleteHandler = async () => {
      const res = await fetch("/api/todos", {
         method: "DELETE",
      });
      const data = await res.json();
      setTodos(data.info);

      console.log(data);
   };

   const replaceHandler = async () => {
      const res = await fetch("/api/todos", {
         method: "PUT",
         body: JSON.stringify([
            { id: 6, title: "todo 6" },
            { id: 7, title: "todo 7" },
         ]),
         headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setTodos(data.info);
   };

   const editHandler = async () => {
      const res = await fetch(`/api/todos/${id}`, {
         method: "PATCH",
         body: JSON.stringify({ title }),
         headers: { "Content-Type": "application/json" },
      });
      const data = await res.json()
      setTodos(data)
   };

   return (
      <>
         <ul>
            {todos.map((item) => (
               <li key={item.id}>{item.title}</li>
            ))}
         </ul>
         <>
            <input
               type='text'
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={clickHandler}>create todo</button>
         </>
         <button onClick={deleteHandler}>delete all</button>
         <button onClick={replaceHandler}>replace all</button>
         <input
            placeholder='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
         />
         <input
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <button onClick={editHandler}>patch request</button>
         <HomePage />
      </>
   );
}
