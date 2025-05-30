'use client';
import LongInput from '@/components/inputs/LongInput';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BigButton from '@/components/buttons/BigButton';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';
import { usePostAdminLogin } from '@/hooks/api/admin/auth/usePostAdminLogin';

function AdminLogin() {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const router = useRouter();
	const { isHydrated, accessToken } = useAuthStore();
	const { mutate: Login } = usePostAdminLogin();

	useEffect(() => {
		if (!isHydrated) {
			return;
		}

		if (accessToken) {
			router.replace('/admin/main');
		}
	}, [accessToken, isHydrated, router]);

	const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const trimmedId = e.target.value.trim();
		setUsername(trimmedId);
	};

	const handlePwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const trimmedPw = e.target.value.trim();
		setPassword(trimmedPw);
	};

	const handleLoginBtnClick = () => {
		Login({ username, password });
	};

	if (!isHydrated) {
		return null;
	}

	if (accessToken) {
		return null;
	}

	return (
		<div>
			<div className='flex flex-col justify-center items-center h-[50vh]'>
				<Image
					src={'/logo/fatepetLogo.svg'}
					width={220}
					height={220}
					alt='fatepet logo'
				/>
				<div className='font-bold text-2xl mt-3'>업체관리</div>
			</div>
			<div className='mx-2'>
				<div className='mb-3'>
					<LongInput
						inputData={username}
						onChange={handleIdInputChange}
						placeHolder='아이디'
						disabled={false}
						errorMsg=''
					/>
				</div>
				<div className='mb-3'>
					<LongInput
						inputData={password}
						onChange={handlePwInputChange}
						placeHolder='비밀번호'
						disabled={false}
						errorMsg=''
						inputType='password'
					/>
				</div>
				<div>
					<BigButton buttonText='로그인' handleClick={handleLoginBtnClick} />
				</div>
			</div>
			<div className='flex flex-col text-gray-500 m-20'>
				<div className='flex justify-center whitespace-nowrap'>
					아이디/비밀번호 분실 시 고객센터로 문의주세요.
				</div>
				<div className='flex justify-center'>fatepet@~~~.com</div>
			</div>
		</div>
	);
}

export default AdminLogin;
