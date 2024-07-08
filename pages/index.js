import Head from "next/head";
import HomePage from "../components/template/HomePage";
import { useState } from "react";

export default function Home({ data }) {
   const [name, setName] = useState("");
   const [users, setUsers] = useState([]);
   const [edit, setEdit] = useState();
   const [email, setEmail] = useState();

   const fetchData = () => {
      fetch("/spi/data")
         .then((res) => res.json())
         .then((info) => setUsers(info.data));
   };

   useEffect(() => fetchData(), []);

   const postHandler = async () => {
      const res = await fetch("/spi/data", {
         method: "POST",
         body: JSON.stringify({ name }),
         headers: { "Content-Type": "application/json" },
      });
      const data = res.json();
      console.log(data, "data");
   };

   const detailHandler = (id) => {
      fetch(`/api/data/${id}`)
         .then((res) => res.json)
         .then((info) => console.log(info.data));
   };

   const editHandler = (user) => {
      setEdit(user._id);
      setEmail(user.email);
   };

   const saveHandler = async (id) => {
      const res = await fetch(`/api/data/${id}`, {
         method: "PATCH",
         body: JSON.stringify({ email }),
         headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setEdit("");
   };

   const deleteHandler = async (id) => {
      const res = await fetch(`/api/data/${id}`, {
         method: "DELETE",
      });
      const data = await res.json();
      setEdit("");
      fetchData()
   };

   return (
      <>
         <Head>
            <title>{data.title}</title>
            <meta name=' description' content={data.description} />
         </Head>
         <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <button onClick={postHandler}>post</button>
         <ul>
            {users.map((user, index) => (
               <li key={index}>
                  <h3>{user.name}</h3>
                  <button onClick={() => detailHandler(user._id)}>
                     log details
                  </button>
                  <button onClick={() => deleteHandler(user._id)}>
                     delete
                  </button>
                  <button onClick={() => editHandler(user)}>edit</button>
                  {edit && edit === user._id && (
                     <>
                        <input
                           type='text'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={() => saveHandler(user._id)}>
                           save
                        </button>
                     </>
                  )}
               </li>
            ))}
         </ul>
         <HomePage />
      </>
   );
}

export async function getServerSideProps() {
   return {
      props: {
         data: {
            name: "nas",
            title: "my router api food next app",
            description: "test dynamic head",
         },
      },
   };
}
