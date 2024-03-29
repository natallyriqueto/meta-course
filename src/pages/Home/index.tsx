import { Hero } from "@/sections/Hero";
import { Menu } from "@/sections/Menu";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";

export function Home() {
    return (
        <div>
            <Hero />
            <Menu />
            <Testimonials />
            <About />
        </div>
    )
}