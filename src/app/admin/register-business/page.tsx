'use client';
import HeaderWithBackArrow from '@/components/headers/HeaderWithBackArrow';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ServiceInfoArea from './_components/ServiceInfoArea';
import BusinessInfoArea from './_components/BusinessInfoArea';
import AdditionalInfoArea from './_components/AdditionalInfoArea';
import { convertAddressToCoordinates } from '@/hooks/useConvertAddressToCoordinates';
import useAuthStore from '@/store/useAuthStore';
import { usePostCreateBusiness } from '@/hooks/api/admin/business/usePostCreateBusiness';

const areaNameClass = 'font-bold text-[14px] text-gray-middle mt-[10px]';
const borderClass = 'w-[100%] h-[1px] bg-gray-middle mb-[10px]';

function RegisterBusiness() {
	const router = useRouter();
	const { accessToken, setAccessToken } = useAuthStore();
	const { mutate: createBusiness } = usePostCreateBusiness(
		accessToken,
		setAccessToken,
	);
	const [businessItem, setBusinessItem] =
		useState<IPostCreateBusinessRequestType>({
			name: '',
			category: '장묘',
			mainImage: null,
			address: '',
			latitude: 0,
			longitude: 0,
			businessHours: '',
			phoneNumber: '',
			email: '',
			service: [],
			serviceImage: [],
			additionalImage: [],
			additionalInfo: '',
		});
	const [thumbnailFile, setThumbnailFile] = useState<string | File | null>(
		null,
	);
	const [address, setAddress] = useState<string>('');
	const [detailAddress, setDetailAddress] = useState<string>('');
	const [errorMsgs, setErrorMsgs] = useState<IBusinessErrorMsgType>({
		nameError: '',
		hoursError: '',
		phoneError: '',
		emailError: '',
		addressError: '',
	});
	const [serviceErrorMsgs, setServiceErrorMsgs] = useState<string[]>(['']);
	const [serviceList, setServiceList] = useState<IServiceItemType[]>([
		{
			type: '기본항목',
			name: '',
			description: '',
			priceType: '직접입력',
			price: '',
			image: false,
		},
	]);
	const [serviceImageList, setServiceImageList] = useState<(File | null)[]>([]);
	const [additionalImgFileList, setAdditionalImgFileList] = useState<
		(File | null)[]
	>([]);

	useEffect(() => {
		const updatedErrorMsgs = serviceList.map((service) =>
			service.name === '' ? '서비스명을 입력해주세요.' : '',
		);

		setServiceErrorMsgs(updatedErrorMsgs);
	}, [serviceList]);

	useEffect(() => {
		convertAddressToCoordinates(address).then((result) => {
			setBusinessItem((prev) => ({
				...prev,
				latitude: result?.lat ?? 0,
				longitude: result?.lng ?? 0,
			}));
		});
		const validAdditionalImgFiles = additionalImgFileList.filter(
			(file): file is File => file !== null,
		);
		const validServiceImgFiles = serviceImageList.filter(
			(file): file is File => file !== null,
		);
		setBusinessItem((prev) => ({
			...prev,
			mainImage: thumbnailFile as File,
			service: serviceList,
			additionalImage: validAdditionalImgFiles,
			serviceImage: validServiceImgFiles,
		}));
	}, [
		address,
		thumbnailFile,
		serviceImageList,
		serviceList,
		additionalImgFileList,
	]);

	const isValidPhoneNumber = (phoneNumber: string) => {
		const regex = /^010\d{8}$/;
		return regex.test(phoneNumber);
	};

	const handleBusinessRegisterButton = () => {
		const newErrors = { ...errorMsgs };

		if (businessItem.name === '') {
			newErrors.nameError = '업체명을 입력해주세요.';
		} else {
			newErrors.nameError = '';
		}
		if (businessItem.businessHours === '') {
			newErrors.hoursError = '운영시간을 입력해주세요.';
		} else {
			newErrors.hoursError = '';
		}
		if (businessItem.phoneNumber === '') {
			newErrors.phoneError = '휴대폰번호를 입력해주세요.';
		} else if (!isValidPhoneNumber(businessItem.phoneNumber)) {
			newErrors.phoneError = '형식이 올바르지 않습니다.';
		} else {
			newErrors.phoneError = '';
		}
		if (businessItem.email === '') {
			newErrors.emailError = '이메일을 입력해주세요.';
		} else {
			newErrors.emailError = '';
		}
		if (businessItem.address === '') {
			newErrors.addressError = '주소를 설정해주세요.';
		} else {
			newErrors.addressError = '';
		}
		setErrorMsgs(newErrors);

		createBusiness(businessItem);
	};

	return (
		<div className='mb-[60px]'>
			<HeaderWithBackArrow
				headerTitle='업체등록'
				handleBackArrowClick={() => router.back()}
				hasRightConfirmButton={true}
				handleRightButtonClick={handleBusinessRegisterButton}
			/>
			<div className='flex flex-col gap-[10px]'>
				<div>
					<p className={areaNameClass}>업체 정보</p>
					<div className={borderClass} />
					<BusinessInfoArea
						businessItem={businessItem}
						setBusinessItem={setBusinessItem}
						errorMsgs={errorMsgs}
						setErrorMsgs={setErrorMsgs}
						imageFile={thumbnailFile}
						setImageFile={setThumbnailFile}
						address={address}
						setAddress={setAddress}
						detailAddress={detailAddress}
						setDetailAddress={setDetailAddress}
					/>
				</div>
				<div>
					<p className={`${areaNameClass} mt-[50px]`}>서비스 정보</p>
					<div className={borderClass} />
					<ServiceInfoArea
						serviceList={serviceList}
						setServiceList={setServiceList}
						serviceImageList={serviceImageList}
						setServiceImageList={setServiceImageList}
						serviceErrorMsgs={serviceErrorMsgs}
					/>
				</div>
				<div>
					<p className={`${areaNameClass} mt-[50px]`}>기타 정보</p>
					<div className={borderClass} />
					<AdditionalInfoArea
						setAdditionalImgFileList={setAdditionalImgFileList}
						businessItem={businessItem}
						setBusinessItem={setBusinessItem}
						additionalImgFileList={additionalImgFileList}
					/>
				</div>
			</div>
		</div>
	);
}

export default RegisterBusiness;
