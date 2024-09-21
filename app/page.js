import GetStarted from "@/components/section/GetStarted";
import Hero from "@/components/section/Hero";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function Home() {
    return (
        <main className="space-y-20">
            <Hero/>
            <GetStarted/>
            <WhyChooseUs/>
        </main>
    );
}
