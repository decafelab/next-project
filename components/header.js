import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        
        <header>
            <nav class="px-4 lg:px-6 py-6 relative mb-[-96px] z-10">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg lg:px-2">
                    <Link href="/" class="flex items-center">
                        <Image src="/images/logo.png" class="mr-3 sm:h-12" alt="Logo" width={200} height={184}/>
                    </Link>
                    
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="#" class="block py-2 pr-4 pl-3 text-white" aria-current="page">Works</Link>
                            </li>
                            <li>
                                <Link href="#About Us" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link href="#Clients" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Clients</Link>
                            </li>
                            <li>
                                <Link href="#Contact" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Contact</Link>
                            </li>
                        
                        </ul>
                    </div>

                    <div class="flex items-center">
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    
                </div>
            </nav>
        </header>

    )
}
    
export default Header;