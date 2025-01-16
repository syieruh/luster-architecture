import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-beige-900 mb-8">About LUSTER</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-beige-800 mb-6">
            LUSTER is a top-tier architecture and design studio that’s all about crafting amazing spaces that inspire and make a real difference in people’s lives. We’re passionate about fresh, innovative ideas and are deeply committed to sustainability, bringing a one-of-a-kind approach to every project we take on.
          </p>
          <p className="text-beige-800 mb-6">
            Our team of talented architects and designers work collaboratively to push the boundaries of conventional design, always striving to exceed our clients' expectations. We believe that great architecture has the power to enhance the human experience and contribute positively to the environment.
          </p>
          <p className="text-beige-800">
            From residential homes to commercial complexes and public spaces, LUSTER brings creativity, expertise, and attention to detail to every project, ensuring that each design is not just visually stunning, but also functional and sustainable.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
                      src="/pexels (7).jpg"
            alt="LUSTER team"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

