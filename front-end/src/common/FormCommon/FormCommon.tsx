import { FormProps } from "antd";
import Form from "antd/lib/form/Form";
import React from "react";
const FormLazy = React.lazy(
	() => import(/* webpackChunkName: "sula-antd" */ "antd/lib/form/Form")
) as typeof Form;
interface Props<T> extends FormProps<T> {}

const FormCommon = <T,>({ ...props }: Props<T>) => {
	return <FormLazy<T> {...(props as any)} />;
};
export type FormCommonType = typeof FormCommon;

export default FormCommon;
