// component + react + Material UI imports
import React from 'react';
import {PremiumComponent1} from '../components/premium.js';
import {PremiumComponent2} from '../components/premium2.js';
import {PremiumComponent3} from '../components/premium3.js';
import {PremiumComponent4} from '../components/premium4.js';
import Footer from '../components/footer.js';
import Faq from "react-faq-component";

const data = {

    // FAQ section with drop down content
    title: "FAQ's",
    rows: [
        {
            title: "Can I switch between plans or upgrade/downgrade my subscription?",
            content: `Yes, you can easily upgrade, downgrade, or switch between plans at any time.
            Simply visit your account settings and select the desired plan. Changes will take
            effect immediately or at the end of your current billing cycle.`,
        },
        {
            title: "Is there a limit on the number of photos i can download in the Premium and Premium Plus plans?",
            content:
                "Both the Premium and Premium Plus plans offer unlimited downloads. You can access high-resolution photos as needed for your projects without any download restrictions.",
        },
        {
            title: "Are there differences in the licensing terms between the plans?",
            content: `No, all plans (Basic, Premium, and Premium Plus), provide royalty-free access to photos for personal and commercial use. There are no additional licensing in your projects, irrespective of the plan you choose. `,
        },
        {
            title: "Can I try out the Premium plans before subscribing?",
            content: "Yes, SnapCanvas offers a trial period for the Premium plans. You can experience the benefits of the Premium or Premium Plus plans for a limited duration before committing to a subscription.",
        },
        {
            title: "Is there a difference in the ad experience between the plans?",
            content: "Yes, the Basic plan features ads during browsing, while the Premium and Premium Plus plans offer an ad-free experience, allowing users to focus solely on downloading photos.",
        },
        {
            title: "What happens if I exceed the monthly download limit in the Basic plan?",
            content: "If you reach the download limit in the Basic plan, you can still access the platform and browse images. However, you'll need to wait until the next month's cycle to download additional photos.",
        },
        
    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
};

function MembershipPage() {
    return (
        <div className={"containter"}>
            <PremiumComponent1/>
            <PremiumComponent2/>
            <PremiumComponent3/>
            <PremiumComponent4/> 
            <div style={{width:'90vw', margin: '5vh auto'}}>
            <Faq
                data={data}
                styles={styles}
            />
            </div>
            <Footer/>
        </div>
    );
}

export default MembershipPage;
