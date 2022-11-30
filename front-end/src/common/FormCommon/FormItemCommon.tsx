import { Form, FormItemProps } from "antd";

// const { Item: FormItemCommon } = Form;
// export type FormItemCommonType = typeof FormItemCommon;
// export default FormItemCommon;
import React from "react";

interface Props<T> extends FormItemProps<T> {}

const FormItemCommon = <T,>({ children, ...props }: Props<T>) => {
	return <Form.Item {...props}>{children}</Form.Item>;
};
export type FormItemCommonType = typeof FormItemCommon;

export default FormItemCommon;
