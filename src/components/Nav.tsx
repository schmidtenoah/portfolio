import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
];

export default function Nav() {
    return (
        <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
                <Link href="/" className="font-extrabold tracking-tight">
                    portfolio
                </Link>

                <ul className="flex gap-6 text-sm">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="text-gray-600 hover:text-black transition"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
