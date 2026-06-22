import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="space-y-10 rounded-4xl bg-white p-8 shadow-lg shadow-slate-200">
            <div className="space-y-4">
                <h1 className="text-3xl font-semibold text-slate-900">🛠️ My Skills</h1>
                <p className="text-slate-600 leading-8"> I focus mainly on frontend web development, where I enjoy building clean layout,
                    responsive designs, and user-friendly interfaces. Along with frontend, I have also explored backend
                    technologies to understand how full-stack applications work at a basic level. </p>
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900">💻 Frontend Development</h2>
                <p className="text-slate-600 leading-8"> I have a strong foundation in frontend web technologies and enjoy creating structured, responsive,
                    and visually clean web pages. </p>
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">HTML</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Writing semantic and well-structured HTML</li>
                            <li>Creating clean page layouts for webdites and landing pages</li>
                            <li>Proper use of tags for accessibility and SEO</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">CSS and TailwindCSS</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Styling layouts using Flexbox</li>
                            <li>Making websites responsive for mobile, tablet, and desktop</li>
                            <li>Working with colors, spacing, typography, and modern UI layouts</li>
                            <li>Writing clean and reusable CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">JavaScript (Basics)</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Adding basic interactivity to websites</li>
                            <li>DOM manipulation (selecting elements, events, toggling classes)</li>
                            <li>Handing buttons, popups, menus, and form interactions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900">🎨 UI & Layout Understanding</h2>
                <p className="text-slate-600 leading-8"> I have a growing interest in UI design and layout structure, and I focus on: </p>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                    <li>Clean and minimal design</li>
                    <li>Proper spacing and alignment</li>
                    <li>Responsive card layouts and sections</li>
                    <li>Creating user-friendly page flow</li>
                </ul>
                <p className="text-slate-600 leading-8"> I try to design websites that are simple, clear, and easy to navigate rather over-designed. </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900">🔍 Backend Exploration (Beginner Level)</h2>
                <p className="text-slate-600 leading-8"> Along with frontend, I have explored backend technologies to understand how data and servers work
                    behind the scenes. </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">Node.js</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Understanding how a server works</li>
                            <li>Creating basic servers using Node.js</li>
                            <li>Learning how backend logic connects with frontend</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">Express.js</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Creating simple APIs and routes</li>
                            <li>Understanding request and response flow</li>
                            <li>Working with GET and POST requests</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">MongoDB</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Understanding NoSQL databases</li>
                            <li>Learning how data is stored in collections and documents</li>
                            <li>Basic CRUD operations</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">Mongoose</h3>
                        <ul className="list-disc space-y-2 pl-5 text-slate-600">
                            <li>Connecting MongoDB with Node.js</li>
                            <li>Creating schemas and models</li>
                            <li>Understanding how backend interacts with the database</li>
                        </ul>
                    </div>
                </div>
                <p className="text-slate-600 leading-8"> I have explored these technologies to build a strong foundation and gain a clear understanding of
                    the full-stack workflow, while currently focusing more on strengthening my frontend skills. </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900">🚀 Learning Mindset</h2>
                <p className="text-slate-600 leading-8"> I believe in learning by building and experimenting. Instead of memorizing code, I focus on
                    understanding why and how things work. </p>
                <p className="text-slate-600 leading-8"> I continuously improve my skills by practicing layouts, buiding small projects, and exploring new
                    concepts step by step. </p>
            </div>
        </section>
    )
}

export default Skills