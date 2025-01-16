import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-beige-900 mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-beige-800 mb-6">
            We'd love to hear from you. Whether you have a project in mind or just want to learn more about our services, don't hesitate to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-beige-600" />
              <p className="text-beige-800">contact@luster.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-beige-600" />
              <p className="text-beige-800">+91 8077937494 </p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-beige-600" />
              <p className="text-beige-800">Noor Nagar, New Delhi, India </p>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-beige-800 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-beige-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-beige-800 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-beige-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-beige-800 mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border border-beige-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-beige-900 text-white rounded-md hover:bg-beige-800 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  )
}

