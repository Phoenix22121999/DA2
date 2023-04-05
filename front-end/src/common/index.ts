import React from "react";
import { FormCommonType } from "./FormCommon/FormCommon";
import { FormItemCommonType } from "./FormCommon/FormItemCommon";
import { ColumnCommonType } from "./TableCommon/ColumnCommon";
import { TableCommonType } from "./TableCommon/TableCommon";

export const ButtonCommon = React.lazy(
	() => import("./ButtonCommon/ButtonCommon")
);

export const TextAreaCommon = React.lazy(
	() => import("./TextAreaCommon/TextAreaCommon")
);

export const ButtonRadioGroupCommon = React.lazy(
	() => import("./ButtonRadioGroupCommon/ButtonRadioGroupCommon")
);

export const InputCommon = React.lazy(
	() => import("./InputCommon/InputCommon")
);

export const InputSearchCommon = React.lazy(
	() => import("./InputCommon/InputSearchCommon")
);

export const InputNumberCommon = React.lazy(
	() => import("./InputNumberCommon/InputNumberCommon")
);

export const LoadingCommon = React.lazy(
	() => import("./LoadingCommon/LoadingCommon")
);

export const ModalCommon = React.lazy(
	() => import("./ModalCommon/ModalCommon")
);

export const PaginationCommon = React.lazy(
	() => import("./PaginationCommon/PaginationCommon")
);

export const PopconfirmCommon = React.lazy(
	() => import("./PopconfirmCommon/PopconfirmCommon")
);

export const SelectCommon = React.lazy(
	() => import("./SelectCommon/SelectCommon")
);

export const SingleSliderCommon = React.lazy(
	() => import("./SliderCommon/SingleSliderCommon")
);

export const RangeSliderCommon = React.lazy(
	() => import("./SliderCommon/RangeSliderCommon")
);

export const StepsCommon = React.lazy(
	() => import("./StepsCommon/StepsCommon")
);

export const SwitchCommon = React.lazy(
	() => import("./SwitchCommon/SwitchCommon")
);

export const TabCommon = React.lazy(() => import("./TabCommon/TabCommon"));

export const TableCommon = React.lazy(
	() => import("./TableCommon/TableCommon")
) as TableCommonType;

export const ColumnCommon = React.lazy(
	() => import("./TableCommon/ColumnCommon")
) as ColumnCommonType;

export const FormItemCommon = React.lazy(
	() => import("./FormCommon/FormItemCommon")
) as FormItemCommonType;

export const TagCommon = React.lazy(() => import("./TagCommon/TagCommon"));

export const TooltipCommon = React.lazy(
	() => import("./TooltipCommon/TooltipCommon")
);

export const InputPasswordCommon = React.lazy(
	() => import("./InputCommon/InputPasswordCommon")
);

export const FormCommon = React.lazy(
	() => import("./FormCommon/FormCommon")
) as FormCommonType;

export const CollapseCommon = React.lazy(
	() => import("./CollapseCommon/CollapseCommon")
);

export const PanelCommon = React.lazy(
	() => import("./CollapseCommon/PanelCommon")
);
