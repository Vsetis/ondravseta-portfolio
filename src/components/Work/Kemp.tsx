import WorkItem from './WorkItem';

export default function Kemp() {
    return (
        <WorkItem
            previewLink={'https://www.podpustevnami.cz/'}
            img={{
                src: '/Kemp.png',
                alt: 'Kemp pod Pustevnami',
            }}
            title={'Kemp pod Pustevnami'}
            info={
                'Kemp pod Pustevnami jsou webové stránky kempu. Dozvíte se zde veškeré informace, jako jsou např. Ceník, Aktuality z kempu a také se můžete mrknout na tipy na výlety.'
            }
            stack={'EditorX'}
        />
    );
}
