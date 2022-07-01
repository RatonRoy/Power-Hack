import React from 'react';
import './Table.css';
import { useForm } from "react-hook-form";

const Table = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const onSubmit = data => {

		// console.log(data);
		const name = data.name;
		const email = data.email;
		const phone = data.phone; 
		const amount = data.amount;
		console.log(name, email, phone, amount);

	};
	return (
		<section className='body-section'>
			<header className='flex section-header bg-gray-800'>
				<div className='w-1/2 flex items-center justify-between'>
					<p> Billing </p>
					<input type="search" name="search" id="search" className='w-3/4 p-2' placeholder='Search' />
				</div>

				<div>
					<label for="my-modal-6" class="btn modal-button btn-secondary">
						Add New Bill
					</label>

					{/* <!-- Put this part before </body> tag --> */}
					<input type="checkbox" id="my-modal-6" class="modal-toggle" />
					<div class="modal modal-bottom sm:modal-middle">
						<div class="modal-box bg-black">
							<label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
							<form onSubmit={handleSubmit(onSubmit)}>

								<div class="form-control w-full max-w-xs">
									<label class="label">

										<span class="label-text"> Your Full Name  </span>

									</label>
									<input
										type="text"
										placeholder="Your Name"
										class="input input-bordered w-full max-w-xs text-black"

										{...register("name", {
											required: {
												value: true,
												message: 'Full Name is Required'
											}

										})}
									/>

									<label class="label">
										{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

									</label>
								</div>
								<div class="form-control w-full max-w-xs">
									<label class="label">

										<span class="label-text"> Email  </span>

									</label>
									<input
										type="email"
										placeholder="Your email"
										class="input input-bordered w-full max-w-xs text-black"

										{...register("email", {
											required: {
												value: true,
												message: 'Email is Required'
											},
											pattern: {
												value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
												message: 'Provide a valid Email'
											}
										})}
									/>

									<label class="label">
										{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
										{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

									</label>
								</div>
								<div class="form-control w-full max-w-xs">
									<label class="label">

										<span class="label-text"> Phone Number  </span>

									</label>
									<input
										type="number"
										placeholder="Phone Number"
										class="input input-bordered w-full max-w-xs text-black"

										{...register("phone", {
											required: {
												value: true,
												message: 'Phone Number is Required'
											},
											minLength: 11
										})}
									/>

									<label class="label">
										{errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
										{errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">min length 11 </span>}

									</label>
								</div>

								<div class="form-control w-full max-w-xs">
									<label class="label">

										<span class="label-text"> Paid Amount </span>

									</label>
									<input
										type="number"
										placeholder=" Amount "
										class="input input-bordered w-full max-w-xs text-black"
										{...register("amount", {
											required: {
												value: true,
												message: 'Amount  is Required'
											},

										})}
									/>

									<label class="label">
										{errors.amount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.amount.message}</span>}
									</label>
								</div>
								<input type="submit" value='Submit' className='btn w-full max-w-xs btn-success' />

							</form>
						</div>
					</div>
				</div>
				{/* <!-- The button to open modal --> */}
				{/* end of the modal */}
			</header>
			<div className="overflow-x-auto table-wrapper">
				<table className="table w-full">
					{/* <!-- head --> */}

					<thead>
						<tr>
							<th>Billing Id</th>
							<th>Full Name </th>
							<th> Email </th>
							<th>Phone</th>
							<th>Paid Amount </th>
							<th> Action </th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
							<td>Blue</td>
							<td>Blue</td>
						</tr>
						{/* <!-- row 2 --> */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
							<td>Purple</td>
							<td>Purple</td>
						</tr>
						{/* <!-- row 3 --> */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
							<td>Red</td>
							<td>Red</td>
						</tr>
						{/* <!-- row 3 --> */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
							<td>Red</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

	);
};

export default Table;