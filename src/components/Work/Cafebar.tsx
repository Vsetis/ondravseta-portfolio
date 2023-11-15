import WorkItem from './WorkItem';

export default function Cafebar() {
    return (
        <WorkItem
            previewLink={'https://cafebar-u-medvidku.vercel.app/'}
            img={{
                src: '/Cafebar.png',
                alt: 'Cafebar U Medvidku',
            }}
            title={'Cafebar U Medvídků'}
            info={
                'Webové stránky pro Cafebar U Medvídků. Informativní stránky pro kavárnu, které jsou vytvořeny v jednoduchém a přehledném designu, pomocí frameworku NextJS a TailwindCSS.'
            }
            stack={'NextJS, TailwindCSS'}
        />
    );
}
