import { ModeToggle } from "@/components/mode-trigger"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export function NavigationBar() {

    return (
        <NavigationMenu className="flex flex-row min-w-full justify-between list-none h-16 p-5 position: sticky top-0">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home 
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link href="/about-me" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me 
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <ModeToggle/>
            </NavigationMenuItem>
        </NavigationMenu>
    
    )
}

