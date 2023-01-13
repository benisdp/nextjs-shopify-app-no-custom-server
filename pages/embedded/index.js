import Navbar from "@components/elements/Navbar";
import Loading from "@components/loading";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Suspense, useState } from "react";
import fetch from "isomorphic-unfetch";

// noinspection JSUnusedGlobalSymbols

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  console.log("yooo");

  // const [todosResponse] = await Promise.all([
  //   fetch("https://jsonplaceholder.typicode.com/todos/2"),
  // ]);

  const resp = await fetch(
    "https://6817-2603-7000-c900-480b-7424-102c-29d5-cf85.ngrok.io/api/photo"
  );

  console.log({ resp });
  const obj = await resp.json();

  console.log(" here are todods", obj);

  return { props: { todos: obj } };
}

export default function Index({ todos }) {
  const primaryAction = { content: "Settings", url: "/embedded/settings" };
  const [products, setProducts] = useState([]);
  const app = useAppBridge();

  return (
    <div>
      {todos?.id}

      <Suspense fallback={<Loading />}>
        <Navbar />
        {todos?.toString()}
      </Suspense>
    </div>
  );
}
