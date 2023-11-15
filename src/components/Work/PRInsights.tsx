import Link from 'next/link';
import { FiLink } from 'react-icons/fi';
import Image from 'next/image';
import WorkItem from './WorkItem';

export default function PRInsights() {
    return (
        <>
            <WorkItem
                previewLink="https://www.prinsights.cz/"
                img={{
                    src: '/PrInsights.png',
                    alt: 'PR Insights',
                }}
                title="PR Insights"
                info="Webové stránky pro PR specialistku Markétu. Informativní
                portfolio web, který je tvořen v jednoduchém a přehledném
                designu."
                stack="NextJS, TailwindCSS"
            ></WorkItem>
        </>
    );
}
