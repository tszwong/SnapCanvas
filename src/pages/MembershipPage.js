import React from 'react';
import Footer from '../components/footer.js';
import SignUpForm from '../components/SignUpForm';

function MembershipPage() {
    return (
        <div className={"containter"}>
            <h1>SnapCanvas Premium Subscription</h1>
            <SignUpForm/>
            <Footer/>
        </div>
    );
}

export default MembershipPage;
