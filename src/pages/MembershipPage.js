import React from 'react';
import {PremiumComponent} from '../components/premium.js';
import Footer from '../components/footer.js';
// import SignUpForm from '../components/SignUpForm';


function MembershipPage() {
    return (
        <div className={"containter"}>
            {/* <SignUpForm/> */}
            <PremiumComponent/>
            <Footer/>
        </div>
    );
}

export default MembershipPage;
