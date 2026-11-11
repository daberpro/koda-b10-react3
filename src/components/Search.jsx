import { useEffect, useState } from "react";

export default function Search({ characterData, funcSetCharData }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        funcSetCharData(
            characterData.filter((char) => {
                return char.name.toLowerCase().includes(query);
            }),
        );
    }, [query]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                funcSetCharData(
                    characterData.filter((char) => {
                        return char.name.toLowerCase().includes(query);
                    }),
                );
            }}
            action="#"
            className="w-full px-6 py-4 flex gap-2 justify-center items-center flex-row"
        >
            <input
                onInput={(e) => setQuery(e.target.value)}
                placeholder="Search any character by name"
                className="w-full bg-white text-xl p-4 border border-slate-600 rounded-xl"
                type="text"
            />
            <button
                className="px-6 bg-white py-4.5 rounded-xl border border-slate-900"
                type="submit"
            >
                <svg
                    className="text-2xl"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17 17L21 21"
                        stroke="#323232"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        stroke="#323232"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </form>
    );
}
