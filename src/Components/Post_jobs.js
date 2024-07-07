import React from 'react'
import './Post_job.css'

export default function Post_jobs() {
  return (
    <div>
      <h1 className="text-center my-4">
        <u>ENTER JOB DETAILS</u>
      </h1>
      <div className="details">
        <form className="container my-4 p-4 border">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Enter title of job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salary:
            </label>
            <input
              type="number"
              id="salary"
              className="form-control"
              placeholder="Enter Salary for this job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Email to be Contacted for this job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company:
            </label>
            <input
              type="text"
              id="company"
              className="form-control"
              placeholder="Enter Company of job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              id="description"
              className="form-control"
              placeholder="Enter description of job"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="jobCategory" className="form-label">
              Job Category:
            </label>
            <input
              type="text"
              id="jobCategory"
              className="form-control"
              placeholder="Enter Category of job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jobType" className="form-label">
              Job Type:
            </label>
            <select id="jobType" className="form-select">
              <option value="" disabled selected>
                Please Select Job type
              </option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="jobExperience" className="form-label">
              Job Experience:
            </label>
            <input
              type="text"
              id="jobExperience"
              className="form-control"
              placeholder="Enter Experience Required for this job"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jobVacancy" className="form-label">
              Job Vacancy:
            </label>
            <input
              type="number"
              id="jobVacancy"
              className="form-control"
              placeholder="Enter Number of Vacancies"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jobDeadline" className="form-label">
              Job Deadline:
            </label>
            <input type="date" id="jobDeadline" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
