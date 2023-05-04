import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mb-36 mt-2'>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="w-full max-w-lg p-6">
                    <h2 className="text-2xl font-medium mb-4">Meal Master Terms and Conditions</h2>
                    <p className="mb-4">
                        Welcome to Meal Master, an Indian chef recipe website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Meal Master's relationship with you in relation to this website.
                    </p>
                    <p className="mb-4">
                        The use of this website is subject to the following terms of use:
                    </p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>You must be 18 years or older to use this website.</li>
                        <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                        <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                        <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                        <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
                        <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                        <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                        <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.</li>
                    </ol>
                    <p className="mb-4">
                        By continuing to use our website, you acknowledge that you have read and understood these terms and conditions and agree to be bound by them.
                    </p>
                </div>
                
            </div>
            <div className='text-center'>
            <p>Go Back to <Link to='/register' className='button'>Register </Link></p>
            </div>
           

        </div>
    );
};

export default Terms;