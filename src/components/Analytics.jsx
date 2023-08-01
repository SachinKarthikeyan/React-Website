import React from 'react';
import Laptop from '../assets/laptop.jpg';
import YouTubeVideo from './Youtube';

const Analytics = () => {
  const videoId = "9BURESH791k";
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Fraud Detection and Analysis for Insurance Claim using Machine Learning</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>BASE PAPER ABSTRACT:</h1>
          <p>
          Insurance Company working as commercial enterprise from last few years has been experiencing fraud cases for all type of claims. Amount claimed by fraudulent is significantly huge that may causes serious problems, hence along with government, different organization also working to detect and reduce such activities. Such frauds occurred in all areas of insurance claim with high severity such as insurance claimed towards auto sector is fraud that widely claimed and prominent type, which can be done by fake accident claim. So, we aim to develop a project that work on insurance claim data set to detect fraud and fake claims amount. The project implements machine learning algorithms to build model to label and classify claim. Also, to study comparative study of all machine learning algorithms used for classification using confusion matrix in term soft accuracy, precision, recall etc. For fraudulent transaction validation, machine learning model is built using PySpark Python Library.
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>OUR PROPOSED ABSTRACT:</h1>
         <p> Fraud is on the rise across all industries, costing the insurance sector billions of dollars annually, according to estimates. Insurance fraud is an illegal conduct that is done on purpose in order to profit financially. This is currently the most serious issue that numerous insurance companies throughout the world are facing. The majority of the time, one or more gaps in the investigation of false claims has been identified as the primary factor. Insurance fraud is a dishonest conduct that is routinely committed in order to profit financially. These false claims cost the insurance industry a lot of money and cause billions in unnecessary expenses every year. Because of this, the urge to use computer solutions to stop fraud activities grew, offering clients not only a dependable and stable environment but also drastically lowering fraud claims. Since the losses are covered by raising policyholders’ premium costs, these frauds have a negative impact on society. The traditional claim investigation procedure has also been blamed for producing unreliable conclusions because it is time-consuming and laborious. So, utilising Random Forest Classifier, we develop a machine learning-based framework for fraud detection in this research. We demonstrated the results of our research by automating the evaluation of insurance claims using a variety of data methodologies, where the detection of erroneous claims would be done automatically using Data Analytics and Machine Learning techniques. Additionally, the system may be able to create heuristics for fraud signs. As a result, this strategy has a favourable effect on the entire insurance business by boosting both firm reputation and customer happiness.</p>
         <div>
                <p className='text-[#00df9a] font-bold '>Fraud Detection and Analysis for Insurance Claim using Machine Learning</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Output video</h1>

      <YouTubeVideo videoId={videoId} />
      {/* Your other content goes here */}
    </div>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>OUR PROPOSED ABSTRACT:</h1>
</h1>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SYSTEM REQUIREMENTS:</h1>
    <p>Random Forest Classifier</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>HARDWARE REQUIREMENTS:</h1>
    <p>System : Pentium i3 Processor,
Hard Disk : 500 GB,
Monitor : 15’’ LED,
Input Devices : Keyboard, Mouse,
Ram : 4 GB.</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SOFTWARE REQUIREMENTS: </h1>
    Operating system : Windows 10,
Coding Language : Python 3.8,
Web Framework : Flask.
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>REFERENCE:</h1>
    Abhijeet Urunkar; Amruta Khot; Rashmi Bhat; Nandinee Mudegol, “Fraud Detection and Analysis for Insurance Claim using Machine Learning”, 2022 IEEE International Conference on Signal Processing, Informatics, Communication and Energy Systems (SPICES), IEEE CONFERENCE, 2022.
        </div>
      </div>
    </div>
  );
};

export default Analytics;
