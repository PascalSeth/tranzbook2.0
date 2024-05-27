import { useTheme } from "next-themes";
import Image from "next/image"

export const SideBarLogo=()=>
{
    const { theme } = useTheme();
return <Image width={105} alt="" className="w-20 mx-3.5 items-center min-h-fit"
height={35} src={theme === 'dark' || theme === 'custom' ? '/pictures/logoNav.png' : '/pictures/logoNav.png'}/>
}