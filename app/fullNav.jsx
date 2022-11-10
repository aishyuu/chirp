import Link from "next/link"
import Icon from "@mdi/react"
import { mdiBird, mdiHome, mdiMagnify, mdiBell, mdiEmail, mdiBookmark, mdiListBox, mdiAccount, mdiDotsHorizontalCircle } from "@mdi/js"


export default function FullNav() {
    return(
        <nav className="h-screen border-r border-gray-100 p-6 ">
            <ul className="space-y-3 pl-6">
                <li className="p-2 w-12 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiBird} size={1.5} /></Link></li>
                <Link href="/">
                    <div className="flex w-36 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2" ><Icon path={mdiHome} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Home</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-40 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiMagnify} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Explore</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-52 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiBell} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Notifications</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-44 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiEmail} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Messages</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-48 rounded-full hover:bg-opacity-25 hover:bg-gray-700">
                        <li className="p-2 rounded-full"><Icon path={mdiBookmark} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Bookmarks</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-36 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiListBox} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Lists</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-40 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiAccount} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">Profile</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className="flex w-36 rounded-full hover:bg-opacity-25 hover:bg-gray-800">
                        <li className="p-2"><Icon path={mdiDotsHorizontalCircle} size={1.5} /></li>
                        <h1 className="self-center text-xl pl-4">More</h1>
                    </div>
                </Link>
            </ul>
        </nav>
    )
}