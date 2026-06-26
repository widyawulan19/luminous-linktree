import logo from "../assets/newLogo.png";
import tea from '../assets/tea.png'
import bakeries from '../assets/bakeries.png'
import restaurant from '../assets/restaurant.png'

import {
    PiSealCheckFill,
    PiPinterestLogo,
    PiInstagramLogo,
    PiEnvelopeSimple,
    PiMessengerLogo,
    PiChatCircle,
} from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { TbBriefcase2 } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const links = [
    {
        title: "Pinterest",
        subtitle: "Design inspiration & portfolio",
        icon: <PiPinterestLogo size={18} />,
        link: "https://pin.it/8CjlE5xeT",
    },
    {
        title: "Kwork",
        subtitle: "Digital Menu & Landing Page",
        icon: <TbBriefcase2 size={18} />,
        link: "https://kwork.com/user/luminous19id",
    },
    {
        title: "Contra",
        subtitle: "Freelance collaboration",
        icon: <HiOutlineBriefcase size={18} />,
        link: "https://contra.com/widya_wulan_sari_qufqj1z4?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=widya_wulan_sari_qufqj1z4",
    },
    {
        title: "Instagram",
        subtitle: "Behind the scenes",
        icon: <PiInstagramLogo size={18} />,
        link: "https://www.instagram.com/luminous.id__/",
    },
    {
        title: "Email",
        subtitle: "Let's build something together",
        icon: <PiEnvelopeSimple size={18} />,
        link: "mailto:luminous19.id@gmail.com",
    },
    {
        title: "WhatsApp",
        subtitle: "Let's discuss your project",
        icon: <PiChatCircle size={18} />,
        link: "https://wa.me/6285123340080?text=Hi%20Lumi,%20I'm%20interested%20in%20your%20services."
    },
];

const projects = [
    {
        title: "☕ Tea House",
        subtitle: "Brand Strategy & UI",
        image: tea,
        link: "https://aesthetic-tea-menu.vercel.app"
    },
    {
        title: "🍰 Bakery",
        subtitle: "Web Design & Content",
        image: bakeries,
        link: "https://bakeries-digital-menu.vercel.app"
    },
    {
        title: "🍝 Restaurant",
        subtitle: "Digital Growth Suite",
        image: restaurant,
        link: "https://premium-resto-menu.vercel.app"
    },
];

export default function MainPage() {
    return (
        <div className="mx-auto w-[360px] min-h-screen bg-background px-5 py-8 text-text">
            {/* Profile */}
            <div className="flex flex-col items-center">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-full w-full object-cover"
                    />
                </div>

                <h1 className="mt-4 flex items-center gap-1 text-4xl font-bold">
                    LuminousId
                    <PiSealCheckFill
                        className="text-[#A78954]"
                        size={18}
                    />
                </h1>

                <p className="mt-2 text-xs text-gray-500">
                    Digital Growth Partner for F&B Businesses
                </p>

                <p className="mt-2 max-w-[270px] text-center text-xs leading-5 text-gray-500">
                    Helping cafés and restaurants create beautiful digital experiences.
                </p>

                {/* Portfolio */}
                <a className="mt-8 w-full rounded-full bg-soft-accent py-2 text-md font-bold transition hover:opacity-90 flex flex-col items-center justify-center gap-0"
                    href="https://luminous-catalog-digital-menu.vercel.app"
                >
                    View Catalog
                    <span className="text-[10px] font-normal">
                        See my latest F&B projects
                    </span>
                </a>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-col gap-4">
                {links.map((item) => (
                    <a
                        key={item.title}
                        href={item.link}
                        className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5EF] text-[#8B7755]">
                                {item.icon}
                            </div>

                            <div className="flex flex-col items-center justify-start">
                                <span className="text-sm font-medium w-full text-left">
                                    {item.title}
                                </span>

                                <span className="text-[10px] font-normal">
                                    {item.subtitle}
                                </span>
                            </div>


                        </div>

                        <IoIosArrowForward
                            size={16}
                            className="text-gray-400"
                        />
                    </a>
                ))}
            </div>

            {/* Featured Projects */}
            <section className="mt-10">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
                    Featured Projects
                </p>

                <div className="flex flex-col gap-3">
                    {projects.map((project) => (
                        <a href={project.link}
                            className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <button
                                key={project.title}
                                className="flex items-center justify-between w-full"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-12 w-12 rounded-xl object-cover"
                                    />

                                    <div className="text-left">
                                        <h3 className="text-sm font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>


                                <FiExternalLink
                                    size={16}
                                    className="text-gray-400"
                                />

                            </button>
                        </a>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className="mt-14 flex flex-col items-center gap-3 pb-8 text-xs text-gray-400">
                <p>Made with ☕ by LuminousId</p>

                <div className="flex gap-6">
                    <button>Privacy</button>
                    <button>Terms</button>
                </div>
            </footer>
        </div>
    );
}