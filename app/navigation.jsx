'use client';

import Icon from "@mdi/react"
import Link from "next/link"
import React, {useState, useEffect} from 'react'
import MiniNav from "./miniNav"
import FullNav from "./fullNav";

import { mdiBird, mdiHome, mdiMagnify, mdiBell, mdiEmail, mdiBookmark, mdiListBox, mdiAccount, mdiDotsHorizontalCircle } from "@mdi/js"

export default function Navigation() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1300);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1300);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return(
        <div>
            {isDesktop ? (
                <FullNav />
            ) : (
                <MiniNav />
            )} 
        </div>
    )
}