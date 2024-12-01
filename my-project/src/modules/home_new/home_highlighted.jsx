const frontHighlighted = {
    title: 'Horror, akció és űrutazás: Tom Cruise 2024-es éve',
    text:  '',
    image: 'https://kep.cdn.indexvas.hu/1/0/4373/43731/437318/43731848_fbfaae0471f8eac4f2580521532fe6cd_wm.jpg',
    summary: 'Tom Cruise ismét reflektorfényben van, hiszen a népszerű színész számos új filmprojekten dolgozik, amelyek tovább bővítik legendás karrierjét. 2024-ben két kiemelkedő filmre fókuszál: "Mission: Impossible – The Final Reckoning" című filmre, amely a franchise nyolcadik és várhatóan utolsó része lesz, és egy új műfajban való debütálására is készül, egy mélytengeri horrorfilmben.',
    topic: 'FILM'
}

export default function HomeHighlighted() {
    return(
        <div className="">
            <article>
                 <h3 className="font-bold text-orange-200 justify-self-start mb-1">{frontHighlighted.topic}</h3>
                <figure>
                    <img className='rounded-sm' src={frontHighlighted.image} alt="kézilabda"/>
                </figure>
                <h2 className='font-bold mt-2 mb-2 text-slate-100 text-left'>{frontHighlighted.title}</h2>
                <p className="text-slate-100 text-left">{frontHighlighted.summary}</p>
            </article>
        </div>
    )
}