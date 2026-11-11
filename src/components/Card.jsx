import placeholderImage from "../placeholder.svg";

export default function Card({ imageUrl, name }) {
    function onError(e) {
        e.target.src = placeholderImage;
    }

    return (
        <div className="w-full shadow-lg rounded-2xl h-full flex items-center justify-between flex-col bg-white border border-slate-700">
            <img
                onError={onError}
                className="w-full rounded-xl"
                src={imageUrl}
                alt={name}
            />
            <span className="p-6 text-slate-900 text-2xl">{name}</span>
        </div>
    );
}
