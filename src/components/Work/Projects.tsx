import Kemp from './Kemp';
import Chalupy from './Chalupy';
import Cafebar from './Cafebar';
import PRInsights from './PRInsights';
import IssueTracker from './IssueTracker';
import Abivia from './Abivia';
import Amosol from "@/components/Work/Amosol";

export default function Projects() {
    return (
        <>
            <div id="Projects" className="container mx-auto px-8  py-[32px]">
                <div className="mb-12">
                    <div className="flex flex-row items-center md:justify-start justify-center">
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 mr-2" />
                        <h2 className="font-semibold text-xs text-zinc-700 dark:text-white/30">
                            PORTFOLIO
                        </h2>
                        <div className="bg-zinc-700 dark:bg-white/30 w-4 h-0.5 ml-2 md:hidden" />
                    </div>
                    <h2 className="font-bold text-4xl text-center md:text-start">
                        Mé vybrané projekty
                    </h2>
                </div>
                <div className="flex flex-col gap-16">
                    <Amosol/>
                    <IssueTracker />
                    <Abivia />
                    <PRInsights />
                    <Cafebar />
                    <Chalupy />
                    <Kemp />
                </div>
            </div>
        </>
    );
}
