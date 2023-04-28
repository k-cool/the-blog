import * as yup from 'yup';

export const EMAIL_MAX_LENGTH = 100;
export const SUBJECT_MAX_LENGTH = 20;
export const MESSAGE_MAX_LENGTH = 1000;

export interface EamilFormUserInput {
	email: string;
	subject: string;
	message: string;
}

export interface EmailFormErrorMessage {
	email: string;
	subject: string;
	message: string;
}

export const emailFormSchema = yup.object().shape({
	email: yup
		.string()
		.email('올바른 이메일 형식이 아닙니다.')
		.required('이메일을 입력하세요')
		.max(EMAIL_MAX_LENGTH, `이메일은 ${EMAIL_MAX_LENGTH}자를 넘을 수 없습니다.`),
	subject: yup
		.string()
		.required('제목을 입력하세요')
		.max(SUBJECT_MAX_LENGTH, `제목은 ${SUBJECT_MAX_LENGTH}자를 넘을 수 없습니다.`),
	message: yup
		.string()
		.required('내용을 입력하세요')
		.max(MESSAGE_MAX_LENGTH, `내용은 ${MESSAGE_MAX_LENGTH}자를 넘을 수 없습니다.`),
});
