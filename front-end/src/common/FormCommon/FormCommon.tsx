import { FormProps } from "antd";
import React from "react";
const FormLazy = React.lazy(
	() => import(/* webpackChunkName: "sula-antd" */ "antd/lib/form/index")
);
interface Props<T> extends FormProps<T> {}

const FormCommon = <T,>({ ...props }: Props<T>) => {
	// @ts-ignore
	return <FormLazy<T> {...(props as any)} />;
};
export type FormCommonType = typeof FormCommon;

export default FormCommon;
