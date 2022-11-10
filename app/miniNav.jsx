import Link from "next/link"
import Icon from "@mdi/react"

import { mdiBird, mdiHome, mdiMagnify, mdiBell, mdiEmail, mdiBookmark, mdiListBox, mdiAccount, mdiDotsHorizontalCircle } from "@mdi/js"

export default function MiniNav() {
    return(
        <nav className="h-screen border-r border-gray-100 p-4">
            <ul className="space-y-3">
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiBird} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiHome} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiMagnify} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiBell} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiEmail} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiBookmark} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiListBox} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiAccount} size={1.5} /></Link></li>
                <li className="p-2 rounded-full hover:bg-opacity-25 hover:bg-gray-800"><Link href="/"><Icon path={mdiDotsHorizontalCircle} size={1.5} /></Link></li>
            </ul>
        </nav>
    )
}