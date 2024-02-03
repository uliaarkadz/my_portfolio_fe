import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();
  return projects.map((p) => (
    <div>
      <h1>{p.name}</h1>
      <img src={p.image} />
      <a href={p.git} target="blank">
        <button>GitHub</button>
      </a>
      <a href={p.live} target="blank">
        <button>Live site</button>
      </a>
    </div>
  ));
}

export default Projects;
