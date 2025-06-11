"use client";

import { ButtonLink, NavigationBar, Stack } from "@kiwicom/orbit-components";
import {
  AccountCircle,
  ChevronDown,
  QuestionCircle,
  StarFull,
} from "@kiwicom/orbit-components/lib/icons";

function NavigationBarDemo() {
  return (
    <NavigationBar
      bottomStyle="shadow"
      hideOnScroll
      id="navigation-menu-id"
      onHide={() => {}}
      onMenuOpen={() => {}}
      onShow={() => {}}
      openTitle="Open navigation menu"
    >
      <Stack justify="between" spacing="none">
        <ButtonLink iconRight={<ChevronDown />} type="secondary">
          Flights
        </ButtonLink>
        <Stack direction="row" justify="end" shrink spacing="100">
          <ButtonLink
            aria-label="Favourites"
            iconLeft={<StarFull />}
            type="secondary"
          />
          <ButtonLink
            aria-label="Questions and Answers"
            iconLeft={<QuestionCircle />}
            type="secondary"
          />
          <ButtonLink
            aria-label="Account"
            iconLeft={<AccountCircle />}
            type="secondary"
          />
        </Stack>
      </Stack>
    </NavigationBar>
  );
}

export default NavigationBarDemo;
