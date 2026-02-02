"use client";

import React from "react";

interface Job {
  id: number;
  title: string;
  description: string;
  requirements?: string[];
  skills?: string[];
  workOn?: string[];
  profile?: string[] | string;
  bonus?: string[];
}

const JobPostings = () => {
  const torontoJobs = [
    {
      id: 1,
      title: "Senior Google Advertising Account Manager",
      description:
        "We are seeking a talented individual to join our team as a Senior Google Advertising Account Manager.",
      requirements: [
        "Minimum 2 Years of Google Ads Account Management Experience.",
        "Applicant must be able build, manage, and optimize Google Ads accounts ensuring that all deliverables are presented on time and of a high quality.",
        "Applicant must be familiar with Google Analytics and Google Ads Editor.",
        "Applicants should be able to write powerful ad copy, & have the financial acumen required for budget management/ROI analysis.",
        "The role demands that you regularly communicate with clients, discussing account performance and strategy.",
        "You should be comfortable analyzing metrics, draw conclusions from data and create summary reports.",
        "Effectively make data driven decisions and constantly improve campaign performance to maximize ROI.",
      ],
    },
    {
      id: 2,
      title: "Account Executive - Sales",
      description:
        "NafaDigital is hiring a full-time Account Executive for sales. We are looking for an outgoing, motivated sales enthusiast with a strong digital marketing background. Must be able to respond to inbound sales enquiries, educate potential customers on NafaDigital's service offerings, and help coordinate on-boarding. Our sales environment tends to be very fast paced, exciting, and constantly changing.",
      requirements: [
        "Successfully close new business through relationship-based selling.",
        "Master the ability to evangelize the NafaDigital story.",
        "Achieve and exceed monthly and quarterly quotas/sales targets.",
        "Align NafaDigital solutions with prospect business objectives/needs.",
        "Successfully manage and overcome prospect objections.",
        "Collaborate effectively with the account team and others to drive new business.",
        "Proactively keep abreast of our industry and the technology landscape to ensure you are a trusted resource to prospects and customers.",
      ],
      skills: [
        "2+ years experience and success in a sales role, preferably digital.",
        "Strong understanding of current digital marketing solutions and Google advertising platforms.",
        "Excellent written and oral communication skills. You will be required to sell, provide support, troubleshoot, and analyze campaign performance in real-time with customers.",
        "Passion for online advertising and empowering SMBs.",
        "Demonstrated leadership ability (we want natural leaders).",
        "Ability to confidently and effectively speak with prospects of all levels (including CEOs and VPs).",
        "Highly organized and strong time management skills.",
        "Ability to work in a fast paced, changing environment with minimal direction.",
        "Self driven, motivated, and results-oriented.",
      ],
    },
    {
      id: 3,
      title: "Google Advertising Account Manager - eCommerce",
      description:
        "NafaDigital is seeking a hard-working individual to join our team as an eCommerce Ads Account Manager.",
      requirements: [
        "Minimum 2 years of Google Ads account management experience.",
        "Applicant must be able build, manage, and optimize Google Ads accounts ensuring that all deliverables are presented on time and of a high quality.",
        "Applicant must be familiar with Google platforms including Analytics, Ads Editor, Merchant Center, and Datastudio.",
        "Applicants should be able to write powerful ad copy and have the financial acumen required for budget management/ROI analysis.",
        "Applicant must be able to dissect and analyze large databases containing product inventory feed information.",
        "Applicant can comfortably navigate through all conversion-related reports within Google Analytics and diagnose key consumer behavior patterns from consumers.",
        "Applicant can provide retail-related recommendations to customers based on industry trends, holiday seasons, and latest features in the market.",
        "The role demands that you regularly communicate with clients, discussing account performance and strategy.",
        "You should be comfortable analyzing metrics, draw conclusions from data, and create summary reports.",
        "Effectively make data-driven decisions and constantly improve campaign performance to maximize ROI.",
      ],
    },
    {
      id: 4,
      title: "Billing Specialist",
      description:
        "NafaDigital is hiring a full-time Billing Specialist. We are looking for an outgoing, motivated person who can assist with the billing of new and existing customers. Must be able to speak confidently on the phone with customers and troubleshoot when necessary. Our environment tends to be very fast-paced and requires the ability to multitask efficiently.",
      workOn: [
        "Create and update customer profiles in our internal management system",
        "Set up/process credit cards using our online billing/invoice platform",
        "Manage/follow up on delinquent invoices",
        "Explain credit card charges so our customers understand the appropriate services and the related fees",
        "Answer the phones and respond to customers' needs or transfer communication to the appropriate party",
        "Respond to client inquiries and resolve any client invoicing related issues",
        "Communicate with other billing team members and the operations team to verify and resolve any invoicing related issues",
        "Following up with Sales, Operations and other departments for all necessary information required for data entry and invoicing clarifications requested by the customer",
        "Proactively recommend changes in billing and collections processes and procedures to make them more efficient and effective.",
      ],
      requirements: [
        "High school diploma/GED required (College degree preferred)",
        "Excellent written and oral communication skills",
        "An efficient multi-tasker who thrives in a fast-paced environment",
        "Highly organized and strong time management skills",
        "Ability to work independently & under pressure",
        "Self-motivated with the ability to prioritize tasks",
        "Exceptional attention to detail",
        "Minimum of 1 year experience in a similar role",
      ],
    },
    {
      id: 5,
      title: "Digital Operations Associate",
      description:
        "NafaDigital is hiring a full-time Digital Operations Associate for our Operations Team. We are looking for a customer service focused individual who can assist with the onboarding/set up of new customers, and has the ability to understand & navigate website tracking. Our Operations Team environment tends to be very fast-paced, exciting, and constantly evolving.",
      profile: [
        "An efficient multi-tasker who thrives in a fast-paced environment",
        "A quick learner, analytical thinker, and effective problem solver",
        "Highly motivated to learn and work in digital technologies",
        "Able to work independently & under pressure",
        "Process-driven and very detail-oriented",
        "Able to collaborate in a team environment",
      ],
      skills: [
        "Minimum 1-year experience in a similar role",
        "Excellent oral and written communication skills",
        "Strong management and organizational skills - ability to manage multiple projects at once",
        "Highly proficient with computer programs",
        "Familiar with HTML and Javascript tracking code installation",
        "Comfortable interacting/communicating with customers and web developers",
        "Experience with Google Analytics",
      ],
      bonus: [
        "Experience with Google & Microsoft Ads",
        "Knowledge of how Call Tracking works",
        "Exposure to Google Tag Assistant and Google Tag Manager is helpful",
        "Knowledge of different Content Management Systems (Wix, WordPress, GoDaddy, etc)",
        "Google Certification",
      ],
    },
  ];

  const vancouverJobs = [
    {
      id: 1,
      title: "Senior Google Advertising Account Manager",
      description:
        "We are seeking a talented individual to join our team as a Senior Google Advertising Account Manager.",
      requirements: [
        "Minimum 2 Years of Google Ads Account Management Experience.",
        "Applicant must be able build, manage, and optimize Google Ads accounts ensuring that all deliverables are presented on time and of a high quality.",
        "Applicant must be familiar with Google Analytics and Google Ads Editor.",
        "Applicants should be able to write powerful ad copy, & have the financial acumen required for budget management/ROI analysis.",
        "The role demands that you regularly communicate with clients, discussing account performance and strategy.",
        "You should be comfortable analyzing metrics, draw conclusions from data and create summary reports.",
        "Effectively make data driven decisions and constantly improve campaign performance to maximize ROI.",
      ],
    },
    {
      id: 2,
      title: "Account Executive - Sales",
      description:
        "NafaDigital is hiring a full-time Account Executive for sales. We are looking for an outgoing, motivated sales enthusiast with a strong digital marketing background. Must be able to respond to inbound sales enquiries, educate potential customers on NafaDigital's service offerings, and help coordinate on-boarding. Our sales environment tends to be very fast paced, exciting, and constantly changing.",
      requirements: [
        "Successfully close new business through relationship-based selling.",
        "Master the ability to evangelize the NafaDigital story.",
        "Achieve and exceed monthly and quarterly quotas/sales targets.",
        "Align NafaDigital solutions with prospect business objectives/needs.",
        "Successfully manage and overcome prospect objections.",
        "Collaborate effectively with the account team and others to drive new business.",
        "Proactively keep abreast of our industry and the technology landscape to ensure you are a trusted resource to prospects and customers.",
      ],
      skills: [
        "2+ years experience and success in a sales role, preferably digital.",
        "Strong understanding of current digital marketing solutions and Google advertising platforms.",
        "Excellent written and oral communication skills. You will be required to sell, provide support, troubleshoot, and analyze campaign performance in real-time with customers.",
        "Passion for online advertising and empowering SMBs.",
        "Demonstrated leadership ability (we want natural leaders).",
        "Ability to confidently and effectively speak with prospects of all levels (including CEOs and VPs).",
        "Highly organized and strong time management skills.",
        "Ability to work in a fast paced, changing environment with minimal direction.",
        "Self driven, motivated, and results-oriented.",
      ],
    },
    {
      id: 3,
      title: "Google Advertising Account Manager - eCommerce",
      description:
        "NafaDigital is seeking a hard-working individual to join our team as an eCommerce Ads Account Manager.",
      requirements: [
        "Minimum 2 years of Google Ads account management experience.",
        "Applicant must be able build, manage, and optimize Google Ads accounts ensuring that all deliverables are presented on time and of a high quality.",
        "Applicant must be familiar with Google platforms including Analytics, Ads Editor, Merchant Center, and Datastudio.",
        "Applicants should be able to write powerful ad copy and have the financial acumen required for budget management/ROI analysis.",
        "Applicant must be able to dissect and analyze large databases containing product inventory feed information.",
        "Applicant can comfortably navigate through all conversion-related reports within Google Analytics and diagnose key consumer behavior patterns from consumers.",
        "Applicant can provide retail-related recommendations to customers based on industry trends, holiday seasons, and latest features in the market.",
        "The role demands that you regularly communicate with clients, discussing account performance and strategy.",
        "You should be comfortable analyzing metrics, draw conclusions from data, and create summary reports.",
        "Effectively make data-driven decisions and constantly improve campaign performance to maximize ROI.",
      ],
    },
  ];

  const JobAccordion = ({
    job,
    containerRef,
  }: {
    job: Job;
    containerRef: string;
  }) => {
    return (
      <li className="relative bg-bgGray rounded-xl">
        <button
          type="button"
          className="w-full text-left"
          onClick={() => {
            const container = document.querySelector(
              `[data-ref="${containerRef}"]`
            ) as HTMLElement;
            if (container) {
              const isExpanded =
                container.style.maxHeight !== "0px" &&
                container.style.maxHeight !== "";
              if (isExpanded) {
                container.style.maxHeight = "0px";
              } else {
                container.style.maxHeight = container.scrollHeight + "px";
              }
            }
          }}
        >
          <div className="flex items-center justify-between">
            <h3 className="px-6 py-6 font-bold text-md md:text-lg pr-12">
              {job.title}
            </h3>
            <span className="absolute right-0 material-symbols-outlined text-[2rem] text-primary px-4 transition-transform duration-300">
              expand_more
            </span>
          </div>
        </button>
        <div
          className="relative overflow-hidden transition-all max-h-0 duration-150"
          data-ref={containerRef}
          style={{ maxHeight: "0px" }}
        >
          <div className="px-6 pb-6">
            <p className="font-bold text-base mb-2">Job Description</p>
            <p className="text-base mb-4">{job.description}</p>

            {job.workOn && (
              <div className="py-4">
                <p className="font-bold text-base mb-2">
                  What You Will Work On
                </p>
                <ul className="checklist">
                  {job.workOn.map((item: string, index: number) => (
                    <li key={index} className="flex gap-2 py-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.profile && (
              <div className="py-4">
                <p className="font-bold text-base mb-2">Profile</p>
                <ul className="checklist">
                  {Array.isArray(job.profile) ? (
                    job.profile.map((item: string, index: number) => (
                      <li key={index} className="flex gap-2 py-2">
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex gap-2 py-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{job.profile}</span>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {job.requirements && (
              <div className="py-4">
                <p className="font-bold text-base mb-2">
                  {job.workOn || job.profile
                    ? "Requirements"
                    : "Applicant Requirements"}
                </p>
                <ul className="checklist">
                  {job.requirements.map((item: string, index: number) => (
                    <li key={index} className="flex gap-2 py-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.skills && (
              <div className="py-4">
                <p className="font-bold text-base mb-2">
                  {job.profile ? "Skills" : "Qualifications / Skills"}
                </p>
                <ul className="checklist">
                  {job.skills.map((item: string, index: number) => (
                    <li key={index} className="flex gap-2 py-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.bonus && (
              <div className="py-4">
                <p className="font-bold text-base mb-2">Bonus</p>
                <ul className="checklist">
                  {job.bonus.map((item: string, index: number) => (
                    <li key={index} className="flex gap-2 py-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  };

  return (
    <>
      <h2 className="mb-8">Current Opportunities</h2>

      <div className="mb-8">
        <p className="lg:text-2xl text-xl font-bold my-4 lg:px-6 px-4 tracking-tighter">
          Toronto :
        </p>
        <div className="bg-white">
          <ul className="flex flex-col gap-4 shadow-box">
            {torontoJobs.map((job) => (
              <JobAccordion
                key={`toronto-${job.id}`}
                job={job}
                containerRef={`toronto-container${job.id}`}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <p className="lg:text-2xl text-xl font-bold my-4 lg:px-6 px-4 tracking-tighter">
          Vancouver :
        </p>
        <div className="bg-white">
          <ul className="flex flex-col gap-4 shadow-box">
            {vancouverJobs.map((job) => (
              <JobAccordion
                key={`vancouver-${job.id}`}
                job={job}
                containerRef={`vancouver-container${job.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobPostings;
