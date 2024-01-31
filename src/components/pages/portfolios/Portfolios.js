import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { projects } from '../../../data';

export default function Portfolios() {
  return (
    <div className="">
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>Apps I've Built</strong>
					</h6>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of my projects have been able to build with different technology tools that I 
            have learnt in developing myself and to measure my growth.
          </p>
				</div>
        <div className="card-content flex flex-wrap -m-4">
          {projects?.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h5 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h5>
                  <h6 className="title-font text-sm font-medium text-white mb-3">
                    {project.title}
                  </h6>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
			</div>
		</div>
  )
}
