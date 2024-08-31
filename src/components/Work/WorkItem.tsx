import Link from 'next/link';
import Image from 'next/image';
import {FiGithub, FiLink} from 'react-icons/fi';
import React from "react";
type RepoLink = `https://github.com/Vsetis/${string}`;

export default function WorkItem({
    previewLink,
    repoLink,
    img,
    title,
    info,
    stack,
    collaboration,
}: {
    previewLink?: string;
    repoLink?: RepoLink;
    img: { src: string; alt: string };
    title: string;
    info: string;
    stack: string;
    collaboration?: {
        logo: React.ReactNode;
        href: string;
    };
}) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
            <div className="order-2 md:order-1">
                    <div className="relative min-w-[100%] md:min-w-[550px] h-[250px] md:h-[380px] xl:h-[280px] rounded-[15px]  shadow-md">
                        <Image
                            className="absolute w-full h-full object-cover rounded-[15px]"
                            src={img.src}
                            alt={img.alt}
                            width={1920}
                            height={1080}
                        />
                    </div>
            </div>
            <div className="order-1 md:order-2 w-full xl:w-[40%] font-medium">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-[16px]  text-black/70 dark:text-white/90">
                    {info}
                </p>
                <p className="text-lg font-bold mt-3 mb-3">{stack}</p>
                <div className="flex items-center gap-4 ">
                    {previewLink && (
                        <Link
                            className="flex items-center"
                            href={previewLink}
                            target="_blank"
                        >
                            <FiLink className="w-5 h-5 mr-2" /> Odkaz na web
                        </Link>
                    )}
                    {repoLink && (
                        <Link className='flex items-center' href={repoLink} target='_blank'>
                            <FiGithub className="w-5 h-5 mr-2" /> Github
                        </Link>
                    )}
                    {collaboration && (
                        <Link href={collaboration.href} target="_blank">
                            {collaboration.logo}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
