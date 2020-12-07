import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import HeaderMenu from "./HeaderMenu";
const defaultProps = {};
const overrides = {};

const Dupli = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <HeaderMenu {...rest}>
		<Override slot="SectionContent" />
		<Override slot="menu" />
		<Override slot="menuOverride1" />
		<Override slot="menuOverride12" />
		<Override slot="menuOverride2" />
		<Override slot="menuOverride3" />
		<Override slot="menuOverride4" />
		<Override slot="menuOverride5" />
		{children}
	</HeaderMenu>;
};

Object.assign(Dupli, { ...HeaderMenu,
	defaultProps,
	overrides
});
export default Dupli;