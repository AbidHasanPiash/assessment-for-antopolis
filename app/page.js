import Hero from "@/components/section/Hero";
import GetStarted from "@/components/section/GetStarted";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import BestSellerDish from "@/components/section/BestSellerDish";
import CustomerReview from "@/components/section/CustomerReview";
import Team from "@/components/section/Team";
import HowItWork from "@/components/section/HowItWork";
import Blog from "@/components/section/Blog";
import Client from "@/components/section/Client";

export default function Home() {
    return (
        <main className="space-y-20">
            <Hero/>
            <GetStarted/>
            <WhyChooseUs/>
            <BestSellerDish/>
            <div>
                <CustomerReview/>
                <Team/>
            </div>
            <HowItWork/>
            <Blog/>
            <Client/>
        </main>
    );
}
