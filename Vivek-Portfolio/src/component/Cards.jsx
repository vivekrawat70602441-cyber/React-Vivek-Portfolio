import React from 'react'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'

const Cards = () => {
    return (
        <div id="cards" className="grid gap-8 md:grid-cols-3">
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                <img className="h-56 w-full rounded-3xl object-cover" src={Card1} alt="Card-1" />
                <div className="space-y-4 pt-5">
                    <h2 className="text-2xl font-bold text-slate-900">🌐 Responsive Website</h2>
                    <strong className="block text-slate-900">Description</strong>
                    <p className="text-slate-600"> A fully responsive website built using modern React.js and TailwindCSS.Works smoothly on mobile,tablet and desktop devices.</p>
                    <strong className="block text-slate-900">Tech Stack:</strong>
                    <p className="text-slate-600">React.TailwindCSS</p>
                </div>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                <img className="h-56 w-full rounded-3xl object-cover" src={Card2} alt="Card-2" />
                <div className="space-y-4 pt-5">
                    <h2 className="text-2xl font-bold text-slate-900">🎨 Frontend UI Design</h2>
                    <strong className="block text-slate-900">Description:</strong>
                    <p className="text-slate-600">Clean and simple UI designs with focus on user experience,layout and responsiveness.</p>
                    <strong className="block text-slate-900">Skills Used:</strong>
                    <p className="text-slate-600">Flexbox.Basic Animations</p>
                </div>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl cursor pointer">
                <img className="h-56 w-full rounded-3xl object-cover" src={Card3} alt="Card-3" />
                <div className="space-y-4 pt-5">
                    <h2 className="text-2xl font-bold text-slate-900">👨‍💻 Frontend Developer</h2>
                    <strong className="block text-slate-900">Description:</strong>
                    <p className="text-slate-600">I build simple,fast and responsive websites.Currently improving my skills in JavaScript,Node.js and backend development.
                        Currently learning and building real-world projects.
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Cards
