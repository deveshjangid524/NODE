export const getRandomBG = () => {
    const colors = [
        "bg-red-400",
        "bg-orange-400",
        "bg-amber-400",
        "bg-yellow-400",
        "bg-lime-400",
        "bg-green-400",
        "bg-emerald-400",
        "bg-teal-400",
        "bg-cyan-400",
        "bg-sky-400",
        "bg-blue-400",
        "bg-indigo-400",
        "bg-violet-400",
        "bg-purple-400",
        "bg-fuchsia-400",
        "bg-pink-400",
        "bg-rose-400"

    ]
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}


export const getAvatar = (name) => {
    if(!name) return "";
    return name.split(" ").map(word=> word[0]).join("").toUpperCase();
}

export const formatDate = (date) => {
        const months = [
            'January','February','March','April','May', 'June','July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2,'0')}, ${date.getFullYear()}`;
    }
