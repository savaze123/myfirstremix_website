
import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { useLoaderData, Link, Form, useTransition,  } from "@remix-run/react";


export async function loader() {
  const prisma = new PrismaClient(); // get an instance of client
  const allUsers = await prisma.user.findMany(); // running query to find user
  console.log("allUsers", allUsers); //recieve the users
  await prisma.$disconnect();
  return allUsers;
}

export default function Index() {
  const users = useLoaderData();
  const {state} = useTransition();//used to create the busy state transition 
  const busy = state === "submitting";

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif", lineHeight: "1.5"
        , width: 600, margin: "auto",
      }}
    >
      *// this is to recieve acct info from the user 
      <Form method = "post"> 
        <div>
          <input name= "email" placeholder = "Email" size = {30} />
          <div>
            <input name = "username" placeholder = "User Name" size = {30} />          
        </div>
        </div> 
        <button type ="submit" disabled = {busy}>
        {busy ? " Creating..." : "Create New User"}
       </button>
      </Form>

      {users.map((user: User) => (
        // eslint-disable-next-line react/jsx-key
        <div style={{ border: "1px solid grey", padding: 6, margin: 8 }} >
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>
            <Link to={`/bookmarks/${user.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
      ))} 
    </div>
  );
}