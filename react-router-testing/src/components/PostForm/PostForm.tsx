// - POST

import { ChangeEvent, FormEvent, useState } from "react"

// Utwórz komponent PostForm który wyświetla formularz do dodawania nowego postu.
// Komponent PostForm posiada:
// - stan komponentu przechowujacy dane formularza
// - funkcje asynchroniczna która dodaje post do bazy danych i ustawia stan
// - dodaje nowy element do listy elementów typu post
// - posiada propsy przez które przekazujemy funkcje która umozliwa aktualizacje
// listy elementów

type Props= {
    setPosts: React.Dispatch<React.SetStateAction<PostItem[]>>;
}

type PostItem= {
    id:number,
    title:string,
    body:string
}

export const PostForm=(props: Props)=>{
    
    const[Id,SetId]=useState<number>(0);
    const[Title,SetTitle]= useState<string>("");
    const[Body,SetBody]= useState<string>("");

    const updateId=(event: ChangeEvent<HTMLInputElement>)=>{
        SetId(Number(event.target.value));
    }

    const updateTitle=(event:ChangeEvent<HTMLInputElement>)=>{
        SetTitle(event.target.value);
    }
    const updateBody=(event:ChangeEvent<HTMLInputElement>)=>{
        SetBody(event.target.value);
    }
    const submitForm=(event:FormEvent)=>{
        event.preventDefault();
        props.setPosts((prev) => [...prev, {id: Id, title: Title, body: Body}])
    }

    return <form onSubmit={submitForm}>
        <input id="id" onChange={updateId}></input>
        <input id="title" onChange={updateTitle}></input>
        <input id="body" onChange={updateBody}></input>
        <button>SENT</button>
    </form>
}
