import React from 'react';
import JobPostings from './JobPostings';
import JoinForm from './JoinForm';

const JobsAndForm = () => {
  return (
    <section className="container default-spacing scroll-m-12" id="job-posting">
      <div className="flex lg:flex-row flex-col lg:gap-16 px-12 xl:px-0">
        <main className="lg:w-2/3 w-full">
          <JobPostings />
        </main>
        <JoinForm />
      </div>
    </section>
  );
};

export default JobsAndForm;
