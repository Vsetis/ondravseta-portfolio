import WorkItem from './WorkItem';

export default function IssueTracker() {
    return (
        <>
            <WorkItem
                repoLink='https://github.com/Vsetis/issue-tracker'
                img={{
                    src: '/issue-tracker.png',
                    alt: 'Issue Tracker. Track your issues to solve them.',
                }}
                title={'Issue Tracker'}
                info={
                    'Ukázka webové aplikace pro sledování problémů/úkolů. Vytvářejte a upravujte svůj seznam úkolů snadno a rychle, abyste byli stále na vrcholu dění.'
                }
                stack={'NextJS, TailwindCSS, tRPC, Prisma'}
            />
        </>
    );
}
