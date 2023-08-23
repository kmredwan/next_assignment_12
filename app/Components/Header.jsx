import Link from "next/link";

const Header = () => {
    return (
        <div className="relative">
            <nev className="  flex justify-center py-6  shadow-xl  fixed top-0 left-0 right-0 bg-white">
            <ul className="flex space-x-6">
                <Link href="/"><li>Home</li></Link>
                <Link href="/blog"> <li>Blog</li></Link>
                <Link href="/about"> <li>About</li></Link>
                <Link href="/contact"> <li>contact</li></Link>
            </ul>
        </nev>
        </div>
    );
};

export default Header;