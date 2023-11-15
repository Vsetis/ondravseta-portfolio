import GhostyLogo from '../GhostyLogo';
import WorkItem from './WorkItem';

export default function Chalupy() {
    return (
        <>
            <WorkItem
                previewLink={'https://chalupykarolinka.cz/'}
                img={{
                    src: '/chalupyKarolinka.png',
                    alt: 'Chalupy Karolinka',
                }}
                title={'Chalupy Karolinka'}
                info={
                    'Chalupy Karolinka jsou informační webové stránky pro dvě chalupy, které se nachází ve městě Karolinka. Při tvorbě těchto webových stránek jsem spolupracoval s firmou Ghosty digital s.r.o.'
                }
                stack={'NuxtJS, TailwindCSS'}
                collaboration={{
                    logo: <GhostyLogo />,
                    href: 'http://ghosty.cz',
                }}
            ></WorkItem>
        </>
    );
}
