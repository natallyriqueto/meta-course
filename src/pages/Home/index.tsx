import { Hero } from "@/components/Hero";
import { Header } from "../../components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";

export function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Menu />
            {/* <About /> */}
            <Footer />
        </div>
    )
}