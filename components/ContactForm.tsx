/** @format */

'use client';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useI18n } from '@/i18n/I18nProvider';

type FormValues = {
	name: string;
	contact: string; // email or phone
	message: string;
	product?: string;
};

export default function ContactForm({
	defaultProduct = '',
	showForm = true,
}: {
	defaultProduct?: string;
	showForm?: boolean;
}) {
	const { t, lang } = useI18n();
	const whatsappMessage = t('contact.whatsappPreset');
	const mariannaNumber = '+39 347 609 7090';
	const alessandroNumber = '+39 331 286 7417';
	const showAlessandro = lang === 'it';
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm<FormValues>({ defaultValues: { product: defaultProduct } });

	function onSubmit(data: FormValues) {
		console.log('Contact form submitted', data);
		reset({ name: '', contact: '', message: '', product: defaultProduct });
	}

	const containerClass = showForm ? 'grid gap-8 md:grid-cols-2' : 'space-y-6';

	return (
		<div className={containerClass}>
			<div className='space-y-3'>
				<p>
					{t('contact.phoneMariannaLabel')}:{' '}
					<a
						className='underline'
						href='tel:+393476097090'
					>
						{mariannaNumber}
					</a>
				</p>
				{showAlessandro && (
					<p>
						{t('contact.phoneAlessandroLabel')}:{' '}
						<a
							className='underline'
							href='tel:+393312867417'
						>
							{alessandroNumber}
						</a>
					</p>
				)}
				<p>
					{t('contact.email')}:{' '}
					<a
						className='underline'
						href='mailto:madeinsicilyinfo@gmail.com'
					>
						madeinsicilyinfo@gmail.com
					</a>
				</p>
				<p>
					<Link
						href={`https://wa.me/393476097090?text=${encodeURIComponent(
							whatsappMessage
						)}`}
						className='inline-block bg-turquoise text-white px-4 py-2 rounded-md hover:bg-sky transition-colors'
					>
						{t('contact.whatsapp')}
					</Link>
				</p>

				<div className='mt-6'>
					<div className='font-serif text-xl mb-2'>Taormina</div>
					<div className='overflow-hidden rounded-xl shadow-subtle'>
						<iframe
							title='Mappa di Taormina / Map of Taormina'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.973135338637!2d15.28551737602273!3d37.85227390769177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131411a2224c4485%3A0x3e490597412c2f6d!2sVia%20Calapitrulli%2C%205%2C%2098039%20Taormina%20ME!5e1!3m2!1sit!2sit!4v1765283229486!5m2!1sit!2sit'
							width='100%'
							height='260'
							style={{ border: 0 }}
							loading='lazy'
							allowFullScreen
							referrerPolicy='no-referrer-when-downgrade'
						/>
					</div>
				</div>
			</div>

			{showForm && (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='bg-white/70 rounded-xl p-6 shadow-subtle border border-porcelain'
				>
					<div className='grid gap-4'>
						<div>
							<label
								className='block text-sm mb-1'
								htmlFor='name'
							>
								{t('contact.form.name')}
							</label>
							<input
								id='name'
								className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise'
								{...register('name', {
									required: 'Please tell us your name',
								})}
							/>
							{errors.name && (
								<p className='text-red-700 text-sm mt-1'>
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<label
								className='block text-sm mb-1'
								htmlFor='contact'
							>
								{t('contact.form.contact')}
							</label>
							<input
								id='contact'
								className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise'
								{...register('contact', {
									required:
										'Please provide an email or phone',
								})}
							/>
							{errors.contact && (
								<p className='text-red-700 text-sm mt-1'>
									{errors.contact.message}
								</p>
							)}
						</div>

						<div>
							<label
								className='block text-sm mb-1'
								htmlFor='product'
							>
								{t('contact.form.product')}
							</label>
							<input
								id='product'
								className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise'
								placeholder='e.g. tavolo-etna-blu'
								{...register('product')}
							/>
						</div>

						<div>
							<label
								className='block text-sm mb-1'
								htmlFor='message'
							>
								{t('contact.form.message')}
							</label>
							<textarea
								id='message'
								rows={5}
								className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-turquoise'
								{...register('message', {
									required: 'Please include a message',
								})}
							/>
							{errors.message && (
								<p className='text-red-700 text-sm mt-1'>
									{errors.message.message}
								</p>
							)}
						</div>

						<button
							type='submit'
							className='mt-2 bg-turquoise text-white px-4 py-2 rounded-md hover:bg-sky transition-colors w-full md:w-auto'
						>
							{t('contact.form.send')}
						</button>

						{isSubmitSuccessful && (
							<p className='text-green-700 text-sm'>
								{t('contact.form.success')}
							</p>
						)}
					</div>
				</form>
			)}
		</div>
	);
}
