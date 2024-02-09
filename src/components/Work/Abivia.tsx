import WorkItem from './WorkItem';

export default function Abivia() {
    return (
        <WorkItem
            previewLink={'https://abivia.cz'}
            img={{
                src: '/abivia.png',
                alt: 'abivia.cz',
            }}
            title={'Advokátní kancelář abivia.cz'}
            info={
                'Podílel jsem se na přestavbě webu advokátní kanceláře abivia.cz. Web je postaven na WordPressu.'
            }
            stack={'WordPress, HTML, CSS, JavaScript, PHP, SVN'}
        />
    );
}
