import WorkItem from "@/components/Work/WorkItem";
import GhostyLogo from "@/components/GhostyLogo";

export default function Amosol(){
    return (
        <WorkItem
            previewLink={'https://amosol.cz/'}
            img={{
                src: '/amosol.png',
                alt: 'Amosol real estate'
            }}
            title='Amosol'
            info={
            'Amosol je realitní kancelář, která se zaměřuje na prodej nemovitostí ve Španělsku. Při tvorbě těchto webových stránek jsem spolupracoval s firmou Ghosty digital s.r.o.'
            }
            stack='NuxtJS, TailwindCSS, Laravel, Strapi'
            collaboration={{
                logo: <GhostyLogo />,
                href: 'http://ghosty.cz',
            }}
        />
    )
}