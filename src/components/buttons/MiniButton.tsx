import React from 'react';

interface Props {
	buttonText: string;
	handleClick: () => void;
	isClicked?: boolean;
}

export const MiniButton = ({ buttonText, handleClick, isClicked }: Props) => {
	let className = `font-bold text-[14px] rounded-[4px] px-[20px] min-w-[65px] h-[30px] whitespace-nowrap`;
	if (buttonText === '로그아웃') {
		className += ' text-white bg-p-black';
	} else if (buttonText === '삭제') {
		className += ' text-white bg-gray-middle';
	} else {
		if (isClicked) {
			className += ' bg-p-black text-white ';
		} else {
			className += ' bg-white text-black border border-p-black';
		}
	}
	return (
		<button className={`cursor-pointer ${className}`} onClick={handleClick}>
			{buttonText}
		</button>
	);
};
