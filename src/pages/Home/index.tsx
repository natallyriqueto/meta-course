import { Hero } from "@/components/Hero";
import { Header } from "../../components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";

export function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Menu />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}