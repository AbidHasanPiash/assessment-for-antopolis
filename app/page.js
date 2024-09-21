import Hero from "@/components/section/Hero";
import GetStarted from "@/components/section/GetStarted";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import BestSellerDish from "@/components/section/BestSellerDish";
import CustomerReview from "@/components/section/CustomerReview";
import Team from "@/components/section/Team";

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
        </main>
    );
}
