import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [statusMessage, setStatusMessage] = useState('')

    const validate = (data) => {
        const validationErrors = {}

        if (!data.name.trim()) {
            validationErrors.name = 'Please enter your full name.'
        }

        if (!data.email.trim()) {
            validationErrors.email = 'Please enter your email address.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            validationErrors.email = 'Please enter a valid email address.'
        }

        if (!data.subject.trim()) {
            validationErrors.subject = 'Please enter a subject.'
        }

        if (!data.message.trim()) {
            validationErrors.message = 'Please write a message.'
        } else if (data.message.trim().length < 10) {
            validationErrors.message = 'Message should be at least 10 characters long.'
        }

        return validationErrors
    }

    const handleInputChange = (event) => {
        const { id, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }))

        if (errors[id]) {
            setErrors((prev) => ({
                ...prev,
                [id]: ''
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validationErrors = validate(formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setStatusMessage('Please fix the highlighted fields and try again.')
            return
        }

        setStatusMessage('Your message has been submitted successfully!')
        console.log('Submitted contact form:', formData)
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        setErrors({})
    }

    return (
        <section id="contact" className="space-y-10 rounded-4xl bg-white p-8 shadow-lg shadow-slate-200">
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-900">Contact Information</h2>
                <p className="text-slate-600">I'm open to opportunities, collaborations, and learning experiences.</p>
                <p className="text-slate-600">Feel free to reach out using the details below or the contact form.</p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-slate-700"><strong>Email:</strong> vivekrawat70602441@gmail.com</p>
                    <p className="text-slate-700"><strong>Location:</strong> India</p>
                    <p className="text-slate-700"><strong>Availability:</strong> Open for internships ;& collaborations</p>
                </div>
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-2xl font-semibold text-slate-900">Send Me a Message</h2>
                    <p className="text-slate-600">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as
                        possible.</p>
                    <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input
                                className="cursor-pointer w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input
                                className="cursor-pointer w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Subject</label>
                            <input
                                className="cursor-pointer w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                type="text"
                                id="subject"
                                placeholder="Subject of your message"
                                value={formData.subject}
                                onChange={handleInputChange}
                            />
                            {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                className="cursor-pointer w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                                rows="5"
                                id="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        </div>
                        <button
                            className="cursor-pointer rounded-full bg-slate-900 px-6 py-3 text-white shadow-sm transition hover:bg-slate-800"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                    <p id="formMsg" className= {`text-sm ${statusMessage.includes('successfully') ? 'text-slate-500' : 'text-red-500'}`}>
                        {statusMessage}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact
