
const frontNew1 = {
    title: 'Történelmi győzelem: Magyarország négyből négyet nyert az Eb-n!',
    text:  'A 2024-es kézilabda Európa-bajnokság izgalmakban bővelkedik, különösen a magyar válogatott számára, amely a középdöntők során kiemelkedő teljesítményt nyújtott. A magyar férfi csapat Horvátországot 29-26-ra legyőzve bebiztosította a továbbjutását. A mérkőzésen Imre Bence hibátlanul játszott, Bartucz László pedig kulcsfontosságú védésekkel járult hozzá a sikerhez. Ezzel a győzelemmel a magyar válogatott először nyert meg legalább négy mérkőzést egy Eb-n, ami történelmi sikernek számít. A női válogatott is erőteljesen kezdett, legyőzve Törökországot, ezzel életben tartva esélyeit a csoportból való továbbjutásra. A férfi csapat esetében a Szerbia elleni mérkőzés is emlékezetes maradt, ahol Máthé Dominik vezetésével magabiztos győzelmet arattak, tovább erősítve az olimpiai kvalifikáció esélyeit.',
    image: 'https://s.24.hu/app/uploads/2024/01/banhidi-1024x576.jpg',
    topic: 'SPORT'
}

export default function HomeNew() {
    return(
        <div className="new-container w-1/4 m-2">
            <article>
                 <h3 className="font-bold text-orange-200 justify-self-start mb-1">{frontNew1.topic}</h3>
                <figure>
                    <img className='rounded-sm' src={frontNew1.image} alt="kézilabda"/>
                </figure>
                <h2 className='font-bold mt-2 mb-2 text-slate-100 text-left'>{frontNew1.title}</h2>
            </article>
        </div>
    )
}