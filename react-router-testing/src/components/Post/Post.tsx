type Props = {
    id:number;
    title:string;
    body:string;
}


export const Post = (props : Props) => {
  return (
    <li key={props.id}>
      <h1>{props.title}</h1>
      <h2>{props.body}</h2>
    </li>
  );
};
