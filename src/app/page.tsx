import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen p-8 space-y-32">
            {/* Hero */}
            <section className="text-center space-y-4">
                <div className="mx-auto h-60 w-60 relative overflow-hidden rounded-full">
                    <Image src="/me.jpeg" alt="Photo of myself" fill className="object-cover" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Hello World, I’m Noah
                </h1>
                <p className="text-gray-500">Computer Games Technology Student</p>

                <div className="flex gap-3 justify-center">
                    <a href="#about" className="px-5 py-2 rounded-lg border hover:bg-black hover:text-white transition">
                        About me
                    </a>
                    <a href="#projects" className="px-5 py-2 rounded-lg border hover:bg-black hover:text-white transition">
                        View Projects
                    </a>
                    <a href="mailto:schmidtenoah@gmail.com" className="px-5 py-2 rounded-lg border hover:bg-black hover:text-white transition">
                        Contact
                    </a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="text-center space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-gray-600">Some facts about me</p>
            </section>

            {/* Projects */}
            <section id="projects" className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Projects</h2>
                <p className="text-gray-600">Here’s some of the work I’ve done.</p>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border p-6">Project 1</div>
                    <div className="rounded-lg border p-6">Project 2</div>
                </div>
            </section>

            {/* Contact (optional anchor for nav) */}
            <section id="contact" className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="text-gray-600">
                    Email me at{" "}
                    <a className="underline" href="mailto:schmidtenoah@gmail.com">
                        schmidtenoah@gmail.com
                    </a>
                </p>
            </section>
        </main>
    );
}
