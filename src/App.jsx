import { Fragment, useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

export default function App() {
    const URL = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        async function getData() {
            const raw = await fetch(URL);
            const json = await raw.json();
            setCharacters(json.results);
            setFilter(json.results);
        }
        getData();
    }, []);

    return (
        <Fragment>
            <h1 className="px-6 pt-6 text-6xl text-slate-900 font-extrabold">
                Rick & Morty wiki
            </h1>
            <p className="p-6 text-xl max-w-200 text-slate-500">
                Search any rick and morty charachters from any episodes
            </p>
            <Search characterData={characters} funcSetCharData={setFilter} />
            <div className="grid w-full p-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 justify-center items-center content-center">
                {filter.map((data) => {
                    return (
                        <Card
                            imageUrl={data.image}
                            name={data.name}
                            key={`char-${data.id}`}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}
