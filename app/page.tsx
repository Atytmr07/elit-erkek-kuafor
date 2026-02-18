import Image from "next/image";
import { SITE_CONFIG, SERVICES, GALLERY_IMAGES } from "@/data/config";
import { Phone, MapPin, Clock, Star, Scissors, CheckCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar (Simple Overlay) */}
            <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="text-2xl font-display font-bold text-gold tracking-widest">
                    {SITE_CONFIG.name.toUpperCase()}
                </div>
                <a
                    href={SITE_CONFIG.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex btn-gold text-sm px-4 py-2"
                >
                    Randevu Al
                </a>
            </nav>

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
                        alt="Barber Shop Interior"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
                    <h2 className="text-gold tracking-[0.2em] font-medium mb-4 uppercase text-sm md:text-base">
                        {SITE_CONFIG.location.address.split(",")[0]}
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
                        KEPEZ'İN <span className="text-gold">EN ELİT</span><br />
                        ERKEK KUAFÖRÜ
                    </h1>
                    <p className="text-lg md:text-xl text-text-silver max-w-2xl mx-auto mb-10 font-light">
                        {SITE_CONFIG.slogan}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={SITE_CONFIG.contact.whatsapp}
                            className="btn-gold"
                        >
                            Randevu Al - WhatsApp
                        </a>
                        <a
                            href={SITE_CONFIG.location.mapUrl}
                            className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors uppercase tracking-wider font-medium"
                        >
                            Yol Tarifi
                        </a>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-20 px-4 bg-black-rich relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Hizmet Anlayışımız
                        </h2>
                        <div className="h-1 w-24 bg-gold mx-auto" />
                        <p className="mt-4 text-text-silver max-w-2xl mx-auto">
                            Sadece saç kesimi değil, stilinizi yansıtan bir deneyim sunuyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service, idx) => (
                            <div
                                key={idx}
                                className="card-glass group"
                            >
                                <div className="mb-4 text-gold p-3 bg-white/5 inline-block rounded-full group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-text-silver text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="py-20 bg-black-secondary">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                                Tarzınız İmzanızdır
                            </h2>
                            <p className="text-text-silver">
                                Memnuniyet odaklı çalışmalarımızdan kareler.
                            </p>
                        </div>
                    </div>

                    {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                        {GALLERY_IMAGES.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative flex-shrink-0 w-[80vw] md:w-auto aspect-square overflow-hidden border border-gold/20 group hover:border-gold transition-colors snap-center"
                                style={{ backgroundColor: '#1a1a1a' }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 80vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black-rich border-t border-white/5 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-gold mb-6">
                            {SITE_CONFIG.name}
                        </h3>
                        <p className="text-text-silver mb-6 max-w-sm">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="bg-black-secondary p-4 border border-white/5 inline-block">
                            <p className="text-gold font-bold mb-1">Çalışma Saatleri</p>
                            <p className="text-white text-sm">{SITE_CONFIG.hours.weekdays}</p>
                            <p className="text-xs text-text-silver mt-2">{SITE_CONFIG.hours.highlight}</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text-silver">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                <span>{SITE_CONFIG.location.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-silver">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                        </ul>
                        <a
                            href={SITE_CONFIG.location.mapUrl}
                            target="_blank"
                            className="mt-6 inline-flex items-center gap-2 text-sm text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-black-rich transition-colors"
                        >
                            <MapPin className="w-4 h-4" />
                            Yol Tarifi Al (Google Maps)
                        </a>
                    </div>

                    {/* Quick Links / Map Placeholder */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Konum</h4>
                        <div className="bg-neutral-800 w-full h-48 rounded-sm relative flex items-center justify-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.7715997247665!2d30.6805716!3d36.943624799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3873551989e5b%3A0x2d50d41060458f6a!2zRWxpdCBFcmtlayBLdWFmw7Zyw7w!5e0!3m2!1sen!2str!4v1771401102626!5m2!1sen!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5 text-neutral-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>
    );
}
