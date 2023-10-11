import { Head } from "@inertiajs/react";
import Card from "../Components/Card";

export default function Home({ laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome!" />
            <div className="relative">
                <div className="p-6">
                    <div className="flex justify-left">
                    <img class="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <div class="flex items-center justify-center space-x-3 text-base">
                            <div class="ml-5 text-4xl font-bold text-gray-900">Austin Andrews</div>
                        </div>
                    </div>
                </div>

                <Card />
            </div>
        </>
    );
}