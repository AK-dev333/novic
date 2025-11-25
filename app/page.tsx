import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <header className="pl-12 pr-8 py-4">
        <Image
          src="/logo.png"
          alt="Novic Logo"
          width={200}
          height={60}
          priority
          className="object-contain scale-110"
        />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mt-7">
        {/* Top Line */}
        <div
          className="w-full max-w-4xl mx-auto mb-6"
          style={{ height: '2.5px', background: 'linear-gradient(to right, transparent, #9C59CC, transparent)' }}
        ></div>

        {/* Hero Content */}
        <div className="text-center px-8">
          <h1 className="text-5xl font-bold tracking-wider mb-4">
            HERO TITLE
          </h1>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Hero subtitle or description goes here
          </p>
        </div>

        {/* Bottom Line */}
        <div
          className="w-full max-w-4xl mx-auto mt-6"
          style={{ height: '2.5px', background: 'linear-gradient(to right, transparent, #9C59CC, transparent)' }}
        ></div>
      </section>

      {/* Navigation Boxes */}
      <section className="flex justify-center items-center gap-6 mt-16 px-8">
        <div className="border-2 border-gray-500 px-12 py-6 hover:bg-novic-purple/30 transition-colors cursor-pointer">
          <p className="text-gray-800 text-sm tracking-widest uppercase font-medium">Intro</p>
        </div>
        <div className="border-2 border-gray-500 px-12 py-6 hover:bg-novic-purple/30 transition-colors cursor-pointer">
          <p className="text-gray-800 text-sm tracking-widest uppercase font-medium">Services</p>
        </div>
        <div className="border-2 border-gray-500 px-12 py-6 hover:bg-novic-purple/30 transition-colors cursor-pointer">
          <p className="text-gray-800 text-sm tracking-widest uppercase font-medium">About</p>
        </div>
        <div className="border-2 border-gray-500 px-12 py-6 hover:bg-novic-purple/30 transition-colors cursor-pointer">
          <p className="text-gray-800 text-sm tracking-widest uppercase font-medium">Contact</p>
        </div>
      </section>
    </main>
  );
}
