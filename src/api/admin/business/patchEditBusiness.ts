import { apiRoutes } from '@/_lib/apiRoutes';
import api from '@/_lib/fetcher';

export const patchEditBusiness = async (
	body: IPatchBusinessRequestType,
	token: string,
	businessId: string,
	setAccessToken: (accessToken: string) => void,
) => {
	const formData = new FormData();

	if (body.name) formData.append('name', body.name);
	if (body.category) formData.append('category', body.category);
	if (body.mainImage) formData.append('mainImage', body.mainImage as File);
	if (body.address) formData.append('address', body.address);
	if (body.latitude) formData.append('latitude', String(body.latitude));
	if (body.longitude) formData.append('longitude', String(body.longitude));
	if (body.businessHours) formData.append('businessHours', body.businessHours);
	if (body.phoneNumber) formData.append('phoneNumber', body.phoneNumber);
	if (body.email) formData.append('email', body.email);

	if (body.addService) {
		formData.append('addService', JSON.stringify(body.addService));
	}
	if (body.addServiceImage && body.addServiceImage.length > 0) {
		body.addServiceImage.forEach((file) => {
			if (file) formData.append('addServiceImage', file);
		});
	}

	if (body.updateService) {
		formData.append('updateService', JSON.stringify(body.updateService));
	}
	if (body.updateServiceImage && body.updateServiceImage.length > 0) {
		body.updateServiceImage.forEach((file) => {
			if (file) formData.append('updateServiceImage', file);
		});
	}

	if (body.removeServiceIds && body.removeServiceIds.length > 0) {
		formData.append('removeServiceIds', JSON.stringify(body.removeServiceIds));
	}

	if (body.addAdditionalImage && body.addAdditionalImage.length > 0) {
		body.addAdditionalImage.forEach((file) => {
			if (file) formData.append('addAdditionalImage', file);
		});
	}

	if (
		body.removeAdditionalImageIds &&
		body.removeAdditionalImageIds.length > 0
	) {
		formData.append(
			'removeAdditionalImageIds',
			JSON.stringify(body.removeAdditionalImageIds),
		);
	}

	if (body.additionalInfo) {
		formData.append('additionalInfo', body.additionalInfo);
	}

	const response = await api.patch<FormData, IResponseType>({
		endpoint: `${apiRoutes.admin}/${businessId}`,
		authorization: token,
		body: formData,
		setAccessToken,
	});

	return response;
};
