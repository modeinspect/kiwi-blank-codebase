import * as React from "react";

import { TYPE_OPTIONS } from "../consts";
import Apple from "@/lib/kiwi-orbit/icons/Apple";
import Google from "@/lib/kiwi-orbit/icons/Google";
import Facebook from "@/lib/kiwi-orbit/icons/Facebook";
import X from "@/lib/kiwi-orbit/icons/X";
import Email from "@/lib/kiwi-orbit/icons/Email";
import type { Type } from "../types";

const getSocialButtonIcon = (type: Type): React.ReactNode | null => {
  if (type === TYPE_OPTIONS.APPLE) return <Apple ariaHidden />;
  if (type === TYPE_OPTIONS.FACEBOOK) return <Facebook ariaHidden />;
  if (type === TYPE_OPTIONS.GOOGLE) return <Google ariaHidden />;
  if (type === TYPE_OPTIONS.X) return <X ariaHidden />;
  if (type === TYPE_OPTIONS.EMAIL) return <Email ariaHidden />;

  return null;
};

export default getSocialButtonIcon;
