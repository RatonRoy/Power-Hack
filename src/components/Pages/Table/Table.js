import React from 'react';
import './Table.css';

const Table = () => {
	return (
		<section className='body-section'>
			<header className='flex section-header bg-gray-800'>
				<div className='w-1/2 flex items-center justify-between'>
					<p> Billing </p>
					<input type="search" name="search" id="search" className='w-3/4 p-2' placeholder='Search' />
				</div>
				<div>
					<button className='btn btn-secondary'>
						Add New Bill
					</button>
				</div>
			</header>
		</section>
	);
};

export default Table;