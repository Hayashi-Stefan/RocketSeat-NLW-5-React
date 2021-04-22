// SPA
// SSR
// SSG

import { useEffect } from "react";

export default function Home(props) {
  //SPA
  // useEffect( () => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [] );
  
  // return <h1> Index </h1>;

  //SSR 
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// SSR 
// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3333/episodes")
//   const data = await response.json()
    
//   return {
//     props: {
//       episodes: data
//     }
//   }
// }

// SSG
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes")
  const data = await response.json()
    
  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8,
  }
}
